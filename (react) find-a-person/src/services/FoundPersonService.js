const axios = require('axios');

export async function getAllUsers() {

    try{
        const response = await axios.get('/api/users');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createFoundPerson(data) {
    const response = await axios.post('http://localhost:9000/api/v1/founds/ ', {FoundPerson: data});
    return response.data;
}