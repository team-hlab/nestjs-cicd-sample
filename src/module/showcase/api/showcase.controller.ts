import { Controller, Get } from "@nestjs/common";
import { ShowcaseService } from "../domain/showcase.service";
import Logger from "src/support/logger/logger";

@Controller('/showcase')
export class ShowcaseController {
    private logger;

    constructor(
        private readonly showcaseService: ShowcaseService
    ) {
        this.logger = new Logger('ShowcaseController')
    }

    @Get()
    async showcaseGet(): Promise<Boolean> {
        const result = await this.showcaseService.simulateSlowQuery()
        return true
    }
}