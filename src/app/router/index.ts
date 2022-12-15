// ~ ROUTER CONFIG ~ //

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, world! how are you man ?');
})

import { router as articleRouter } from './articles/index.js';
router.use("/api/v1", articleRouter);

export { router };