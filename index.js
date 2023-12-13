import express from 'express';
import {getCurriculum} from "./app/services/curriculum.service.js";
import logger from "morgan";

const app = express();

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send({"appName":"MyCurriculum"});
});

app.get('/:id', async (req, res) => {
    const curriculumId = req.params.id;
    const curriculum = await getCurriculum(curriculumId);
    res.send(curriculum)
})

app.listen(3000, () => {
    console.log('Express server initialized');
});