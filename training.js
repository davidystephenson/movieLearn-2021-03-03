/* global table, predictMovies, brain, getLoss, setup, movies, getAverage */

function getError (movie) {
  return movie.error
}

function evaluate (network, movies) {
  const predictions = predictMovies(network, movies)
  table('Predictions', predictions)
  const errors = predictions.map(getError)

  const averageError = getAverage(errors)
  console.log('Average error:', averageError)
}
evaluate(brain.network, movies)

function mutate (number) {
  const chaos = Math.random()
  const upOrDown = chaos - 0.5

  return number + upOrDown
}

function evolve (axons) {
  return axons.map(mutate)
}

function train () {
  console.log('Training!')

  setup()

  while (brain.steps < 100000) {
    const loss = getLoss(brain.network)

    const offspring = brain.network.map(evolve)
    const offspringLoss = getLoss(offspring)

    const improvement = loss - offspringLoss

    if (improvement > 0.00001) {
      brain.network = offspring
      console.log('Loss:', loss)
      brain.steps = 0
    } else {
      brain.steps = brain.steps + 1
    }
  }

  console.log('Trained!')
  table('Network', brain.network)
  evaluate(brain.network, movies)
}

train()
