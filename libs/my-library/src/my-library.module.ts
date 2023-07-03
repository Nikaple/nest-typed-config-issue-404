import { HttpModule, HttpModuleAsyncOptions, HttpService } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Config } from 'libs/my-library/src/config';
/* 
  public readonly VAR_3!: string
  public readonly VAR_4!: string
*/

export const SERVICE_API_REST = 'SERVICE_API_REST';

@Module({})
export class ServiceModule {
  static registerAsync(options: any): DynamicModule {
    return {
      module: ServiceModule,
      imports: [
        HttpModule.registerAsync({
          inject: options.inject,
          useFactory: async (config: Config) => {
            console.log({ config });
            return {
              url: config?.VAR_3,
              headers: {
                'Content-Type': 'application/json',
                'api-key': config?.VAR_4,
              },
            };
          },
        } as HttpModuleAsyncOptions),
      ],
      providers: [
        {
          provide: SERVICE_API_REST,
          inject: [HttpService],
          useFactory: (client: HttpService) => client,
        },
      ],
      exports: [SERVICE_API_REST],
    };
  }
}
