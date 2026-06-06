const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function toC(temp) {
  return Math.round(((temp - 32) * 5) / 9)
}

export function processWeather(data) {
  let temp = data.temperature.temp
  if (data.temperature.metric === 'FAHRENHEIT') {
    temp = toC(temp)
  } else {
    temp = Math.round(temp)
  }

  const weatherInfo = data.weatherInfo.map(info => ({
    ...info,
    title: info.title.replace('{{ CELCIUS }}', `~ ${temp}`).replace('°C', ' °'),
  }))

  return { temp, weatherInfo }
}

export function formatForecast(items) {
  return items.map(item => {
    const d = new Date(item.date)
    const day = days[d.getUTCDay()]
    const date = d.getDate()
    const month = months[d.getMonth()]
    const minTemp = item.metric === 'FAHRENHEIT' ? toC(item.minTemp) : item.minTemp
    const maxTemp = item.metric === 'FAHRENHEIT' ? toC(item.maxTemp) : item.maxTemp
    return { ...item, dayOfWeek: `${day} ${date}th ${month}`, minTemp, maxTemp }
  })
}
