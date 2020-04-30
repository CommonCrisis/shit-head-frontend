import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const SnackbarHandler = (props) => {
    // Alerts

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Snackbar
            autoHideDuration={5000}
            open={props.serverMessage.open}
            onClose={() => props.setServerMessage({
                'type': '',
                "message": '',
                "open": false
            })}>
            <Alert severity={props.serverMessage.type}>{props.serverMessage.message}</Alert>
        </Snackbar >)
};

export default SnackbarHandler;