export function getData(apiEndpoint, urlsMapper) {
  return new Promise((resolve, reject) => {
    // get data from cache and optionally wait for images loading
    if (getCacheData(apiEndpoint)) {
      //console.log(`response for ${apiEndpoint} already cached, so taking it from cache`)
      const data = getCacheData(apiEndpoint);
      if (!urlsMapper) {
        resolve(data);
      } else {
        getDataWithImages(data, urlsMapper).then(dataWithImages => resolve(dataWithImages));
      }
    }

    // get data from api and optionally wait for images loading
    else {
      //console.log(`no data cached for ${apiEndpoint}, so requesting if from api`)
      fetch(apiEndpoint, { headers: { 'X-Api-Key': process.env.API_KEY } })
        .then(response => response.json())
        .then(data => {
          if (!urlsMapper) {
            setCacheData(apiEndpoint, data);
            resolve(data);
          } else {
            // return promise to make error (if any) catch-able
            return getDataWithImages(data, urlsMapper).then(dataWithImages => {
              setCacheData(apiEndpoint, dataWithImages);
              resolve(dataWithImages);
            });
          }
        })
        .catch(({ message }) => {
          //console.error(emessage)
          reject(message);
        });
    }
  });
}

function getCacheData(url) {
  return JSON.parse(sessionStorage.getItem(url));
}

function setCacheData(url, data) {
  sessionStorage.setItem(url, JSON.stringify(data));
}

function getDataWithImages(data, urlsMapper) {
  return new Promise((resolve, reject) => {
    const urls = data.map(urlsMapper);
    const images = [];

    urls.forEach(url => {
      const image = new Image();

      image.onload = () => {
        images.push(image);
        if (images.length === urls.length) {
          data.forEach((item, i) => (item.imageElement = images[i]));
          resolve(data);
        }
      };
      image.onerror = () => reject();

      image.src = url;
    });
  });
}
