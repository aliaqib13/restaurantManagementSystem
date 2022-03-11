import React from 'react';
import Product from './component/Product';
import Header from './component/Header';
import { Box } from '@mui/system';
import ProductTable from './component/ProductTable';

export default function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Product />
        <ProductTable />
      </Box>
    </>
  );
}
