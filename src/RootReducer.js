const initialState = {
    url:"",
    shortUrls:[]
}

function rootReducer(state = initialState, action ){
    switch(action.type){
        case 'add' :
                return {
                    ...state,
                    shortUrls: action.payload
                }
        case 'setUrl' :
            return {
                ...state,
                url : action.payload
            }
        default:
            return state
            
    }

}

export default rootReducer;
