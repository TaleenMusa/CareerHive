const locations = require('../models/location.model.js');

module.exports = {
    index: (req, res) => {
        locations.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,
    create: (req, res) => {
        console.log(req)
        locations.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,
    show: (req, res) => {
        locations.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,
}


