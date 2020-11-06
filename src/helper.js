const helperFunc = apiArray => {
    const userArray = apiArray.map(e => {
        return {
            name : e.name,
            birth_year : e.birth_year,
            gender : e.gender,
        }
    });

    return userArray;
}

export default helperFunc;