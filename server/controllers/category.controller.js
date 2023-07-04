const Category = require("../models/category.model");

module.exports = {
    index: (req, res) => {
        Category.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,
    create: (req, res) => {
        console.log(req.body)
        Category.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,
    show: (req, res) => {
        Category.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
    ,

}

