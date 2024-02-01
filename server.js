const express=require('express')
const app= express()
const port=3000

/*app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard Page")
})
app.get('/about',(req,res)=>{
    res.send({
        Name:"Jayashree Mali",
        Address:'Sangli'
    })
})
app.get('*',(req,res)=>{
    res.send("Random page..")
})*/

const appRouter=require('./routes/app')
app.use('/about',appRouter)

app.listen(port,()=>{
    console.log('server started,port',port)
})
