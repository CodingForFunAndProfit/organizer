import { Injectable } from '@angular/core';
import { LogPublisher } from './log.publisher';
import { ConsoleLogger } from './console.logger';
import { loggerConfig } from './logger.config';
import { LocalStorageLogger } from './localstorage.logger';
import { HttpLogger } from './http.logger';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LogPublisherService {
    constructor(private http: HttpClient) {
        // Build publishers arrays
        this.buildPublishers();
    }
    // Public properties
    publishers: LogPublisher[] = [];

    // Build publishers array
    buildPublishers(): void {
        let logPub: LogPublisher;

        for (const pub of loggerConfig.filter((p) => p.isActive)) {
            switch (pub.loggerName.toLowerCase()) {
                case 'console':
                    logPub = new ConsoleLogger();
                    break;
                case 'localstorage':
                    logPub = new LocalStorageLogger();
                    break;
                case 'webapi':
                    logPub = new HttpLogger(this.http);
                    break;
            }
            logPub.location = pub.loggerLocation;
            this.publishers.push(logPub);
        }
    }
}
