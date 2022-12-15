var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getArticles, getArticle } from '../datamapper/index.js';
import debug from 'debug';
const logger = debug('Controller');
const getAllArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // j utilise ma methode pour aller chercher mes donnees 
    const result = yield getArticles();
    res.json({ texte: "Hello typescript, jaimepatagueule", results: result });
});
const getArticleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    logger('id: ', id);
    try {
        const result = yield getArticle(id);
        logger('result: ', result);
        return res.json({ texte: `Article numero: ${id} `, results: result });
    }
    catch (err) {
        const typedError = err;
        // if (err instanceof Error) {
        return res.status(500).json(typedError);
        // }
        // return res.status(500).json(err)
    }
});
export { getAllArticles, getArticleById };
