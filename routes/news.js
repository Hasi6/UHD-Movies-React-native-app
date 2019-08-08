const Upnext = require('../database/models/Upnext');
const User = require('../database/models/User');

module.exports = async (req, res)=>{
    const { movieName, image, idbmRating } = req.body;

    const userId = req.session.userId;
    try{
    if(!userId){
        return res.redirect('/');
    }

    const user = await User.findById(userId);

    if(!user){
        return res.redirect('/');
    }

    const news = new Upnext({
        movieName,
        image,
        idbmRating
    });

    const success = await news.save();

    if(success){
        return res.redirect('/');
    }
    return res.send('Error Please try Again later');
}catch(err){
    console.error(err.message);
}
}