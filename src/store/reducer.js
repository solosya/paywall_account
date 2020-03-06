// import * as actionTypes from './actions/actions'

const intialState = {
    live        : true,
    guest       : false,
    isLoggedIn  : false,
    admin       : false,
    pageTitle   : "My Account",
    stripeKey   : "pk_test_iwtlTrCiV2h43DlBnHnPiyy6",
    env         : '',
}




const reducer = (state = intialState, action) => {

    switch (action.type) {

        case "ACTION": {
            const guest  = !state.guest;
            return {
                ...state,
                guest
            }
        }


        default:
            return state;
    }
};

export default reducer;