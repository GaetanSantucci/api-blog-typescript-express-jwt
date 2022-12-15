import { pool } from '../service/dbClient.js';
import debug from 'debug';
const logger = debug('Datamapper')
import { Article } from '../Types/articles.js'

const getArticles = async () => {
  const result = await pool.query('SELECT * FROM article')
  return result.rows
}

const getArticle: (id: number) => Promise<Article> = async (id) => {
  const query = `SELECT * FROM article WHERE id = $1;`
  const result = await pool.query(query, [id])
  logger('result: ', result.rows);
  return result.rows[0]
}

export { getArticles, getArticle }