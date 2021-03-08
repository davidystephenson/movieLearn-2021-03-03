// Table
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

// MapReduce
function getTotal (array) {
  const total = array.reduce(add)

  return total
}
function getMinutes (movie) {
  return movie.minutes
}
const minutes = movies.map(getMinutes)
const totalMinutes = getTotal(minutes)
console.log('Total minutes:', totalMinutes)

console.log('Training size:', movies.length)

// Average

const averageMinutes = totalMinutes / minutes.length
console.log('Average minutes:', averageMinutes)

function getAverage (array) {
  const total = getTotal(array)
  const average = total / array.length

  return average
}
const averageYears = getAverage(years)
console.log('Average Years:', averageYears)
