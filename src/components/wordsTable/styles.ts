import tw from 'twin.macro';

export const TableContainer = tw.div`
  mt-10
  w-188
  p-6
  bg-white
  rounded
`;

export const Table = tw.table`
  w-full
`;

export const TableHeader = tw.tr`
  bg-purple-800
  border
  border-purple-800
  text-white
  uppercase
  text-lg
`;

export const TableRow = tw.tr`
  bg-gray-50
`;

export const TableItem = tw.td`
  p-2.5
  text-center
  border
  border-black
`;

export const TableHeaderItem = tw.th`
  p-2.5
`;
