require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')

// Define Router paths
const publicDirectoryPath = path.join(__dirname + '/public') //for static images and logos
const viewsPath = path.join(__dirname + '/views')
const viewsPartialsPath = path.join(__dirname + '/views/partials')

// Set up template engine called hbs for express
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(viewsPartialsPath)

app.use(express.static(publicDirectoryPath))

// Integrate Mongoose for MongoDB

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to data base'))



// Start setting up your routes
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 3000)

