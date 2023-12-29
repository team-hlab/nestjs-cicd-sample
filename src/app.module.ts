import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { HealthModule } from './support/health/health.module';
import { ShowcaseModule } from './module/showcase/showcase.module';
import { HttpLoggerMiddleware } from './middleware/http.logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    HealthModule,
    ShowcaseModule,
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      .exclude('/')
      .exclude('/health')
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
