import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthCheckController {
  constructor(
    private service: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.service.check([
      () => this.http.pingCheck('me', 'http://localhost:3000'),
    ]);
  }
}
