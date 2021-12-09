const express = require('express')
const port = 3001
var cors = require('cors')
const app = express()
const multer  = require('multer')
const bodyParser = require('body-parser');
const fs = require('fs')
app.use(express.json());
app.use(cors())

const imageDir = 'C:/Users/Arielle/DRAFT_APPS/colorpalettes/public/assets/images';
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, imageDir)
    },
    filename: (req, file, cb) => {
        console.log("now the last file uploaded is " + Date.now() + '_' + file.originalname);
        cb(null, Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage });
const {Client} = require('pg')


 


// add info to colPals database
async function insertPalInfo(newforminfo, imageloc) {
    const client = new Client ({
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "arielle",
        database: "postgres"
    });
    await client.connect();
    try {
        const queryText = 'INSERT INTO public."colpals"(name, col1rgb, col2rgb, col3rgb, col1fam, col2fam, col3fam, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const values = [newforminfo.name, newforminfo.col1rgb, newforminfo.col2rgb, newforminfo.col3rgb, newforminfo.col1fam, newforminfo.col2fam, newforminfo.col3fam, imageloc];
        const res = await client.query(queryText, values);
        const myrows = res.rows;
        console.log( myrows);
        await client.end();
        return myrows;
    } catch(err) {
        console.log(err.message);
    }
}

// Connect to postgrest table COLPALS and return table rows (myrows) that match element for col1fam col2fam or col3fam
async function selectcolfromcolpals(element) {
    const client = new Client ({
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "arielle",
        database: "postgres"
    });
    await client.connect();
    try {
        const res = await client.query(`SELECT * FROM public."colpals" WHERE col1fam = $1 OR col2fam = $1 OR col3fam = $1`, [element]);
        const myrows = res.rows;
        await client.end();
        return myrows
    } catch(err) {
        console.log(err.message);
    }
}

// Connect to postgrest table COLPALS and return all rows
async function selectallfromcolpals(element) {
    const client = new Client ({
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "arielle",
        database: "postgres"
    });
    await client.connect();
    try {
        const res = await client.query(`SELECT * FROM public."colpals"`);
        const myrows = res.rows;
        await client.end();
        return myrows
    } catch(err) {
        console.log(err.message);
    }
}


app.get('/', async (req, res) => {
 
    let mypals = await selectallfromcolpals();
    console.log(mypals);
  
    res.send({palettes:mypals});
})

function imageLocation(){
    const folder = fs.readdirSync(imageDir);
    const fullLocation = `${imageDir}/${folder[folder.length-1]}`
    return fullLocation
}

app.post('/palettepost', upload.single('image'), async (req, res)=>{

   
    let imageloc = imageLocation()
    let newforminfo = req.body;   
    const folder = fs.readdirSync(imageDir);
    console.log('this image location is ' + imageLocation())
    await insertPalInfo(newforminfo, `assets/images/${folder[folder.length-1]}`);
    res.end();
})


app.get("/palettes/:colorFamily", async (req, res) => {
    let element = req.params.colorFamily;
    let mypals = await selectcolfromcolpals(element);
    res.send(mypals);
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})



