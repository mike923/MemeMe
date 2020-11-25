
const getAPIURL = () => {
    if(window.location.hostname === 'localhost'){
        return `http://localhost:3001`
    }
    return `https://meme-me-ny.herokuapp.com/`
}


export default getAPIURL()