import { Allow } from 'class-validator';

export class Config {
  @Allow()
  VAR_1: string;
  @Allow()
  VAR_2: string;
  @Allow()
  VAR_3: string;
  @Allow()
  VAR_4: string;
}
