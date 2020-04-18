import { Observable, of } from 'rxjs';
import { LogPublisher } from './log.publisher';
import { LogEntry } from './logentry';
import { LogLevel } from './loglevel.enum';

export class ConsoleLogger extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        switch (entry.level) {
            case LogLevel.Error:
                console.error(entry.toLogString());
                break;
            case LogLevel.Fatal:
                console.error(entry.toLogString());
                break;
            case LogLevel.Warn:
                console.warn(entry.toLogString());
                break;
            default:
                console.log(entry.toLogString());
        }
        return of(true);
    }
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}
