// Setup exrpess requirements
const express = require('express')
const app = express(); 
const port = process.env.PORT || 5000;

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
    res.send({message: 'Turned on LED 1'})
})

app.get('/api/ledSwitch1Off', (req,res) => {
    PythonShell.run('./python/ledSwitch1Off.py', function (err) {
        if (err) throw err
        console.log('switch 1 off')
    })
    res.send({message: 'Turned off LED 1'})
})

// LED LIGHT STRIPS 1
app.get('/api/ledSwitch2On', (req,res) => {
    PythonShell.run('./pythonledSwitch2On.py', function (err) {
        if (err) throw err
        console.log('switch 2 on')
    })
    res.send({message: 'Turned off on LED 2'})
})

app.get('/api/ledSwitch2Off', (req,res) => {
    PythonShell.run('./pythonledSwitch2Off.py', function (err) {
        if (err) throw err
        console.log('switch 2 off')
    })
    res.send({message: 'Turned off on LED 2'})
})

// LED LIGHT STRIPS 1
app.get('/api/ledSwitchAllOn', (req,res) => {
    PythonShell.run('./pythonledSwitchAllOn.py', function (err) {
        if (err) throw err
        console.log('switch 2 on')
    })
    res.send({message: 'Turned on all LEDs'})
})

app.get('/api/ledSwitchAllOff', (req,res) => {
    PythonShell.run('./pythonledSwitchAllOff.py', function (err) {
        if (err) throw err
        console.log('switch 2 off')
    })
    res.send({message: 'Turned off all LEDs'})
})

app.listen(port, () => console.log(`listening on port ${port}`))