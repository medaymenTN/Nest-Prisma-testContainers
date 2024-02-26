# NestJS Prisma TestContainers : 
An example on how to create E2E/Integration tests with NestJS and TestContainers

## Description

[Nest](https://dev.to/medaymentn/improving-intergratione2e-testing-using-nestjs-and-testcontainers-3eh0) Check full tutorial on DEV.to.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Database migration 

```bash
# init prisma
$ npx prisma init

# migrate
$  npx prisma migrate dev --name init
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

