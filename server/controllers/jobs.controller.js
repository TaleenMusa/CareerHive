const Job = require('../models/jobs.model');
const User = require('../models/user.model');

module.exports = {
    create: (req, res) => {
        const {userId} = req.body;
        

        const { jobTitle, jobDescription, area,  category, companyLogo, deadline, companyName, requirements } = req.body;
        const job = new Job({
            title: jobTitle,
            description: jobDescription,
            // location: area,
            category: category,
            image: companyLogo,
            deadline: deadline,
            company: companyName,
            requirements: requirements,
        });
        job.save()
            .then(job => {
                User.findOne({ _id: userId })
                    .then(user => {
                        user.jobs.push(job);
                        user.updateOne({ jobs: user.jobs })
                            .then(() => res.json(job))
                            .catch(err => res.status(400).json(err));
                    })
            })
            .catch(err => res.status(400).json(err));
    },
    allJobs: (req, res) => {
        Job.find({})
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
    }
}