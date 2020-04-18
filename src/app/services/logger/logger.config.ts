export let loggerConfig = [
    {
        loggerName: 'console',
        loggerLocation: '',
        isActive: true,
    },
    {
        loggerName: 'localstorage',
        loggerLocation: 'logging',
        isActive: true,
    },
    {
        loggerName: 'http',
        loggerLocation: '/api/log',
        isActive: false,
    },
];
