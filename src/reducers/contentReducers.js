const initialState = {
    contents : []
}

const contentReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTENTS':
            return { ...state, contents: action.payload.contents }
        default:
            return state
    }
}

export default contentReducers
