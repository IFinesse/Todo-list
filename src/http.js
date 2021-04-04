const HEADERS = {'Content-Type':'application/json'};

export class Http {

    static async get (url) {
        console.log('getttttt')
        try {
            return await request(url)
        } catch(e) {
            console.log(e);
        }
    }

    static async post (url, data={}) {
        try {
            return await request(url, 'POST', data)
        } catch(e) {
            console.log(e);
        }
    }

    static async delete (url) {
        try {
           return await request(url, 'DELETE')
        } catch(e) {
            console.log(e);
        }
    }

    static async patch (url, data={}) {
        try {
            return await request(url, 'PATCH', data)
        } catch(e) {
            console.log(e);
            throw e
        }
    }
}

async function request(url, method='GET', data) {

    const config = {
        method,
        headers: HEADERS,
    }
    console.log(config, 'config')

    if (method=='POST' || method=='PATCH') config.body = JSON.stringify(data)
    
    const response = await fetch('https://rn-todo-list-8f8c9-default-rtdb.europe-west1.firebasedatabase.app/todos.json', config)
    console.log('response', response);

    return await response.json()
} 