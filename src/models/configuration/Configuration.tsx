import {LoggerService, LogLevel} from "../../logger-service";

const DEFAULT_STRING_VALUE = 'config-value-not-set';

export type IConfiguration = {
    LogLevel: LogLevel | null;
};

const create = (args: Partial<IConfiguration> = {}): IConfiguration => ({
    LogLevel: LoggerService.parseLogLevel(args.LogLevel)
});

const Configuration = {
    create: create
};

export default Configuration;
