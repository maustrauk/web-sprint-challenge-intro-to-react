import React from "react";

import Character from "./Character.js";

const Characters = prop => {
    const {listOfCharacters} = prop;
    return (
        <div className="Characters">
            {listOfCharacters.map(char => <Character char={char} />)}
        </div>
      );
}

export default Characters;