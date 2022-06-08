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

export async function createLostPerson(data) {
    const response = await axios.post('http://localhost:9000/api/v1/persons/ ', {LostPerson: data});
    return response.data;
}