import { inDevBuildEnv } from '../utilities';
import {LoggerService, LogLevel} from "../../logger-service";

const logger = LoggerService.create(inDevBuildEnv() ? LogLevel.Trace : LogLevel.Critical);

export default logger;
