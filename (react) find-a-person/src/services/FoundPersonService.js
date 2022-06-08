const axios = require('axios');

export async function getAllFoundPersons() {

    try{
        const response = await axios.get('http://localhost:9000/api/v1/founds/');
        console.log('response  ', response)
        return response.data,persons;
    }catch(error) {
        return [];
    }
    
}

export async function createFoundPerson(data) {
    const response = await axios.post('http://localhost:9000/api/v1/founds/', data);
    return response.data;
}