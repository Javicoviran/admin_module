import { ProcessModel } from '../models/process.model';

export const processListData: ProcessModel[] = [
  {
    pi: 1001,
    name: 'Chrome',
    cpu: '45%',
    RAM: '60%',
    status: 'Running',
  },
  {
    pi: 1002,
    name: 'Visual Studio Code',
    cpu: '30%',
    RAM: '50%',
    status: 'Running',
  },
  {
    pi: 1003,
    name: 'Node.js',
    cpu: '10%',
    RAM: '25%',
    status: 'Stopped',
  },
  {
    pi: 1004,
    name: 'Firefox',
    cpu: '35%',
    RAM: '55%',
    status: 'Running',
  },
  {
    pi: 1005,
    name: 'Slack',
    cpu: '20%',
    RAM: '15%',
    status: 'Stopped',
  },
];

export const processColumns = [
  {
    columnDef: 'pi',
    header: 'PID',
    cell: (element: ProcessModel) => `${element.pi}`,
  },
  {
    columnDef: 'name',
    header: 'processTable.name',
    cell: (element: ProcessModel) => `${element.name}`,
  },
  {
    columnDef: 'cpu',
    header: 'CPU',
    cell: (element: ProcessModel) => `${element.cpu}`,
  },
  {
    columnDef: 'RAM',
    header: 'RAM',
    cell: (element: ProcessModel) => `${element.RAM}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: ProcessModel) => `${element.status}`,
  },
];
