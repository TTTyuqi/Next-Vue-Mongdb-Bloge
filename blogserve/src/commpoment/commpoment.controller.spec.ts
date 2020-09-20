import { Test, TestingModule } from '@nestjs/testing';
import { CommpomentController } from './commpoment.controller';

describe('Commpoment Controller', () => {
  let controller: CommpomentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommpomentController],
    }).compile();

    controller = module.get<CommpomentController>(CommpomentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
