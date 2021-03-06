import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    padding: 20,
  },
  link: {
    color: 'inherit', 
    textDecoration: 'inherit', 
  },
}));

     
        

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" >
            <img src="https://www.kindpng.com/picc/m/39-391090_sport-shoes-pair-run-shoes-icon-png-transparent.png" alt="Shoe" height={50} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link} > Home </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/products" className={classes.link}> More Shoes... </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/about" className={classes.link}> About </Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}