const PORT = 8000
const express =require('express')
const cors = require('cors')
const App = express()
App.use(express.json())
App.use(cors())

const API_KEY = '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'

App.post('/completions',async (req,res)=>{
    const options = {
        method:"POST",
        headers:{
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages : [{role:"user",content:req.body.message}],
            max_tokens:100,

        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions',options)
        const data = await response.json()
        res.send(data)
    }catch(error){
        console.error(error);
    }
})
App.listen(PORT,()=>console.log('your server is running on PORT'+PORT))
