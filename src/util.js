import request from 'request'
import Stream from 'stream'
import fs from 'fs'

export function getJSON(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (error,response, body) => {
            if (response && response.statusCode == 200){
                resolve(JSON.parse(body));
            }else{
                reject(error);
            }
        });
    })
}

export function saveImage(url, path) {
    request(url).pipe(fs.createWriteStream(path))
}