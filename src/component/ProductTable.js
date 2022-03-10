import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Image } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(No, image, name, Quantity, price, protein) {
  return { No, image, name, Quantity, price, protein };
}

const rows = [
  createData(1, 'image1', 'beryani', 4, '24$'),
  createData(2, 'image2', 'channa', 2, '37$'),
  createData(3, 'image2', 'chiness', 4, '37$'),
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: '2rem' }}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Thumbnail</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.No}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Image
                  src="https://p1.pxfuel.com/preview/1001/930/345/rice-chicken-food-dinner-restaurant-lunch.jpg"
                  alt="item Image"
                  height="30px"
                />
              </StyledTableCell>

              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.Quantity}</StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
              <StyledTableCell>
                <DeleteOutlineOutlinedIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
