import { Characteristic } from './characteristic';
import { Squad } from './squad';
export class Disaster {
  id: number;
  name: string;
  characteristics: Characteristic[];
  state: number;
  squad: Squad;
  disasterAverted: boolean;
}