export declare class Recaptcha {
    _config: any;
    _element: any;
    _scriptPromise: any;
    badge: string;
    callback: any;
    expire: any;
    size: string;
    theme: string;
    type: string;
    widgetId: any;
    constructor(element: any, config: any);
    bind(): void;
    _initialize(): Promise<void>;
    _loadApiScript(): void;
}
