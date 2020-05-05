import React from 'react';
import { SCALECARD } from '../constants';
// import fadeIn from 'react-animations/lib/fade-in'
// import styled, { keyframes } from 'styled-components';
import takePile from '../functions/takePile';
import Card from './Card';

const Pile = (props) => {
  const cardBack = 'empty';
  // const Bounce = styled.div`animation: 2s ${keyframes`${fadeIn}`}`

  if (!props.pile.length) {
    return (
      <Card
        cardType={cardBack}
        hidden={false}
        scale={SCALECARD}>
      </Card>
    );
  } else {
    return (
      <div
        className="Pile"
        onClick={() => takePile(props.playerName, props.gameId, props.setUpdateStauts, props.setServerMessage)}
      >
        <Card
          cardType={props.pile[props.pile.length - 1]}
          hidden={false}
          scale={SCALECARD}>
        </Card>
      </div>
    );
  }
};

export default Pile;
