import React from "react";
import styled from "styled-components";

const Name = prop => {
    const {name} = prop;
    return (
    <StyledCharName>{name}</StyledCharName>
      );
}

const StyledCharName = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
    font-family: 'Black Ops One', cursive;
    font-size: 1.1em;
    margin-left: .5em;
    &:hover {
        transform: scale(1.085);
        transition: transform 1.5s ease-in-out;
    }
    transition: transform 1.5s ease-in-out;
`;

export default Name;