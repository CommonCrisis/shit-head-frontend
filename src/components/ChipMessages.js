import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { GiSpades, GiHearts, GiDiamonds, GiClubs } from 'react-icons/gi';
import { FaSadCry, FaBomb } from 'react-icons/fa';




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

    const createLabel = (item) => {
        const symbolMapper = {
            "H": <GiHearts />,
            "S": <GiSpades />,
            "D": <GiDiamonds />,
            "C": <GiClubs />,
            "sad": <FaSadCry />
        }
        const message = item.message === "bomb" ? <FaBomb /> : item.message
        if (item.card_type === "sad") {
            return (
                <div>
                    {symbolMapper[item.card_type]} {item.player} {message}
                </div>
            );
        }
        return (

            < div >
                {item.card_number} {symbolMapper[item.card_type]} by { item.player} {message}
            </div >
        );
    };
    return (
        <div className={classes.root}>
            {
                props.gameMessages.map((item, index) => (
                    <Chip
                        avatar={<Avatar alt='Ballern' src={image_source} />}
                        label={createLabel(item)}
                        color={index % 2 === 0 ? 'primary' : 'secondary'}
                        variant="outlined"
                    />))
            }
        </div>
    );


};

export default ChipMessages;