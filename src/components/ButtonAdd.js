import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: "117px",
    transition: "0.3s all"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes, isOpen } = props;

  let slyles = {};

  if (isOpen) {
    slyles = {right: "10px", width: "56px", height: "56px"};
  } else {
    slyles = {right: "50%", transform: "translateX(50%)", width: "40px", height: "40px"};
  }

  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab} style={slyles}>
        <AddIcon />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);