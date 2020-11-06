const helperFunc = apiArray => {
    const userArray = apiArray.map(e => {
        return {
            name : e.name,
            birth_year : e.birth_year,
        }
    });

    return userArray;
}

export default helperFunc;