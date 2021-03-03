/* global predictMovie */

function predictMovies (network, movies) {
  function predict (movie) {
    return predictMovie(network, movie)
  }

  const predictions = movies.map(predict)

  return predictions
}
const predictions = predictMovies(brain.network, movies)
table('Predictions', predictions)

// Negative log
// Stretch a number between zero and infinity backwards
function flip (x) {
  const y = -Math.log(x)

  return y
}

function assess (movie) {
  if (movie.target > 0) movie.grade = movie.prediction
  else movie.grade = 1 - movie.prediction

  movie.failure = flip(movie.grade)

  return movie.failure
}

function getLoss (network) {
  const predicted = predictMovies(network, movies)
  const grade = getTotal(predicted, assess)

  return grade / movies.length
}

const loss = getLoss(brain.network)
console.log('Loss:', loss)
