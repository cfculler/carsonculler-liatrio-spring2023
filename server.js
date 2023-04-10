const express = require('express')
const app = express()

app.set('json spaces', "\t");

app.get('/', (request, response) => {
    console.log("In JSON block")
    response.json({
        message: "My name is Carson",
        timestamp: Date.now()
    })
})

app.listen(8080)