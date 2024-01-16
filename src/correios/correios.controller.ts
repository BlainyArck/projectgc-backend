import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepDto } from './dtos/return-cep.dto';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correiosService: CorreiosService) {}

    @Get('/:cep')
    async findAddressByCep(@Param('cep') cep: string): Promise<ReturnCepDto> {
        return this.correiosService.findAddressByCep(cep);
    }
}
