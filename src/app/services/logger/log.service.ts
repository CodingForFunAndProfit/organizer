import { Injectable } from '@angular/core';
import { LogEntry } from './logentry';
import { LogPublisher } from './log.publisher';
import { LogPublisherService } from './logpublisher.service';
import { LogLevel } from './loglevel.enum';

@Injectable({
    providedIn: 'root',
})
export class LogService {
    level: LogLevel = LogLevel.All;
    logWithDate = true;

    publishers: LogPublisher[];

    constructor(private publisherService: LogPublisherService) {
        this.publishers = this.publisherService.publishers;
    }

    private writeToLog(msg: string, level: LogLevel, params: any[]) {
        if (this.shouldLog(level)) {
            const entry: LogEntry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            entry.logWithDate = this.logWithDate;

            // Log the value

            for (const logger of this.publishers) {
                logger.log(entry).subscribe((response) => {
                    if (!response) {
                        console.error('Something went wrong while logging.');
                    }
                });
            }
        }
    }
    private shouldLog(level: LogLevel): boolean {
        if (
            (level >= this.level && level !== LogLevel.Off) ||
            this.level === LogLevel.All
        ) {
            return true;
        }
        return false;
    }

    private formatParams(params: any[]): string {
        let ret: string = params.join(',');
        // Is there at least one object in the array?
        if (params.some((p) => typeof p === 'object')) {
            ret = '';
            // Build comma-delimited string
            for (const item of params) {
                ret += JSON.stringify(item) + ',';
            }
        }
        return ret;
    }

    fatal(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Fatal, optionalParams);
    }
    error(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Error, optionalParams);
    }
    warn(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
    }
    info(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    }
    debug(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    }
    log(msg: any, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.All, optionalParams);
    }
}
