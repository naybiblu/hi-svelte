import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

export const db = new MongoClient(MONGO_URL);

export const connect = async() => {
    await db.connect();
};