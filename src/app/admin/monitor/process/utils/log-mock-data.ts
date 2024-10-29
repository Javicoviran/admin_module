import { LogModel } from '../models/log.model';

export const logFakeData: LogModel[] = [
  { type: 'Error', description: 'Failed to load resource' },
  { type: 'Warning', description: 'Deprecated API used' },
  { type: 'Info', description: 'User logged in' },
  { type: 'Error', description: 'Database connection failed' },
  { type: 'Debug', description: 'User data retrieved' },
];

export const logColumns = [
  {
    columnDef: 'type',
    header: 'Type',
    cell: (element: LogModel) => `${element.type}`,
  },
  {
    columnDef: 'description',
    header: 'Description',
    cell: (element: LogModel) => `${element.description}`,
  },
];
