import { Allow } from 'class-validator';

export class Config {
  @Allow()
  VAR_3: string;
  @Allow()
  VAR_4: string;
}
