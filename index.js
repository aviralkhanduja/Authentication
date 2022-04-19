const express=require('express');
const app=express();
app.use(express.urlencoded());
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('views','./views');
app.set('view engine','ejs');
const db=require('./config/mongoose');
const router=require('./routes/index');
app.use('/',router);
app.listen(8000, function(err){
    if(err){
        return console.log('Error in starting the server ',err);
    }
    return console.log('Server up and Running on ',8000);
});