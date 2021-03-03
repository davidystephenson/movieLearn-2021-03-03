const decades = [1940, 1970, 2000, 2030]

const runtimes = [90, 120, 150, 180]

function analyze () {
  const data = {}

  runtimes.forEach(runtime => {
    const row = {}

    decades.forEach(year => {
      const imaginary = {
        year: year,
        minutes: runtime
      }

      const predicted = predictMovie(brain.network, imaginary)

      row[year] = predicted.prediction
    })

    data[runtime] = row
  })

  table('Analysis', data)
}

analyze()
