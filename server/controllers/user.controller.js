const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jwt.config");
const Company = require("../models/company.model");


class UserController {
    register(req, res){
        const user = new User(req.body)
        user.save()
            .then(()=>{
              res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true} )
              .json({msg: "successfully created user", user: user})
            })
            .catch(err=> res.json(err))
    }

    login(req, res){
        User.findOne({Email: req.body.Email})
            .then(user=>{
                if(user === null){
                    res.json({msg: "invalid login attempt-user not found"})
                } else{
                    bcrypt.compare(req.body.Password, user.Password)
                        .then(passwordIsValid=>{
                            if(passwordIsValid){
                                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly:true})
                                .json({msg: "success!"});
                            }else{
                                res.json({msg: "invalid login attempt- password incorrect"})
                            }
                        })
                        .catch(err=> {
                            res.json({msg: "invalid login attempt", err})
                        } )
                }
            })
            .catch(err=> res.json(err))
    }

    getLoggedInUser(req,res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});

        User.findById(decodedJWT.payload._id)
            .then(user=> res.json({user}))
            .catch(err=> res.json(err))

    }

    logout(req,res){
        res.cookie("usertoken", jwt.sign({_id:""}, secret), {
            httpOnly: true,
            maxAge: 0
        }).json({msg:"ok"})
    }
    Jobs(req,res){
        User.findOne({_id: req.params.userId})
            .populate("jobs", "title description location category createdAt deadline company requirements status") 
            .then(user=> {
                res.json(user.jobs)
            })
            .catch(err=> res.json(err))
    }
    setCompany(req, res) {
        User.findOne({ _id: req.params.userId })
            .then(user => {
                if (user.company === undefined) {
                    const company = new Company({
                        name: req.body.name,
                        logo: req.body.logo,
                        social: req.body.social,
                        user: req.params.userId
                    });
    
                    company.save()
                        .then(savedCompany => {
                            User.findOneAndUpdate({ _id: req.params.userId }, { company: savedCompany._id }, { new: true })
                                .then(updatedUser => res.json(updatedUser))
                                .catch(err => res.json(err));
                        })
                        .catch(err => res.json(err));
                } else {
                    Company.findOneAndUpdate(
                        { _id: user.company },
                        {
                            name: req.body.name,
                            logo: req.body.logo,
                            social: req.body.social,
                            user: req.params.userId
                        },
                        { new: true } // Return the updated company object
                    )
                        .then(updatedCompany => res.json(updatedCompany))
                        .catch(err => res.json(err));
                }
            })
            .catch(err => res.json(err));
    }
    getCompany(req, res) {
        console.log(req.params.id)
        Company.findOne({ _id: req.params.id })
            .then(company => res.json(company))
            .catch(err => res.json(err).status(400));
    }
    

}
module.exports = new UserController()