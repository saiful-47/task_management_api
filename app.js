import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import mongoose from 'mongoose';
import router from './routes/api.js';
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIMEOUT, URL_ENCODING, WEB_CACHE
} from "./app/config/config.js";


const app = express();

// app use default middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODING }));
app.use(helmet());

// app use limiter
const limiter = rateLimit({windowMs:REQUEST_TIMEOUT, max: REQUEST_NUMBER});
app.use(limiter);

//web cache
app.set('etag', WEB_CACHE);

// database
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Database Connected");
});

app.use("/api", router);

app.listen(PORT, () => {
    console.log("Server running on port:" +PORT);
})