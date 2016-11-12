const fetch = require('node-fetch')
const baseUrl = 'https://jsonplaceholder.typicode.com/photos?albumId='
const urls = [
  baseUrl + '1',
  baseUrl + '3',
  baseUrl + '5',
  baseUrl + '7',
  baseUrl + '9'
]

function getAlbums (words = 3) {
  const promises = urls.map(url => fetch(url)
    .then(data => data.json())
    .then(data => data.filter(data => data.title.trim().split(' ').length <= words))
  )

  return Promise.all(promises)
}

module.exports = getAlbums
