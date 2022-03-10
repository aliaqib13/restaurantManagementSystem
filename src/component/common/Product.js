import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Data } from './menuData';
import store from '../../store/store';
import * as actions from '../../store/actionType/actiontType';

export default function Product() {
  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ overflowX: 'scroll' }}
      >
        {Data.map((data) => (
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="240"
              image={data.image}
              alt={data.name}
            />
            <CardContent>
              <Typography
                sx={{ display: 'inline-block' }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {data.name}
              </Typography>
              <Typography
                sx={{ display: 'inline-block', paddingLeft: '1rem' }}
                gutterBottom
                variant="body1"
                component="div"
                color="text.secondary"
              >
                {data.price}$
              </Typography>
              <Typography
                sx={{ display: 'inline-block', paddingLeft: '1rem' }}
                gutterBottom
                variant="body2"
                component="div"
                color="text.secondary"
              >
                stock: {data.stock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ py: 1, px: 2 }}
                variant="contained"
                color="primary"
                size="small"
                onClick={store.dispatch()}
              >
                + Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
}
