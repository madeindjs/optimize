import { Request, Response } from "express";
import { container } from "../core/injection";
import { Http } from "../core/http";
const fs = require("fs");

export class RootController {
    public index(req: Request, res: Response) {
        res.end(fs.readFileSync("./README.md", "utf8"));
    }
}

export class SuggestionsController {
    public index(req: Request, res: Response) {
        const http = container.get<Http>("Http");
        // TODO
    }
}
