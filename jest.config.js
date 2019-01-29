module.exports = {
    projects: [
        {
            displayName: 'test',
            preset: 'ts-jest',
            testEnvironment: 'node',
            testMatch: ['**/*.spec.ts']
        },
        {
            runner: 'jest-runner-tsc',
            displayName: 'tsc',
            moduleFileExtensions: ['ts', 'js'],
            testMatch: ['<rootDir>/lib/*.ts'],
        },
        {
            runner: 'jest-runner-tslint',
            displayName: 'tslint',
            moduleFileExtensions: ['ts', 'js'],
            testMatch: ['<rootDir>/lib/*.ts']
        }
    ]
};