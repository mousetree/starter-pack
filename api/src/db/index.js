import { Pool } from 'pg'
import config from '../config'

const pool = new Pool({
  connectionString: config.database.url,
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}