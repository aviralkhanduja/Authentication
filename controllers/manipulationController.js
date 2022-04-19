const Users=require('../models/User');
exports.display=function(req,res){
    res.render('sign_up');
};
exports.createEntry=function(req,res){

    console.log(req.body);
    if(req.body.Password!=req.body.Confirm_Password)
    {
        console.log('Unmatched Passwords**********');
        return res.redirect('/sign-up');
    }
    Users.create(req.body,function(err,newEntry){
        if(err){
            return console.log('error in inserting the post req:-',err);
        }

        console.log('Entry Done:-',newEntry);
        return res.redirect('/');
    });
};