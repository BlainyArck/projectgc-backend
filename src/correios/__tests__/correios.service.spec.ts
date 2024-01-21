import { Test, TestingModule } from '@nestjs/testing';
import { CorreiosService } from '../correios.service';
import { HttpService } from '@nestjs/axios';
import { CityService } from '../../city/city.service';
import { Client } from 'nestjs-soap';

describe('CorreiosService', () => {
  let service: CorreiosService;
  let httpService: HttpService;
  let cityService: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CorreiosService,
        {
          provide: CityService,
          useValue: {},
        },
        {
          provide: HttpService,
          useValue: {},
        },
        {
          provide: 'SOAP_CORREIOS',
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CorreiosService>(CorreiosService);
    httpService = module.get<HttpService>(HttpService);
    cityService = module.get<CityService>(CityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
    expect(cityService).toBeDefined();
  });
});
