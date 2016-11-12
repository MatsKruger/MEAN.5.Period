const fetch = require('node-fetch')
const urls = [
  'https://jokes-plaul.rhcloud.com/api/joke',
  'http://api.icndb.com/jokes/random',
  'http://localhost:3000/api/joke/random'
]

function getJokes () {
  const programmerJokePromise = fetch(urls[0])
  .then(data => data.json())
  .then(joke => ({
    programmerJoke: {
      joke: joke.joke,
      reference: joke.reference
    }
  }))
  .catch(err => err)

  const chuckNorrisJokePromise = fetch(urls[1])
  .then(data => data.json())
  .then(joke => ({
    chucknorrisJoke: {
      joke: joke.value.joke,
      reference: 'http://api.icndb.com/jokes/'
    }
  }))
  .catch(err => err)

  const localJokePromise = fetch(urls[2])
  .then(data => data.json())
  .then(joke => ({
    localJoke: {
      joke: joke.joke,
      reference: 'Local joke'
    }
  }))
  .catch(err => err)

  return Promise.all([
    programmerJokePromise,
    chuckNorrisJokePromise,
    localJokePromise
  ])
  .then(jokes => jokes.reduce((prev, curr) => Object.assign(prev, curr)), {})
  .catch(err => err)
}

getJokes().then(jokes => {
  console.log(jokes)
})

module.exports = getJokes
