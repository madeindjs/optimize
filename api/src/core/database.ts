import { Logger } from "./logger";
import { MongoClient, Db, FilterQuery } from 'mongodb';
import { inject, injectable } from 'inversify';


@injectable()
export class Database {
    private readonly url = 'mongodb://optimize:toor@db:27017/optimize';
    public db: Db;

    public constructor(
        @inject("Logger") private readonly logger: Logger
    ) { }

    async findOne<T>(collectionName: string, parameters: FilterQuery<T>): Promise<T> {
        if (!this.db) {
            await this.initialize();
        }
        return await this.db.collection(collectionName).findOne(parameters);
    }

    private async initialize(): Promise<void> {
        const client = await MongoClient.connect(this.url);
        this.db = client.db('optimize');
        this.logger.info('Connected to MongoDB server');
    }
}