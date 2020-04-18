import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogPublisher } from './log.publisher';
import { LogEntry } from './logentry';
import { catchError } from 'rxjs/operators';

export class HttpLogger extends LogPublisher {
    constructor(private http: HttpClient) {
        // Must call super() from derived classes
        super();
        // Set location
        this.location = '/api/log';
    }

    // Add log entry to back end data store
    log(entry: LogEntry): Observable<boolean> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers };

        return this.http
            .post(this.location, entry, options)
            .pipe(catchError(this.handleError));
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        // TODO: Call Web API to clear all values
        return of(true);
    }

    private handleError(error: any): Observable<any> {
        const errors: string[] = [];
        let msg: string;

        msg = 'Status: ' + error.status;
        msg += ' - Status Text: ' + error.statusText;
        if (error.json()) {
            msg += ' - Exception Message: ' + error.json().exceptionMessage;
        }
        errors.push(msg);

        console.error('An error occurred', errors);

        return throwError(errors);
    }
}
