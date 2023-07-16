import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

import connect from './databse/conn.js';


import router from './router/route.js';

const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');



const PORT = process.env.PORT || 8081;



// HTTP GET request
app.get('/', (req, res) => {
    res.status(201).json("HOME GET Request");
    }
)


// api routes

app.use('/api', router);


// Start server only when we have valid connection
connect().then(() => {
    try {
        app.listen(PORT, () => {console.log(`Server started...${PORT}`);});
    } catch (error) {
        console.log("Couldn't connect to the server: ", error);
    }
}).catch(error => console.log("Invalid connection:"));





