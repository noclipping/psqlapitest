import {pool} from '../App.js';
import express from 'express';
let router = express.Router();
const getTrainings = (req,res) =>{
  pool.query('SELECT * FROM trainings', (err, data)=>{
    if(err){
      console.log(err);
      res.send(err);
    }else {
      console.log(data.rows);
      res.send(data.rows);
      }
    })
}
router.get('/', getTrainings);
export {router}
