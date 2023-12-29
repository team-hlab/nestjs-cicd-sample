import { Module } from "@nestjs/common";
import { ShowcaseController } from "./api/showcase.controller";
import { ShowcaseService } from "./domain/showcase.service";

@Module({
    imports: [],
    providers: [ShowcaseService],
    controllers: [ShowcaseController],
})
export class ShowcaseModule {}