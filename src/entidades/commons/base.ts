import { StatusType } from './constants';

export interface Base {
  uuid: string;
  user: string;
  status: StatusType;
}
