const Movies = require("../database/models/Movies");
const Comments = require("../database/models/Comments");
const Upnext = require("../database/models/Upnext");

module.exports = async (req, res) => {
  const MovieId = req.params.id;
  try {
    let singleMovie = await Movies.findById(MovieId);
    singleMovie.views++;
    singleMovie.save();
    singleMovie = await Movies.findById(MovieId);
    const comments = await Comments.find({movieId: MovieId}).sort([['createdDate', -1]]);
    const news = await Upnext.find().sort([['createdDate', -1]]).limit(10);
    let n = Movies.find().countDocuments();
    let r = Math.floor(Math.random() * n);
    let randomMovies = await Movies.find()
      .skip(r)
      .limit(6);
    res.json({
      singleMovie: singleMovie,
      randomMovies: randomMovies,
      comments:comments,
      news:news
    });
  } catch (err) {
    console.error(err.message);
  }
};
