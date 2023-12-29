import { Module } from '@nestjs/common'
import { ConfigModule } from "@nestjs/config"
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthModule } from './support/health/health.module';
import { ShowcaseModule } from './module/showcase/showcase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    HealthModule,
    ShowcaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
