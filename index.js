const express = require('express')
const app = express()
const port = 5000
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const fetch = require('node-fetch')

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'assets')))


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));


const login = require('./routes/login')
const data = require('./routes/data')

app.use("/data", data)
app.use("/login", login)



app.get('/', (req, res) => res.render('index'))

app.get('/contact', (req, res) => res.render('contact'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//app.listen(process.env.port || 5000)

app.use(function(req,res,next){
    res.status(404).render('404')

});