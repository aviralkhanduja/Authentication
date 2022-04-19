const express=require('express');
const router=express.Router();
const controller=require('../controllers/manipulationController');
router.get('/',controller.display);
router.post('/add-user',controller.createEntry);
module.exports=router;