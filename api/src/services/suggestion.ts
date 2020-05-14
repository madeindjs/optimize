import { injectable, inject } from "inversify";
import { Database } from "../core/database";
import { Configuration } from "../core/configuration";
import { Http } from "../core/http";
import { escape } from 'querystring';


interface ISuggestionConfiguration {
    suggestionAPI: string;
    suggestionLimit: number;
}

@injectable()
export class Suggestion {

    private readonly

    public constructor(
        @inject("Http") private readonly http: Http,
        @inject("Configuration") private readonly configuration: Configuration,
    ) { }

    public async search(query: string) {
        const { suggestionAPI, suggestionLimit } = await this.configuration.getSuggestionConfiguration();
        const response = await this.http.get(`${suggestionAPI}${escape(query)}`, {});

        if (!response.data[1]) return [];

        const results: string[] = response.data[1];

        console.log(results)
        console.log(suggestionLimit)


        return results.slice(0, suggestionLimit).map(keyword => ({
            keyword,
            uniqCharCount: this.uniqCharCount(keyword)
        }));
    }

    private uniqCharCount(word: string): number {
        const letters = [];

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!letters.includes(letter)) {
                letters.push(letter);
            }
        }

        return letters.length;
    }

}