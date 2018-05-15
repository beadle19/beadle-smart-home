// Setup exrpess requirements
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Setup running python
let PythonShell = require('python-shell')

app.get('/api/hello', (req, res)=> {
    res.send({express: 'Hello From Express'})
})

// LED LIGHT STRIPS 1
app.get('/api/ledSwitch1On', (req,res) => {
    PythonShell.run('./python/ledSwitch1On.py', function (err) {
        if (err) throw err
        console.log('switch 1 on')
    })
    res.send({message: 'on'})
})

app.get('/api/ledSwitch1Off', (req,res) => {
    PythonShell.run('./python/ledSwitch1Off.py', function (err) {
        if (err) throw err
        console.log('switch 1 off')
    })
    res.send({message: 'off'})
})

// LED LIGHT STRIPS 2
app.get('/api/ledSwitch2On', (req,res) => {
    console.log('2on')
    PythonShell.run('./python/ledSwitch2On.py', function (err) {
        if (err) throw err
        console.log('switch 2 on')
    })
    res.send({message: 'on'})
})

app.get('/api/ledSwitch2Off', (req,res) => {
     console.log('2off')
    PythonShell.run('./python/ledSwitch2Off.py', function (err) {
        if (err) throw err
        console.log('switch 2 off')
    })
    res.send({message: 'off'})
})

// LED LIGHT STRIPS All
app.get('/api/ledSwitchAllOn', (req,res) => {
    PythonShell.run('./python/ledSwitchAllOn.py', function (err) {
        if (err) throw err
        console.log('All accent lighting on')
    })
    res.send({message: 'on'})
})

app.get('/api/ledSwitchAllOff', (req,res) => {
    PythonShell.run('./python/ledSwitchAllOff.py', function (err) {
        if (err) throw err
        console.log('All accent lighting off')
    })
    res.send({message: 'off'})
})

server.listen(port, () => console.log(`listening on port ${port}`))
