const db = require("../models/book");
const controller = require("../controllers/bookController");

module.exports = function (app) {
    app.get("/api/books", controller.getBooks);

    app.put("/api/images/:id", function (req, res) {
        db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function (dbImage) {
            res.json(dbImage);
        });
    });
};