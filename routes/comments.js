const Comments = require('../database/models/Comments');

module.exports = async (req, res)=>{

    const movieId = req.params.id;
    const { name, email, message } = req.body;

    let comment = new Comments({
        movieId,
        name,
        email,
        message
    });

    console.log(name);

    try{
        const success = await comment.save();
        const comments = await Comments.find({movieId: movieId}).sort([['createdDate', -1]]);
        if(success){
            return res.json({
                comments
            });
        }
        return res.json('weradi');
    }catch(err){
        console.error(err.message);
    }
}