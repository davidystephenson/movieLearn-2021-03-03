const movies = [
  { title: 'Mad Max: Fury Road', year: 2015, minutes: 120, target: 1, genre: 2 }, // good?
  { title: 'Inception', year: 2010, minutes: 135, target: 1, genre: 2 },
  { title: 'The Force Awakens', year: 2015, minutes: 135, target: 0, genre: 0 },
  { title: 'The Godfather', year: 1972, minutes: 177, target: 1, genre: 2 },
  { title: 'The Wizard of Oz', year: 1939, minutes: 102, target: 0, genre: 0 },
  { title: 'Wolf of Wall Street', year: 2013, minutes: 180, target: 1, genre: 2 },
  { title: 'E.T.', year: 1982, minutes: 114, target: 0, genre: 0 },
  { title: 'Back to the Future', year: 1985, minutes: 116, target: 0, genre: 0 },
  { title: 'Grease', year: 1978, minutes: 110, target: 0, genre: 0 },
  { title: 'Gone With the Wind', year: 1939, minutes: 221, target: 0, genre: 0 }
]

function table (title, data) {
  console.log(title)
  console.table(data)
}
table('Training data', movies)

// Map
function getYear (movie) {
  return movie.year
} // movie => movie.year
const years = movies.map(getYear)
console.log('Years:', years)

// Reduce
function add (a, b) {
  return a + b
}
const totalYears = years.reduce(add)
console.log('Total years:', totalYears)

function getTotal (array, mapper) {
  const mapped = array.map(mapper)
  const total = mapped.reduce(add)

  return total
}
function getMinutes (movie) {
  return movie.minutes
}
const totalMinutes = getTotal(movies, getMinutes)
console.log('Total minutes:', totalMinutes)

console.log('Training size:', movies.length)

const averageYear = totalYears / movies.length
console.log('Average year:', averageYear)

function average (movies, mapper) {
  const total = getTotal(movies, mapper)

  return total / movies.length
}
const averageMinutes = average(movies, getMinutes)
console.log('Average Minutes:', averageMinutes)
