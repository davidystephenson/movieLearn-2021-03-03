/* global confirm, movies, table, train, analyze, alert, createButton */

function ask () {
  const ok = confirm('Can I learn about you?')

  if (!ok) {
    throw new Error('stop learning')
  }
}

function likeMovie (movie) {
  const like = confirm(movie.title)

  if (like) movie.target = 1
  else movie.target = 0

  return movie
}

function learn () {
  ask()

  const training = movies.map(likeMovie)
  table('User training', training)

  train()
  analyze()
  test()
}

function test () {
  const movie = {}

  movie.name = prompt('What movie do you want to predict?')
  console.log('Name:', movie.name)

  movie.year = prompt('What year was it made?')
  console.log('Year:', movie.year)

  movie.minutes = prompt('How many minutes long is it?')
  console.log('Minutes:', movie.minutes)

  const predicted = predict(movie)
  console.log('Predicted:', predicted)
  alert(predicted.prediction)

  const another = confirm('Test another movie?')
  if (another) test()
}

window.setup = function setup () {
  const start = createButton('start')
  start.mousePressed(learn)
}
