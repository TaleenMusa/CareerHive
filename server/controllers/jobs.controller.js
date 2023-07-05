const Job = require('../models/jobs.model');
const User = require('../models/user.model');
const Location = require('../models/location.model');

module.exports = {
    create: (req, res) => {
        const {userId} = req.body;
        

        const { jobTitle, jobDescription, locationId,  category, companyLogo, deadline, companyName, requirements } = req.body;
        const job = new Job({
            title: jobTitle,
            description: jobDescription,
            location: locationId,
            category: category,
            image: companyLogo,
            deadline: deadline,
            company: companyName,
            requirements: requirements,
            user: userId
        });
        job.save()
            .then(job => {
                User.findOne({ _id: userId })
                    .then(user => {
                        user.jobs.push(job);
                        user.updateOne({ jobs: user.jobs })
                            .then(() => {
                                Location.findOne({ _id: locationId })
                                    .then(location => {
                                        location.jobs.push(job);
                                        location.updateOne({ jobs: location.jobs })
                                            .then(() => res.json(job))
                                            .catch(err => res.status(400).json(err));
                                    }
                                    )
                            })
                            .catch(err => res.status(400).json(err));
                    })
                    
                    
            })
            .catch(err => res.status(400).json(err));

            
    },
     allJobs: (req, res) => {
        Job.find({})
        .populate('location', 'location')
        .populate('category', 'Category')
        .populate('user', 'Fname Lname Email')
          .then(jobs => res.json(jobs))
          .catch(err => res.status(400).json(err));
      },
      
    oneJob: (req, res) => {
        Job.findOne({ _id: req.params.id })
            .then(job => res.json(job))
            .catch(err => res.status(400).json(err));
    },
    userJobs: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json(user.jobs))
            .catch(err => res.status(400).json(err));
    },
    getJobwithuser: (req, res) => {
        const jobId = req.params.id;
        Job.findById(jobId)
        .populate('category', 'Category')
        .populate('user', 'Fname Lname Email')
        .populate('location', 'location')
          .then(job => {
            if (!job) {
              return res.status(404).json({ error: 'Job not found' });
            }
    
            res.json( job );
          })
          .catch(err => res.status(400).json(err));
      },
      updateJobs: (req, res) => {
        Job.find({})
            .then(jobs => {
                for (let job of jobs) {
                    job.category = '64a47c2a50ea08c297ddafde';
                    job.save()
                    console.log(job)
                }
            })
      },
      deleteJob: (req, res) => {
        Job.deleteOne({ _id: req.params.id })
          .then(deleteConfirmation => res.json(deleteConfirmation))
          .catch(err => res.status(400).json(err));
      }

}