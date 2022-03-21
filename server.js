const express = require('express')
const app=express()
const path = require("path")


app.use(express.static('public'))
app.use('/Stylesheet', express.static(path.join(__dirname, 'public/Stylesheet')))


app.use(express.static(path.join(__dirname, 'public/')))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.listen(3000)
