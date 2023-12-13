import {connectToDatabase,closeDatabaseConnection} from "../db/db.config.js"

import {ObjectId} from "mongodb";

export const getCurriculum = async (curriculumId) => {
    const database = await connectToDatabase();
    const curriculum = await database
        .db()
        .collection("curriculums")
        .findOne({_id: new ObjectId(curriculumId)});
    await closeDatabaseConnection();
    return curriculum;
};

