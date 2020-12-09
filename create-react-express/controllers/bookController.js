const db = require('../models/book');

module.exports = {
    //add 
    addBook: (req, res) => {
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //remove 
    removeBookById: (req, res) => {
        db
            .deleteOne({ "": req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getBookById: (req, res) => {
        db
            .findOne({ id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getBooks: (req, res) => {
        db
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
}