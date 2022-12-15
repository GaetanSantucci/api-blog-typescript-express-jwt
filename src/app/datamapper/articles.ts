import { pool } from '../service/dbClient.js';
import debug from 'debug';
const logger = debug('Datamapper')

const getArticles = async () => {
  const result = await pool.query('SELECT * FROM article')
  return result.rows
}

const getArticle: (id: number) => Promise<{ id: number, title: string, description: string }> = async (id: number) => {
  const query = `SELECT * FROM article WHERE id = $1;`
  const result = await pool.query(query, [id])
  logger('result: ', result.rows);
  return result.rows[0]
}

export { getArticles, getArticle }