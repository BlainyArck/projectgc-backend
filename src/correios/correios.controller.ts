import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepDto } from './dtos/return-cep.dto';
import { ResponsePriceCorreios } from './dtos/response-price-correios';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correiosService: CorreiosService) {}

    @Get('/price')
    async priceDelivery(): Promise<ResponsePriceCorreios> {
        return this.correiosService.priceDelivery();
    }

    @Get(':cep')
    async findAll(@Param('cep') cep: string): Promise<ReturnCepDto> {
        return this.correiosService.findAddressByCep(cep);
    }
}
