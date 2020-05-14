import { Http } from "./http";
import { Logger } from "./logger";
import { Database } from "./database";
import { Configuration } from "./configuration";
import { Container } from "inversify";

export const container = new Container();
container.bind<Http>("Http").to(Http);
container.bind<Logger>("Logger").to(Logger);
container.bind<Database>("Database").to(Database);
container.bind<Configuration>("Configuration").to(Configuration);

