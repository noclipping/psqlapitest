import PG from 'pg';
import express from 'express';
import {router} from './routes/trainings.js'
// const connectionString = "postgres://txgqvytx:rV4ppwQ8UYgoprY8fNPDpjMHUqOz1J-s@jelani.db.elephantsql.com/txgqvytx"
//const connectionString = "postgresql://postgres:RmgtRr8idNfBHnWliOlB@containers-us-west-169.railway.app:6853/railway"
const connectionString = process.env.DATABASE_URL
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

app.listen(process.env.PORT || port, ()=>{
  console.log('App listening on port '+port);
  console.log(connectionString,'connstring')
})

export {pool}
