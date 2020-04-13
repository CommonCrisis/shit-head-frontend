import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


import "./styles.css";


// class App extends React.Component {
//     state = {
//                 cards: ["2C", "5H", null]
//             };

//     render() {
//         return (
//             <div>
//                 <Hand cards={this.state.cards}/>
//             </div>
//         ) 
//     }
// };

ReactDOM.render(<App />, document.querySelector('#root'));