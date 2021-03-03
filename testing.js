/* global brain, evaluate */

console.log('Testing!')

const tests = [
  { title: 'The Avengers', year: 2012, minutes: 143, target: 1 },
  { title: 'The Dark Knight', year: 2008, minutes: 152, target: 1 },
  { title: 'Avatar', year: 2009, minutes: 162, target: 0 },
  { title: 'Interstellar', year: 2014, minutes: 169, target: 1 },
  { title: 'West Side Story', year: 1961, minutes: 152, target: 0 }
]

evaluate(brain.network, tests)
