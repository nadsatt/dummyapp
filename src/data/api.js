export default function getData(apiEndpoint) {
  return new Promise((resolve, reject) => {
    if (getCacheData(apiEndpoint)) {
      const data = getCacheData(apiEndpoint);
      resolve(data);
    } else {
      fetch(apiEndpoint, { headers: { 'X-Api-Key': process.env.API_KEY } })
        .then(response => response.json())
        .then(data => {
          setCacheData(apiEndpoint, data);
          resolve(data);
        })
        .catch(({ message }) => reject(message));
    }
  });
}

function getCacheData(url) {
  return JSON.parse(sessionStorage.getItem(url));
}

function setCacheData(url, data) {
  sessionStorage.setItem(url, JSON.stringify(data));
}
