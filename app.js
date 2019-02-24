const http = require('http')
const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log("First middleware!")
//     next()
// })

// app.use((req, res, next) => {
//     console.log('Second middleware!')
//     res.send('<p>fnkjdbskjfb</p>')
// })

app.use('/users', (req, res, next) => {
    res.send('<p> I would like to most politely inform you that you are on the users http request. </p>')
})

app.use('/', (req, res, next) => {
    res.send('<p>You peasant are on the non-users http request!</p>')
})

app.listen(3000)