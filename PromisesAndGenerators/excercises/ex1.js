const crypto = require('crypto')

function getRandoms () {
  const size = [48, 40, 32, 24, 16, 8]

  const promises = size.map(size => createRandomBytes(size))

  return Promise.all(promises)
  .then(randoms => randoms).catch(err => err)
}

function createRandomBytes (size) {
  return new Promise(function (resolve, reject) {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) {
        reject(err)
      } else {
        resolve(buffer.toString('hex'))
      }
    })
  })
}

function getRandomsObj () {
  return getRandoms().then(randoms => {
    return {
      title: `${randoms.length} Secure Randoms`,
      randoms: randoms
    }
  })
}

module.exports = getRandomsObj
