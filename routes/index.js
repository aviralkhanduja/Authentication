const express=require('express');
const manipulator=require('./manipulation');
const passport=require('passport');
const router=express.Router();
const homeController=require('../controllers/homeController');
router.get('/',passport.restrictAccess,homeController.display);
router.get('/user-profile',passport.checkAuthentication,homeController.displayUserSpecific);
router.use('/sign-up',passport.restrictAccess,manipulator);
router.post('/create-session', passport.authenticate(
    'local',
    {failureMessage: true,failureRedirect: '/'},
), homeController.createSession);
router.get('/sign-out',homeController.destroySession);
module.exports = router;
