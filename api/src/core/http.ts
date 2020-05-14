import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Logger } from "./logger";
import { injectable, inject } from "inversify";

@injectable()
export class Http {

    public constructor(
        @inject("Logger") private readonly logger: Logger
    ) { }

    public async get(
        url: string,
        config: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        const requestDescription = `GET ${url} ${JSON.stringify(
            config.params
        )}`;

        this.logger.info(`${requestDescription}`);

        return await Axios.get(url, config)
            .catch(e => {
                this.logger.error(JSON.stringify(e.response));
                throw e;
            });
    }

    public async post(
        url: string,
        data: any,
        config: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        const requestDescription = `POST ${url} ${JSON.stringify(data)}`;

        this.logger.info(`${requestDescription}`);

        return await Axios.post(url, data, config)
            .catch(e => {
                this.logger.error(JSON.stringify(e.response.data));
                throw e;
            });
    }
}
