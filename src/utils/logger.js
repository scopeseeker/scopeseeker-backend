const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({ level, message, timestamp }) => {
                    return `[${timestamp}] ${level}: ${message}`;
                })
            ),
        }),
        new transports.File({
            filename: '../logs/error.log',
            level: 'error',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            ),
        }),
    ],
});

module.exports = logger;
