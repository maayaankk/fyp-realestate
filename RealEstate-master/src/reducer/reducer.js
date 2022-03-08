
// export const initialState = {
//     user: null,
// };

// export const actionTypes = {
//     SET_USER: "SET_USER",
// }

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SEARCH_ZPID':
            return ({
                ...state,
                Input: {
                    ...state.Input,
                    taluka: action.taluka,
                    city: action.city,
                    state: action.state,
                    passed: action.passed,
                    loading: action.loading
                },
                Homes: action.info
            })
        case 'HOUSE_INFO':
            return (
                {
                    ...state,
                    Display: {
                        ...state.Display,
                        DashBoard: action.dash,
                        Item: action.Item,
                    }
                }
            )
        case 'LOADING':
            return (
                {
                    ...state,
                    Input: {
                        ...state.Input,
                        loading: action.loading,
                    }
                }
            )
        // case actionTypes.SET_USER:
        //     return {
        //         ...state,
        //         user: action.user,
        //     };



        default:
            return state;
    }
}

export default reducer;





