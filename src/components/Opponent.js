import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from './Card';



const Opponent = (props) => {
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 12,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }))(TableRow);

    const cellStyle = {
        display: "flex",
        // justifyContent: "left",
        alignItems: "left",
        flexDirection: "row",
    }

    const createCardCells = (user) => {
        return {
            playerName: user["player_name"],
            handCards: <div style={cellStyle}>
                {
                    user["hand_cards"].map((item, index) => (
                        <Card
                            cardType={item}
                            hidden={true}
                            scale={.2}
                        />))
                }
            </div >,
            topCards: <div style={cellStyle}>
                {user["top_cards"].map((item, index) => (
                    <Card
                        cardType={item}
                        hidden={false}
                        scale={.2}
                    />))}
            </div>,
            hiddenCards: <div style={cellStyle}>
                {user["hidden_cards"].map((item, index) => (
                    <Card
                        cardType={item}
                        hidden={true}
                        scale={.2}
                    />))}
            </div>
        };
    }

    let rows = [];
    for (let i = 0; i < props.opponents.length; i++) {
        rows.push(createCardCells(props.opponents[i]))
    }


    const useStyles = makeStyles({
        table: {
            // maxWidth: 300,
        },
    });
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Player</StyledTableCell>
                        <StyledTableCell>Hand</StyledTableCell>
                        <StyledTableCell>Top</StyledTableCell>
                        <StyledTableCell>Hidden</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.playerName}>
                            <StyledTableCell component="th" scope="row">
                                {row.playerName}
                            </StyledTableCell>
                            <StyledTableCell>{row.handCards}</StyledTableCell>
                            <StyledTableCell>{row.topCards}</StyledTableCell>
                            <StyledTableCell>{row.hiddenCards}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

};

export default Opponent;