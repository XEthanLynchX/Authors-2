const Author = require('../models/authors.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
    {_id : req.params.id},req.body, //make sure it has the _ before id 
    //req.body is the data that we are sending to the server
    {new:true , runValidators:true} // runValidators is important you need it for the front end
    )
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err)); //400 is important
        
},


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json({result }))
        .catch(err => res.json(err));
}




  

