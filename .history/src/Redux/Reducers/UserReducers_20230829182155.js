//* Boilerplate of Reducer Redux
//* Spread Operators: 
const initialState = {
    userData: {},
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_USER_DATA":
            return { ...state, userData: action.data };
        case "UPDATE_USER_DATA":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.data
                }
            };

        case "LOG_OUT":
            return {
                ...state,
                userData: {},
            };
        default:
            return state;
    }

}