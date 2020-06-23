const countReducer = (state = "0", action) => {
    if (action.type === "ADD") {
        return state + 1;
    }
    if (action.type === "ADDTEN") {
        return state + 10;
    }
    if (action.type === "REMOVE") {
        return state - 1;
    }
    if (action.type === "REMOVETEN") {
        return state - 10;
    }
    if (action.type === "RESET") {
        return state - state;
    }
    return state;
};

export default countReducer;
