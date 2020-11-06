import React from "react";
import styled from "styled-components";

const Character = prop => {
    const {char} = prop
    return (
        <div className="Character">
            <StyledCharacter>
                <StyledCharName>{char.name}</StyledCharName>
                <StyledYear>{char.birth_year}</StyledYear>
            </StyledCharacter>
        </div>
      );
}

const StyledCharacter = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');

    font-family: 'Black Ops One', cursive;
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: .5em;
    font-size: 2em;
    border: 1px solid green;
    color: white;
`;

const StyledCharName = styled.div`
    font-size: 1.1em;
`;

const StyledYear = styled.div`
    font-size: .7em;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom: .4em;
    margin-top: .4em;
    background-color: #b7c9bc;
    color: #6e0880;
    border-radius: 15% 40% 15% 40%;
`;

export default Character;
