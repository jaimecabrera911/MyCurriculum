import {connectToDatabase,closeDatabaseConnection} from "../db/db.config.js"

import {ObjectId} from "mongodb";
import {logger} from "../config/logger.js";

export const getCurriculum = async (curriculumId) => {
    const database = await connectToDatabase();
    logger.info(curriculumId)
    const curriculum = await database
        .db()
        .collection("curriculums")
        .findOne({_id: new ObjectId(curriculumId)});
    logger.info(curriculum)
    await closeDatabaseConnection();
    return curriculum;
};

