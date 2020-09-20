import { Test, TestingModule } from '@nestjs/testing';
import { ReplyConpmentController } from './reply-conpment.controller';

describe('ReplyConpment Controller', () => {
  let controller: ReplyConpmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReplyConpmentController],
    }).compile();

    controller = module.get<ReplyConpmentController>(ReplyConpmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
