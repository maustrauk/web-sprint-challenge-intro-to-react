import React from "react";
import styled from "styled-components";

const Gender = prop => {
    const {gender} = prop;
    return (
            <StyledGender>{gender}</StyledGender>
          );
};

const StyledGender = styled.div`
    font-size: 0.5em;
    margin-top: 1em;
    margin-right: 5em;
    color: pink;
`;

export default Gender;