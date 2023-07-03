import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { Config } from './config';
import { Module } from '@nestjs/common';
import { ServiceModule } from '@app/my-library';
import { AppService } from './app.service';
/* 
  public readonly VAR_1!: string
  public readonly VAR_2!: string
  public readonly VAR_3!: string
  public readonly VAR_4!: string
*/

function getSecret() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        VAR_1: 'VAR_1',
        VAR_2: 'VAR_2',
        VAR_3: 'VAR_3',
        VAR_4: 'VAR_4',
      });
    }, 1000),
  );
}

@Module({
  imports: [
    TypedConfigModule.forRootAsync({
      isGlobal: true,
      schema: Config,
      load: [
        dotenvLoader(),
        async () => {
          const secret = await getSecret();
          return secret;
        },
      ],
    }),
    ServiceModule.registerAsync({
      inject: [Config],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
