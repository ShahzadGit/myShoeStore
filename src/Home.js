import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'VALOUR BLUE',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXi4uZJ0HZbe_DQ5V5Tp1XyI49CLAc2h0T2Q&usqp=CAU',
  },
  {
    label: 'Bird',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBR22uWbVJni4a8hTIYqrEcRh7UooVR4pTvQ&usqp=CAU',
  },
  {
    label: 'Markhor',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1_a6zCmSptF1LN36Ezy0bAiwXGvIoyTusew&usqp=CAU',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    width: '50%',
    border: '1px solid lightgray',
    padding: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    //paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 500,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <h1>NEW ARRIVALS!</h1>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}