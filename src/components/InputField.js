import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    width: "98%"
  },
  margin: {
    margin: theme.spacing.unit,
    width: "100%",
    background: "#fff",
    "box-shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
    padding: "10px 20px"
  },
  cssLabel: {
    left: "10px",
    '&$cssFocused': {
      color: purple[500],
      opacity: 0
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputBase
            placeholder="Message..."
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
        />
      </FormControl>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);