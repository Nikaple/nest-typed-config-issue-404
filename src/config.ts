import { Allow } from 'class-validator';

export class LibConfig {
  @Allow()
  VAR_3: string;
  @Allow()
  VAR_4: string;
}

export class Config extends LibConfig {
  @Allow()
  VAR_1: string;
  @Allow()
  VAR_2: string;
}
