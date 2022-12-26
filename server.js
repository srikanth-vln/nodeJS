const express = require('express')
const bodyParser = require('body-parser')
const filesaver = require('fs')
const app = express()
const port='8080'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getAllProjects',(req,res)=> {
    const rawFile = filesaver.readFileSync('db.json')
    const db = JSON.parse(rawFile)
    res.send(db)
})

app.post('/saveAllProjects',(req,res)=> {
    const allProjects = req.body
    filesaver.writeFile('db.json', JSON.stringify(allProjects,null,2), (err)=> {
        if(err) console.log(err)
        res.send("Data written Successfully")
    })
})

app.listen(3000, ()=> console.log('This app is listening at port 3000'))