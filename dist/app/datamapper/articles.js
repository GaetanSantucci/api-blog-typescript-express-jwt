var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from '../service/dbClient.js';
import debug from 'debug';
const logger = debug('Datamapper');
const getArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query('SELECT * FROM article');
    return result.rows;
});
const getArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM article WHERE id = $1;`;
    const result = yield pool.query(query, [id]);
    logger('result: ', result.rows);
    return result.rows[0];
});
export { getArticles, getArticle };
