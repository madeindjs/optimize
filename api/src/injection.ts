import { Http } from "./core/http";
import { Logger } from "./core/logger";
import { Database } from "./core/database";
import { Configuration } from "./core/configuration";
import { Container } from "inversify";
import { Suggestion } from "./services/suggestion";

export const container = new Container();
container.bind<Http>("Http").to(Http);
container.bind<Logger>("Logger").to(Logger);
container.bind<Database>("Database").to(Database);
container.bind<Configuration>("Configuration").to(Configuration);
container.bind<Suggestion>("Suggestion").to(Suggestion);

