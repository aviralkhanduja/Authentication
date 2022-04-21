const express=require('express');
const manipulator=require('./manipulation');
const passport=require('passport');
const router=express.Router();
const homeController=require('../controllers/homeController');
router.get('/',homeController.display);
router.use('/sign-up',manipulator);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), homeController.createSession);

module.exports = router;
