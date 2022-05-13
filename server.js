let express = require('express')
let path = require('path') // for deployment
let states_api = require('./routes/states')

let app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist'))) // for deployment

app.use(express.json())   // enable parsing JSON sent with requests

app.use('/api', states_api)

// error handling
app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)   // log for developer to see
    res.status(500).send('Server error')
})

// Start server on port 3000
// unless there's a different port specified in environment variables
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('App running on port', server.address().port)
})