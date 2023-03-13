import {pool} from '../App.js';
import express from 'express';
let router = express.Router();
const getTrainings = (req,res) =>{
  pool.query('SELECT * FROM trainings', (err, data)=>{
    console.log(err,data.rows);
    res.send(data.rows);
    })
}
router.get('/', getTrainings);
export {router}
