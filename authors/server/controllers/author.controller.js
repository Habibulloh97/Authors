const Author = require("../models/author.model")

module.exports.createAuthor =(req,res) =>{
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err=> res.json({message: "Something went wrong when adding an author to the database!!", err: err}))
}

module.exports.findAllAuthors = (req,res) =>{
    Author.find({}).sort('name')
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Something went wrong when grabbing all authors!!", err: err}))
}

module.exports.findOneAuthor = (req,res) =>{
    Author.findOne({_id: req.params._id})
        .then(oneAuthor=> res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when grabbing one author!!", err: err}))
}

module.exports.updateAuthor = (req,res) => {
    Author.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneAuthor=> res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when updating an author!!", err: err}))
}

module.exports.deleteAuthor = (req,res) =>{
    Author.remove({_id: req.params._id})
        .then(res.json({message: "Author was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when deleting an author from the database!!", 
        err: err}))
}