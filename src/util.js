import request from 'request'

export function getJSON(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (error,response, body) => {
            if (response && response.statusCode == 200){
                resolve(body)
            }else{
                reject(error)
            }
        });
    })
}