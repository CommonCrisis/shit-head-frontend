// import React from "react";
// import Hand from "./Hand";

// import TableCards from "./TableCards";

// import useWindowDimensions from './WindowSize'
// import {CARDHEIGHT, CARDWIDTH} from '../constants'

// function Opponent(props) {
//     const { height, width } = useWindowDimensions();
    
//     const OpponentStyle = {
//         height: `${CARDHEIGHT+20}px`,
//         width: `${ width - 100 }px`,
//         top: `${height-2*CARDHEIGHT}px`,
//         position: 'absolute',
//         display: 'flex',
//         flexDirection: 'column',
//     }
//     return (
//         <div className="Opponent" style={ OpponentStyle }>
//             <Hand gameId={
//                     props.gameId
//                 }
//                 handCards={
//                     props.handCards
//                 }/>
//             {/* <TableCards gameId={
//                     props.gameId
//                 }
//                 tableCards={
//                     props.tableCards
//                 }/> */}
//         </div>
//     );
// }

// export default Opponent;
