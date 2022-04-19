const express=require('express');
const manipulator=require('./manipulation');
const router=express.Router();
const homeController=require('../controllers/homeController');
router.get('/',homeController.display);
router.use('/sign-up',manipulator);
module.exports=router;
