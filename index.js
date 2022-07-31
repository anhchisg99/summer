import express from 'express'
const app = express()
const port =3000

app.get('/',(rqe,res)=>{
    res.send(`success`)
})
app.listen(port,()=>console.log(`success in ${port}`))