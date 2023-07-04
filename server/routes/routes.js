const Users = require("../controllers/user.controller");
const Jobs = require("../controllers/jobs.controller");
const {authenticate } = require("../config/jwt.config");


module.exports = app=>{
    app.post("/api/register", Users.register)
    app.post("/api/login", Users.login)
    app.get("/api/users/loggedin",authenticate, Users.getLoggedInUser)
    app.get("/api/users/logout", Users.logout)
    app.post("/api/jobs", Jobs.create)
    app.get("/api/jobs", Jobs.allJobs)
    app.get("/api/jobs/:id", Jobs.oneJob)
    app.get("/api/users/:id/jobs", Jobs.userJobs)


}