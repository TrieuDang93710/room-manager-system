import React from 'react';

interface TableComponentProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}
const TableComponent = <T extends object>({ headers, data, renderRow }: TableComponentProps<T>) => {
  return (
    <div className='min-w-full h-[50vh] overflow-y-auto'>
      <table className='w-full table-fixed border-separate border-slate-300 rounded-md dark:text-[#d2d2d2]'>
        <thead className='w-full border text-slate-50'>
          <tr className='w-full border'>
            {headers.map((th, index) => (
              <th key={index} className='sticky top-0 bg-green-800 dark:bg-green-800 w-[15%] p-2'>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className='cursor-default text-center border bg-slate-50 hover:bg-slate-100 dark:text-[#e6e6e6] dark:bg-transparent dark:hover:bg-slate-900'
            >
              {renderRow(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
