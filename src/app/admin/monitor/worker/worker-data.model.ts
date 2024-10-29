export interface WorkerDataModel {
  moduleName: string;
  workerID: number;
  process: number;
  status: string;
}

export const workerDataColumns = [
  {
    columnDef: 'moduleName',
    header: 'Module Name',
    cell: (element: WorkerDataModel) => `${element.moduleName}`,
  },
  {
    columnDef: 'workerID',
    header: 'Worker ID',
    cell: (element: WorkerDataModel) => `${element.workerID}`,
  },
  {
    columnDef: 'process',
    header: 'Process',
    cell: (element: WorkerDataModel) => `${element.process}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: WorkerDataModel) => `${element.status}`,
  },
  
  {
    columnDef: 'operations',
    header: 'Operations',
    cell: (element: WorkerDataModel) => ``,
  },
];
