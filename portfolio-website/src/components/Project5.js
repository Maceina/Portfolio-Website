import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import project5 from '../images/project5.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Project5() {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={project5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 5
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Project 5 description.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="#" size="small" color="primary">
          Live
        </Button>
        <Button href="#" size="small" color="primary">
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}
