import express from 'express'
import config from './config'
import things from './things'

const app = express()

app.use('/api/things', things)

app.get('/', (req,res) => res.send('Hello'))

app.listen(config.port, () => console.log(`API listening on port ${config.port}...`))