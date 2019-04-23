import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import Chat from "./components/Chat";

import { chats, messages } from "./mock-data";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <ChatHeader isOpen={this.state.open} open={this.handleDrawerOpen} />
        <Sidebar isOpen={this.state.open} close={this.handleDrawerClose} theme={theme} chats={chats} />
        <Chat messages={messages} /> 
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);