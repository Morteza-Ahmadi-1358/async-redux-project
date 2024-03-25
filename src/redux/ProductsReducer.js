const INITIAL_STATE = { isLoading: false, error: '', products: [] }

const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'Send_Request_For_Recieve_Products_Data':
            {
                return {...state, isLoading: true}
            }
        case 'Products_Data_Recieved':
            {
                return {isLoading: false, error: '', products: action.payload}
            }
        case 'Request_Failed':
            {
                return {isLoading: false, error: action.payload, products: []}
            }
        default:
            return state
    }
}

export default ProductsReducer