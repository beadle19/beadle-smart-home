// Setup exrpess requirements
const express = require('express')
const app = express(); 
const port = process.env.PORT || 5000;

// Setup running python
let PythonShell = require('python-shell')

app.get('/api/hello', (req, res)=> {
    res.send({express: 'Hello From Express'})
})

app.get('/api/python', (req,res)=> {
    PythonShell.run('./python/switchon.py', function (err) {
        if (err) throw err
        console.log('finished')
    });
    res.send({message: 'Ran script'})
});

app.listen(port, () => console.log(`listening on port ${port}`))