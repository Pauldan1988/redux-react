//* Boilerplate of Reducer Redux
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

        case 
    }

}