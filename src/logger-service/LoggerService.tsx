/* eslint-disable no-console */

/**
 * @public
 * Reference: https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.loglevel?view=dotnet-plat-ext-3.1
 * @readonly
 * @enum {number}
 */
export enum LogLevel {
    /** Highly detailed messages. */
    Trace,

    /** Messages useful for debugging application behavior. */
    Debug,

    /** Messages tracking the general flow of the application. */
    Information,

    /** Messages warning the user of unexpected events that are recoverable or did not stop execution */
    Warning,

    /** Messages describing an event that hinders the flow of the application. */
    Error,

    /** Messages describing an unrecoverable event that requires immediate attention. */
    Critical,

    /** Turns off logging. Not used for writing log messages. */
    None
}

interface ILoggerService {
    getLevel: (logLevel: LogLevel) => void;
    setLevel: (logLevel: LogLevel) => void;
    logTrace: (message: any, ...optionalParams: any[]) => void;
    logDebug: (message: any, ...optionalParams: any[]) => void;
    logInformation: (message: any, ...optionalParams: any[]) => void;
    logWarning: (message: any, ...optionalParams: any[]) => void;
    logError: (message: any, ...optionalParams: any[]) => void;
    logCritical: (message: any, ...optionalParams: any[]) => void;
}

/**
 * @public
 */
export class LoggerService implements ILoggerService {
    static create = (logLevel?: LogLevel): LoggerService => new LoggerService(logLevel);

    constructor(level: LogLevel = LogLevel.Critical) {
        this.level = level;
    }

    private level: LogLevel;

    private shouldLog = (logLevel: LogLevel): boolean => this.level !== LogLevel.None && this.level <= logLevel;

    private log = (logLevel: LogLevel, message: any, ...optionalParams: any[]): void => {
        if (this.shouldLog(logLevel)) {
            // eslint-disable-next-line default-case
            switch (logLevel) {
                case LogLevel.Trace:
                    console.debug(message, ...optionalParams);
                    return;
                case LogLevel.Debug:
                    console.log(message, ...optionalParams);
                    return;
                case LogLevel.Information:
                    console.info(message, ...optionalParams);
                    return;
                case LogLevel.Warning:
                    console.warn(message, ...optionalParams);
                    return;
                case LogLevel.Error:
                case LogLevel.Critical:
                    console.error(message, ...optionalParams);
            }
        }
    };

    static parseLogLevel = (input: string | number | null | undefined): LogLevel | null => {
        switch (input) {
            case LogLevel.Trace: // value
            case LogLevel[LogLevel.Trace]: // nameOf
                return LogLevel.Trace;
            case LogLevel.Debug:
            case LogLevel[LogLevel.Debug]:
                return LogLevel.Debug;
            case LogLevel.Information:
            case LogLevel[LogLevel.Information]:
                return LogLevel.Information;
            case LogLevel.Warning:
            case LogLevel[LogLevel.Warning]:
                return LogLevel.Warning;
            case LogLevel.Error:
            case LogLevel[LogLevel.Error]:
                return LogLevel.Error;
            case LogLevel.Critical:
            case LogLevel[LogLevel.Critical]:
                return LogLevel.Critical;
            case LogLevel.None:
            case LogLevel[LogLevel.None]:
                return LogLevel.None;
            default:
                return null;
        }
    };

    setLevel(logLevel: LogLevel): void {
        if (!Object.values(LogLevel).includes(logLevel)) {
            throw new Error(`Invalid LogLevel: ${logLevel}`);
        }

        this.logTrace(`setting Logger level: ${LogLevel[logLevel]} (${logLevel})`);

        this.level = logLevel;
    }

    getLevel(): LogLevel {
        return this.level;
    }

    logTrace = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Trace, message, ...optionalParams);

    logDebug = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Debug, message, ...optionalParams);

    logInformation = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Information, message, ...optionalParams);

    logWarning = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Warning, message, ...optionalParams);

    logError = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Error, message, ...optionalParams);

    logCritical = (message: any, ...optionalParams: any[]): void => this.log(LogLevel.Critical, message, ...optionalParams);

    logTable = (logLevel: LogLevel, tabularData: any, properties?: string[]): void => {
        if (this.shouldLog(logLevel)) {
            console.table(tabularData, properties);
        }
    };

    logGroup = (logLevel: LogLevel, label: string, contents: () => void): void => {
        if (this.shouldLog(logLevel)) {
            console.group(label);
            contents();
            console.groupEnd();
        }
    };

    logGroupCollapsed = (logLevel: LogLevel, label: string, contents: () => void): void => {
        if (this.shouldLog(logLevel)) {
            console.groupCollapsed(label);
            contents();
            console.groupEnd();
        }
    };
}
