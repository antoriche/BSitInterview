import express from 'express'
import * as championsHander from "../handlers/champions.handler";

const router = express.Router();

router.get('/', championsHander.getAll);
router.get('/:id', championsHander.getOne);

module.exports = router;