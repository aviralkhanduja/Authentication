exports.display=function(req,res){
    res.render('login');
};
module.exports.createSession = function(req, res){
    console.log("&&& right Place!");
    return res.redirect('/sign-up');
}