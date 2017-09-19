import fetch from 'isomorphic-fetch';

export function deleteItem(data) {
    return fetch('/producto', {
        method: 'DELETE',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}