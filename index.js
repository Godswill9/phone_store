const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/api/names",(req, res)=>{
    console.log(req.body)
    res.send(
        {
            name:"Godswill",
            age:"19"
        })
})
app.post("/names",(req, res)=>{
    console.log(req.body)
    res.send([{
        approved:"true",
        request:"recieved"
            },{
        approved:"true",
        request:"recieved"
            },{
        approved:"true",
        request:"recieved"
            },])
})

app.listen(3001, ()=>{
    console.log("app is working")
})