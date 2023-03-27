const authors = require('../controllers/authors.controller.js');

module.exports = function(app) {
    app.post('/api/authors', authors.createAuthor);
    app.get('/api/authors', authors.getAllAuthors);
    app.get('/api/authors/:id', authors.getAuthor);
    app.put('/api/authors/:id', authors.updateAuthor);
    app.delete('/api/authors/:id', authors.deleteAuthor);
}




