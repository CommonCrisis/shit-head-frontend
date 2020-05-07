import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const image_source = require(`../images/logo.png`)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));



const ChipMessages = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                props.gameMessages.map((item, index) => (
                    <Chip
                        avatar={<Avatar alt='Ballern' src={image_source} />}
                        label={item.message}
                        color={index % 2 === 0 ? 'primary' : 'secondary'}
                    />))
            }
        </div>
    );


};

export default ChipMessages;