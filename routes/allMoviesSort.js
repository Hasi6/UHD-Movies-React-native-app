const Movies = require('../database/models/Movies');

module.exports = (async (req, res) => {
    try {
      let perPage = 10;
      let page = req.params.page || 1;
  
      let allMoviesCount = await Movies.countDocuments();
      let lastPage = allMoviesCount / perPage;
  
      if (page < 0 || page > lastPage + 1) {
        return res.send("Sorry This page is not available");
      }
  
      let allMovies = await Movies.find()
        .skip(Math.abs(perPage * page - perPage))
        .limit(perPage)
        .sort({ createdDate: -1 });
      res.json({
        allMovies,
        allMoviesCount,
        page,
        pages: Math.ceil(lastPage),
        perPage
      });
    } catch (err) {
      console.error(err.message);
    }
  });