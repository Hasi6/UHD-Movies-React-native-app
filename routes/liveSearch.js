const Movies = require('../database/models/Movies');

const liveSearch = async(req, res, next)=>{
    var keyWord = req.params.keyWord;
    try{
    const result = await Movies.find({
        name: {
          $regex: new RegExp(keyWord, "i")
        }}).limit(10);
        res.json({Movies: result});
      }catch(err){
        console.error(err.message);
      }
}

module.exports = liveSearch;