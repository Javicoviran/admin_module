export interface ModuleDataModel {
  luid: string;
  name: string;
  workers: number;
  errors: number;
  status: string;
}

export const moduleDataColumns = [
  {
    columnDef: 'luid',
    header: 'LUID',
    cell: (element: ModuleDataModel) => `${element.luid}`,
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: ModuleDataModel) => `${element.name}`,
  },
  {
    columnDef: 'workers',
    header: 'Workers',
    cell: (element: ModuleDataModel) => `${element.workers}`,
  },
  {
    columnDef: 'errors',
    header: 'Errors',
    cell: (element: ModuleDataModel) => `${element.errors}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: ModuleDataModel) => `${element.status}`,
  },
];
