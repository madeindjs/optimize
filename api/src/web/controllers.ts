import { Request, Response } from "express";
import { container } from "../injection";
import { injectable } from "inversify";
import { Suggestion } from "../services/suggestion";
const fs = require("fs");

@injectable()
export class RootController {
    public index(req: Request, res: Response) {
        res.end(fs.readFileSync("./README.md", "utf8"));
    }
}

@injectable()
export class SuggestionsController {
    public async index(req: Request, res: Response) {
        container.get<Suggestion>("Suggestion").search(req.query.q)
            .then(results => res.send(results))
            .catch(error => res.send(error).status(500));
    }
}
