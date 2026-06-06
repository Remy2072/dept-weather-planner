export const dummyWeather = {
  temperature: { temp: 24, metric: 'CELSIUS' },
  weatherInfo: [
    { title: 'Sunny', description: 'Clear skies throughout the day.' },
    { title: 'High UV index', description: 'Use sunscreen when going outside.' },
    { title: 'Warm temperatures', description: 'Temperatures above seasonal average.' },
    {
      title: "It's currently around {{ CELCIUS }}° in the Netherlands",
      description: "Very sunny, and very unusual for in the Netherlands. But we should enjoy it as long as it lasts.",
    },
  ],
}

export const dummyForecast = {
  forecast: [
    { date: '2026-06-07', minTemp: 19, maxTemp: 22, precipitation: 0.5, windDirection: 'N/W', metric: 'CELSIUS' },
    { date: '2026-06-08', minTemp: 19, maxTemp: 22, precipitation: 0.5, windDirection: 'N/W', metric: 'CELSIUS' },
    { date: '2026-06-09', minTemp: 19, maxTemp: 22, precipitation: 0.0, windDirection: 'N/W', metric: 'CELSIUS' },
    { date: '2026-06-10', minTemp: 19, maxTemp: 22, precipitation: 0.5, windDirection: 'N/W', metric: 'CELSIUS' },
    { date: '2026-06-11', minTemp: 19, maxTemp: 22, precipitation: 0.5, windDirection: 'N/W', metric: 'CELSIUS' },
  ],
}

export const dummyActivities = {
  activities: [
    {
      title: 'Swimming',
      shortDescription: 'In recreation and sports, the propulsion of the body through water by combined arm and leg motions.',
      mainImageUrl: 'https://images.unsplash.com/photo-1560090995-01632a28895b?w=200&h=200&fit=crop',
      type: 'do',
    },
    {
      title: 'Cycling',
      shortDescription: "A sustainable and exhilarating way to explore the world on two wheels. It's a great way to exercise.",
      mainImageUrl: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=200&h=200&fit=crop',
      type: 'do',
    },
    {
      title: 'Go to the beach',
      shortDescription: 'Where sun, sand, and waves create the perfect setting for relaxation, tanning, and fun.',
      mainImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop',
      type: 'do',
    },
    {
      title: 'Ice skating',
      shortDescription: 'Gliding gracefully or spinning with joy on a frozen canvas of ice. Heerenveen is the place to be!',
      mainImageUrl: 'https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=200&h=200&fit=crop',
      type: 'dont',
    },
    {
      title: 'Walking',
      shortDescription: 'A simple and natural exercise that connects us to the world, rejuvenates the mind, and nourishes the body.',
      mainImageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=200&h=200&fit=crop',
      type: 'dont',
    },
    {
      title: 'Darts',
      shortDescription: "Precision, focus, and camaraderie combined in a game of skill and strategy. It's crazy.",
      mainImageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop',
      type: 'dont',
    },
  ],
}
