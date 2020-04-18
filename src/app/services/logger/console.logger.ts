import { Observable, of } from 'rxjs';
import { LogPublisher } from './log.publisher';
import { LogEntry } from './logentry';

export class ConsoleLogger extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        // Log to console
        console.log(entry.toLogString());
        return of(true);
    }
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }
}
