
class NewsController {
    
    // (GET) /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Hello World');
    }
}

module.exports = new NewsController;