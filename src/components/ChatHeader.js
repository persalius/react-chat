import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    }
});
class ChatHeader extends React.Component {
    render() {
        const {classes, isOpen, open} = this.props;

        return (
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: isOpen,
                })}
                >
                <Toolbar disableGutters={!isOpen}>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={open}
                    className={classNames(classes.menuButton, {
                        [classes.hide]: isOpen,
                    })}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                    Chat
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
};

export default withStyles(styles)(ChatHeader);