import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

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

    const MessageTypography = styled(Typography)`
        background: ${getColor(level)};
        border: 0;
        border-radius: 3;
        box-shadow: '0 3px 5px 2px rgba(255, 105, 135, .3)';
        color: 'purple' !important; 
        padding: '0 300px';
`;

    return <MessageTypography>{text}</MessageTypography>;
};

export default Message;