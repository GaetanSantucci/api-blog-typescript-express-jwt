import { Request, Response } from 'express'
import { getArticles, getArticle } from '../datamapper/index.js';

import debug from 'debug';
const logger = debug('Controller')

const getAllArticles = async (req: Request, res: Response) => {
  // j utilise ma methode pour aller chercher mes donnees 
  const result = await getArticles()
  res.json({ texte: "Hello typescript, jaimepatagueule", results: result })
}

const getArticleById = async (req: Request, res: Response) => {
  const id = +req.params.id;
  logger('id: ', id);
  try {
    const result = await getArticle(id);
    logger('result: ', result);
    return res.json({ texte: `Article numero: ${id} `, results: result })
  } catch (err) {
    const typedError = err as Error;
    // if (err instanceof Error) {
    return res.status(500).json(typedError)
    // }
    // return res.status(500).json(err)
  }

}

export { getAllArticles, getArticleById }