import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export const MessageLevel = {
    Error:"Error",
    Warning:"Warning",
    Info:"Info"
}


const Message = ({text,level}) => {
    const getColor = (level) => {
        switch(level) {
            case MessageLevel.Error:
                return 'red'; 
            case MessageLevel.Warning:
                return 'yellow'; 
            case MessageLevel.Info:
                return 'green'; 
            default:
                return 'red';
        }   
    };

    const useStyles = makeStyles({
        root: {
          background: getColor(level),
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'purple',
          padding: '0 30px',
        },
      });

      const classes = useStyles();

    return <Typography className={classes.root}>{text}</Typography>;
};

export default Message;