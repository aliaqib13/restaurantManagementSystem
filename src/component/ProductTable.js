import * as React from 'react';
import { styled } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

export default function ProductTable() {
  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <Root sx={{ maxWidth: '100%', width: 700 }}>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td align="right">Chikken</td>
            <td align="right">10</td>
            <td align="right">Rs:50</td>
            <td align="right">
              <td sx={{ px: 2, m: 1 }}>+ </td>
              <td sx={{ px: 2, m: 1 }}>- </td>
            </td>
            <td align="center">
              <DeleteOutlineIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </Root>
  );
}
