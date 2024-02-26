import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { Client } from 'pg';
import { PrismaService } from '../src/prisma/primsa.service';
import { execSync } from 'child_process';

let postgresContainer: StartedPostgreSqlContainer;
let postgresClient: Client;
let prismaService: PrismaService;

beforeAll(async () => {
  postgresContainer = await new PostgreSqlContainer().start();

  postgresClient = new Client({
    host: postgresContainer.getHost(),
    port: postgresContainer.getPort(),
    database: postgresContainer.getDatabase(),
    user: postgresContainer.getUsername(),
    password: postgresContainer.getPassword(),
  });

  await postgresClient.connect();
  
  const databaseUrl = `postgresql://${postgresClient.user}:${postgresClient.password}@${postgresClient.host}:${postgresClient.port}/${postgresClient.database}`;
    // Execute Prisma migrations
    execSync('npx prisma migrate dev', { env: { DATABASE_URL: databaseUrl } });
  prismaService = new PrismaService({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: ['query']

  },
  );
  console.log('connected to test db...');
})

afterAll(async () => {
  await postgresClient.end();
  await postgresContainer.stop();
  console.log('test db stopped...');
});

jest.setTimeout(8000);
export { postgresClient, prismaService };