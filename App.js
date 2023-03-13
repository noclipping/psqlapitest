import PG from 'pg';
import express from 'express';
import {router} from './routes/trainings.js'
const connectionString = "postgres://txgqvytx:rV4ppwQ8UYgoprY8fNPDpjMHUqOz1J-s@jelani.db.elephantsql.com/txgqvytx"

const pool = new PG.Pool({
  connectionString
})

const app = express();
const port = 3000;

/*
app.get('/:id', (req,res)=>{
  console.log(req.id);
  res.send(req.params.id);
})
*/

app.use('/trainings', router);

app.listen(port, ()=>{
  console.log('App listening on port '+port);
})

export {pool}
