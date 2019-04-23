import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import BottomNavigation from "./BottomNavigation";
import ButtonAdd from "./ButtonAdd";
import SearchField from "./SearchField";

import titleInitials from "../utils/title-initials";

const drawerWidth = 240;

const styles = theme => ({
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflow: "hidden"
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing.unit * 9 + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      chatsList: {
        "overflow-y": "auto",
        "overflow-x": "hidden",
        height: "calc(100% - 179px)"
      }
  });
class Sidebar extends React.Component {
    render() {
        const {classes, chats, isOpen, close, theme } = this.props;

        return (
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
                })}
                classes={{
                paper: classNames({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
                }}
                open={isOpen}
            >
                <div className={classes.toolbar}>
                <SearchField />
                <IconButton onClick={close}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
                
                <List className={classes.chatsList}>
                {chats.map((chat, index) => (
                    <ListItem key={index} button>
                    <Avatar>{titleInitials(chat.title)}</Avatar>
                    <ListItemText primary={chat.title} />
                    </ListItem>
                ))}
                </List>

                <BottomNavigation isOpen={isOpen} />
                <ButtonAdd isOpen={isOpen} />
            </Drawer>
        )
    }
};

export default withStyles(styles)(Sidebar);