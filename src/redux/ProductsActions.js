import axios from "axios"

const sendRequestForRecieveProductsDta = () => {
    return {
        type: 'Send_Request_For_Recieve_Products_Data'
    }
}

const productsDataRecieved = (products) => {
    return {
        type: 'Products_Data_Recieved',
        payload: products
    }
}

const requestFailed = (error) => {
    return {
        type: 'Request_Failed',
        payload: error
    }
}

export const recievedProducts = (dispatch) => {
    dispatch(sendRequestForRecieveProductsDta())
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        dispatch(productsDataRecieved(response.data))
    })
    .catch(error => {
        dispatch(requestFailed(error))
    })
}