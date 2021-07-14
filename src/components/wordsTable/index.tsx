import React from 'react';

import { WordCountTableProps } from '../../interfaces';
import { Table, TableContainer, TableHeader, TableHeaderItem, TableItem, TableRow } from './styles';

const WordsTable: React.FC<WordCountTableProps> = ({ wordCountArray }) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableHeaderItem>#</TableHeaderItem>
          <TableHeaderItem>Word</TableHeaderItem>
          <TableHeaderItem>Count</TableHeaderItem>
        </TableHeader>
        {wordCountArray.map((value, index) => (
          <TableRow key={index}>
            <TableItem>{index + 1}</TableItem>
            <TableItem>{value.word}</TableItem>
            <TableItem>{value.count}</TableItem>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

export default WordsTable;
