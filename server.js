const express = require('express')
const app = express()

app.set('json spaces', "\t");

app.get('/', (request, response) => {
    response.json({
        message: "My name is Carson. Thanks for watching my demo!",
        timestamp: Date.now(),
    })
})

app.listen(80)
console.log("App listening on http://localhost:80")
