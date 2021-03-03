/* global table, movies, averageYear, averageMinutes */

const brain = {}

function setup () {
  // neural network
  brain.network = [ // Weights
    [0, 0, 0], // axons (weights), importance
    [0, 0, 0], // neuron 2
    [0, 0, 0]
  ]

  brain.steps = 0
}
setup()
table('Network', brain.network)

function flatten (x) {
  const y = 1 / (1 + Math.exp(-x)) // sigma

  return y
}
const y = flatten(5.9)
console.log('Sigma:', y)

function perceptron (axons, a, b) {
  const weightA = axons[0]
  const weightB = axons[1]
  const bias = axons[2]

  const feelingA = weightA * a
  const feelingB = weightB * b

  const opinion = feelingA + feelingB + bias
  const prediction = flatten(opinion) // sigma

  return prediction
}

const madMax = movies[0]
const neuron = perceptron(brain.network[0], madMax.year, madMax.minutes)
console.log('Neuron:', neuron)

function predictMovie (network, movie) {
  const normalYear = movie.year - averageYear
  const normalMinutes = movie.minutes - averageMinutes

  const neuron1 = perceptron(network[0], normalYear, normalMinutes)
  const neuron2 = perceptron(network[1], normalYear, normalMinutes)
  const neuron3 = perceptron(network[2], neuron1, neuron2)

  movie.prediction = neuron3
  movie.error = Math.abs(movie.target - movie.prediction)

  return movie
}

const prediction = predictMovie(brain.network, madMax)
console.log('Mad Max:', prediction)

function predict (movie) {
  return predictMovie(brain.network, movie)
}
const inception = predict(movies[1])
console.log('Inception:', inception)
