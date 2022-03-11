import React from 'react';
import {
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export default function Product() {
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        pt: 4,
        pb: 4,
        flexBasis: '80%',
      }}
    >
      <Typography variant="h5" sx={{ ml: 4 }}>
        Menu
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'space-between',
        }}
      >
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 250,
            my: 4,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            mx: 2,
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, my: 4 }}>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              BBQ
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Chikken Tikka
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image="https://www.thespruceeats.com/thmb/EB-3IwjX2MxJIjqYYMfG-wIqBxo=/3622x3622/smart/filters:no_upscale()/bbq-chicken-thighs-recipe-334134-hero-01-d9bdb9a587b04dea9e408ca828993d0b.jpg"
              alt="image"
            />
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem', mt: 1 }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              Rs: 25
            </Typography>
            <Typography
              sx={{ display: 'inline-block', paddingLeft: '1rem' }}
              gutterBottom
              variant="body1"
              color="text.secondary"
            >
              stock: 10
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ py: 1, px: 2 }}
              variant="contained"
              color="primary"
              size="small"
            >
              + Add
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
