
import express from 'express';
import axios from 'axios';

const app = express();
let port = 3000;

app.use(express.static("public"));

app.get("/",async (req, res)=>{
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret:result.data.secret,
            user: result.data.username,
        });
    }catch(error){
        res.status(500).send("Error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})