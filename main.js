const express = require("express")
const cors= require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res,next)=>{

    res.send("project ishlayapti")
})


app.use((req,res,next)=>{

    res.send("bunday sahifa mavjud emas !!")
})




app.listen(8888, ()=>{
    console.log("server run");
    
})