import { Request, Response } from "express";
import { container } from "../core/injection";
import { Http } from "../core/http";
import { Configuration } from "../core/configuration";
const fs = require("fs");

export class RootController {
    public index(req: Request, res: Response) {
        console.log('sugges')
        res.end(fs.readFileSync("./README.md", "utf8"));
    }
}

export class SuggestionsController {
    public async index(req: Request, res: Response) {
        container.get<Configuration>("Configuration").getSuggestionConfiguration()
            .then(suggestionConfiguration => res.send(suggestionConfiguration))
            .catch(error => res.send(error).status(500));
    }
}
