import { Http } from "./http";
import { Logger } from "./logger";
import { Container } from "inversify";

export const container = new Container();
container.bind<Http>("Http").to(Http);
container.bind<Logger>("Logger").to(Logger);

