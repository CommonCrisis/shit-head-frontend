import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import Card from './Card';

function OpponentEntry(props) {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <FaceIcon />
                </ListItemIcon>
                <ListItemText primary={props.user["player_name"]} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    {props.user["hand_cards"].map((item, index) => (
                        <Card
                            key={index}
                            cardType={item}
                            hidden={true}
                            scale={.2}
                        />))}
                </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    {props.user["top_cards"].map((item, index) => (
                        <Card
                            key={index}
                            cardType={item}
                            hidden={false}
                            scale={.2}
                        />))}
                </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    {props.user["hidden_cards"].map((item, index) => (
                        <Card
                            key={index}
                            cardType={item}
                            hidden={true}
                            scale={.2}
                        />))}
                </ListItemIcon>
            </ListItem>
            <Divider />
        </div>);
};

export default OpponentEntry;