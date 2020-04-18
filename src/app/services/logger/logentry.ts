import { LogLevel } from './loglevel.enum';

export class LogEntry {
    public message: any;
    public level: LogLevel;
    public extraInfo: any;
    public logWithDate: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }

    toLogString(): string {
        let ret = '';

        if (this.logWithDate) {
            ret = new Date() + ' - ';
        }
        ret += LogLevel[this.level];
        ret += ' : ' + this.message;
        if (this.extraInfo.length) {
            ret += ' - Extra Info: ' + this.formatParams(this.extraInfo);
        }

        return ret;
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
}
