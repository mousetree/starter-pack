import {query} from '../db'

export async function getAll (req, res) {
  const { rows } = await query('SELECT * FROM things')
  res.send(rows)
}