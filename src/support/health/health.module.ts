import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthCheckController],
})
export class HealthModule {}
