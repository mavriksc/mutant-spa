import { Characteristic } from './characteristic';
import { Squad } from './squad';
import { DisasterState } from './disaster-state.enum';

export class Disaster {
  id: number;
  name: string;
  characteristics: Characteristic[];
  state: DisasterState;
  squad: Squad;
  disasterAverted: boolean;
}