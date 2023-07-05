const Users = require("../controllers/user.controller");
const Jobs = require("../controllers/jobs.controller");
const Locations = require("../controllers/locations.controller");
const Categories = require("../controllers/category.controller");
const {authenticate,authenticateAdmin,authenticateOwner } = require("../config/jwt.config");


module.exports = app=>{
    app.post("/api/register", Users.register)
    app.post("/api/login", Users.login)
    app.get("/api/users/loggedin",authenticate, Users.getLoggedInUser)
    app.get("/api/users/logout", Users.logout)
    app.get("/api/user/:userId/jobs", Users.Jobs)
    app.post("/api/jobs", Jobs.create)
    app.get("/api/jobs", Jobs.allJobs)
    app.get("/api/jobs/:id", Jobs.getJobwithuser)
    app.get("/api/users/:id/jobs", Jobs.userJobs)
    app.post("/api/locations", Locations.create)
    app.get("/api/locations", Locations.index)
    app.post("/api/category",Categories.create)
    app.get("/api/category", Categories.index)
    app.delete("/api/jobs/:id", Jobs.deleteJob)
    app.put("/api/jobs/:id", Jobs.updateJob)
    app.post('/api/:userId/company', Users.setCompany)
    app.get('/api/company/:id', Users.getCompany)
}