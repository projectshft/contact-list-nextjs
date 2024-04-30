const columns = [
  {
    className: 'col-2',
    value: 'Picture',
  },
  {
    className: 'col-2',
    value: 'Name',
  },
  {
    className: 'col-2',
    value: 'Email',
  },
  {
    className: 'col-2',
    value: 'Phone Number',
  },
  {
    className: 'col-1',
    value: '',
  },
  {
    className: 'col-1',
    value: '',
  }
]

export function TableHeading() {
  return (
    <thead>
      <tr className='table-dark'>
        {columns.map((column) => (
          <th 
            key={columns.indexOf(column)}
            scope='col'
            className={column.className}
          >
            {column.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};