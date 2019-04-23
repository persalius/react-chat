import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputField from "./InputField";
import titleInitials from "../utils/title-initials";

const styles = theme => ({
    content: {
        flexGrow: 1,
        position: "relative",
        height: "100vh",
        "max-height": "100vh",
        padding: "24px 0 !important",
        "padding-top": "36px !important"
    }
});
class Chat extends React.Component {
    componentDidMount() {
        this.scrollDownHistory();
    }
    
    componentDidUpdate() {
        this.scrollDownHistory();
    }

    scrollDownHistory = () => {
        const messagesWrapper = this.refs.messagesWrapper;

        if (messagesWrapper) {
            console.log(messagesWrapper.scrollTop);
            console.log(messagesWrapper.scrollHeight);
            messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
            // console.log(messagesWrapper.scrollHeight);
            console.log(messagesWrapper.scrollTop);
            console.log(messagesWrapper.scrollHeight);
        }
    }

    render() {
        const {classes, messages} = this.props;

        return (
            <main className={classes.content}>
                <div className="messages-area" ref="messagesWrapper">
                    {messages && messages.map((message, index) => {
                        const isMessageFromMe = message.sender === "me";

                        const userAvatar = (
                        <Avatar>
                            {titleInitials(message.sender)}
                        </Avatar>
                        );

                        let styleForName = {};

                        if (isMessageFromMe) {
                        styleForName = {"fontSize": "14px", color: "#e65100", "fontWeight": "bold"};
                        } else {
                        styleForName = {"fontSize": "14px", color: "#5c6bc0", "fontWeight": "bold"};
                        }

                        return (
                        <div key={index} className={classnames(
                            "messageWrapper",
                            isMessageFromMe && "messageWrapperForMe"
                        )}>
                            {!isMessageFromMe && userAvatar}
                            <Paper className={classnames(
                            "message",
                            isMessageFromMe && "messageFromMe"
                            )}>
                            <Typography style={styleForName}>{message.sender}</Typography>
                            <Typography>{message.content}</Typography>
                            </Paper>
                            {isMessageFromMe && userAvatar}
                        </div>
                        )
                    })}
                </div>
                
                <InputField />
            </main>
        )
    }
};

export default withStyles(styles)(Chat);