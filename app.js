const express =require("express")
const path= require("path")
const app=express()

app.get('/', (req,res)=>{
    res.send("ahora si entre")
})

app.get('/home', (req,res)=>{
    res.sendFile((__dirname + '/views/home.html'))

})
app.get('/login', (req,res)=>{
    res.sendFile((__dirname + '/views/login.html'))

})
app.get('/register', (req,res)=>{
    res.sendFile((__dirname + '/views/register.html'))

})

app.use(express.static(path.join(__dirname, './public')))

app.listen(process.env.PORT||3003,function(){
    console.log("servidor corriendo")

})