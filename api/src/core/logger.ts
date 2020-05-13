import { createLogger, format, transports, Logger as Winston } from 'winston';
import { injectable } from 'inversify';

@injectable()
export class Logger {
    public static PARAMETERS = {
        level: 'debug',
        transports: [
            new transports.Console()
        ],
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
    };

    private readonly winston: Winston;

    public constructor() {
        this.winston = createLogger(Logger.PARAMETERS);
    }

    public info(message: any) {
        this.winston.info(message);
    }

    public debug(message: any) {
        this.winston.debug(message);
    }

    public error(message: any) {
        this.winston.error(message);
    }
}

