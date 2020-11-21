const getAPIURL = () => {
    if(window.location.hostname === 'localhost'){
        return `http://localhost:3001`
    }
    return `https://aqueous-sierra-27538.herokuapp.com`
}


export default getAPIURL()