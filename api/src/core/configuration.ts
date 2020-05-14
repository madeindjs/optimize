import { injectable, inject } from "inversify";
import { Database } from "./database";


interface ISuggestionConfiguration {
    suggestionAPI: string;
    suggestionLimit: number;
}

@injectable()
export class Configuration {

    public constructor(
        @inject("Database") private readonly database: Database,
    ) { }

    async getSuggestionConfiguration(): Promise<ISuggestionConfiguration> {
        return await this.database.findOne<ISuggestionConfiguration>('config', {});
    }
}