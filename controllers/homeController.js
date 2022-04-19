const { response } = require('express');
const Users=require('../models/User');
exports.display=function(req,res){
    if(req.cookies.user_id!='ended')
    {
        return res.redirect('/user-profile');
    }
    return res.render('login');
};
exports.login=function(req,res){
    //crededentials check
    Users.findOne({Email:req.body.Email},function(err,item){
        if(err){
            console.log('Error in fetching info from db while logging in:-',err);
            return res.redirect('/');
        }
        res.cookie('user_id',item._id);
        if(item&&item.Password===req.body.Password)
        {
            console.log('reached right place');
            return res.render('user_profile',{val:1234,name:item.First_Name});
        }
        else{
           return res.redirect('/');
        }
    });
};
exports.check_validiity=function(req,res){
    if(req.cookies.user_id!='ended'){
        Users.findOne({_id:req.cookies.user_id},function(err,item){
            if(err){
                console.log('Error in fetching info from db for now',err);
                return res.redirect('/');
            }
            if(item){
                return res.render('user_profile',{val:1234,name:item.First_Name});
            }
            else{
                return res.redirect('/');
            }
        });
    }
    else{
        res.redirect('/');
    }
};
exports.endSession=function(req,res){
    res.cookie('user_id','ended');
    res.redirect('/');
};