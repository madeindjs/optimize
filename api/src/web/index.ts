import app from "./app";
import { container } from "../injection";
import { Logger } from "../core/logger";

const PORT = process.env.PORT || 3000;
const logger = container.get<Logger>("Logger");

app.listen(PORT, () => logger.info(`API listening on port ${PORT}!`));
