const axios = require('axios');

export async function getAllLostPersons() {

    try{
        const response = await axios.get('http://localhost:9000/api/v1/persons/');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createLostPerson(data) {
    const response = await axios.post('http://localhost:9000/api/v1/persons/', {LostPerson: data});
    return response.data;
}