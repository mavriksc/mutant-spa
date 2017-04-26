import { Ability } from './ability';

export class Mutant {
  id: number;
  name: string;
  abilities: Ability[];
  alive: boolean;
}
