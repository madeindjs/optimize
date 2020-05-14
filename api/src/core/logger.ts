import { createLogger, format, transports, Logger as Winston } from 'winston';
import { injectable } from 'inversify';

@injectable()
export class Logger {
    public static readonly PARAMETERS = {
        level: 'debug',
        transports: [
            new transports.Console()
        ],
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
        meta: true,
        msg: (req, res) => `${req.method} ${req.url} ${res.statusCode} - ${res.responseTime}ms`,
        expressFormat: true,
        colorize: true,
        ignoreRoute: () => false
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

