export function getJSON(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {mode: 'no-cors'})
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(ex => reject(ex));
    });
}