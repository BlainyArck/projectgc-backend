import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepExternalDto } from './dtos/return-cep-external.dto';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correiosService: CorreiosService) {}

    @Get('/:cep')
    async findAddressByCep(@Param('cep') cep: string): Promise<ReturnCepExternalDto> {
        return this.correiosService.findAddressByCep(cep);
    }
}
