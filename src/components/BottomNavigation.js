import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

const styles = {
  root: {
    width: "100%",
    height: "115px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    "flex-wrap": "wrap"
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { isOpen } = this.props;

    let label1;
    let label2;

    if (isOpen) {
        label1 = "My Chats";
        label2 = "Explore";
    } else {
        label1 = "";
        label2 = "";
    }

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label={label1} icon={<RestoreIcon />} />
        <BottomNavigationAction label={label2} icon={<ExploreIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);