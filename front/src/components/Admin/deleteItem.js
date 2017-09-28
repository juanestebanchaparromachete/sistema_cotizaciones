import fetch from 'isomorphic-fetch';

export function deleteItem(data) {
    return fetch('/producto/' + data.id, {
        method: 'DELETE',
        mode: 'CORS',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}