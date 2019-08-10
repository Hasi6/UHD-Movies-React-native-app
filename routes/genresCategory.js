const Movies = require("../database/models/Movies");

module.exports = async (req, res) => {
  try {
    const category = req.params.category;
    const pageNum = req.params.page
    console.log(pageNum);

    const moviesCount = await Movies.find({
      category: { $regex: new RegExp(category, "i") }
    }).countDocuments();

    let perPage = 4;
    let lastPages = moviesCount / perPage;

    if (pageNum < 0 || pageNum > lastPages + 1) {
      return res.send("Sorry This page is not available");
    }

    const searchMovies = await Movies.find({
      category: { $regex: new RegExp(category, "i") }
    })
      .skip(Math.abs(perPage * pageNum - perPage))
      .limit(perPage)
      .sort({ createDate: 1 });

    console.log(await Movies.find({
      category: { $regex: new RegExp(category, "i") }
    })
      .skip(Math.abs(perPage * pageNum - perPage)).countDocuments());
    res.json({
      searchMovies,
      moviesCount,
      pageNum,
      pages: Math.ceil(lastPages),
      perPage: perPage,
      category
    });
  } catch (err) {
    console.error(err.message);
  }
};
