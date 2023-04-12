const express = require('express')
const app = express()

app.set('json spaces', "\t");

app.get('/', (request, response) => {
    response.json({
        message: "My name is Carson",
        timestamp: Date.now()
    })
})

app.listen(8080)
console.log("App listening on http://localhost:8080")