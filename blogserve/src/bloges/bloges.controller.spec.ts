import { Test, TestingModule } from '@nestjs/testing';
import { BlogesController } from './bloges.controller';

describe('Bloges Controller', () => {
  let controller: BlogesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogesController],
    }).compile();

    controller = module.get<BlogesController>(BlogesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
