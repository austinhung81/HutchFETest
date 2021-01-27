export interface LogEntry {
    requestId: string;
    timestamp: string;
    scope: string;
    userId: string;
    warn: boolean;
    error: boolean;
}