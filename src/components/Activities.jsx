function ActivityList({ activities }) {
  return activities.map((activity, index) => (
    <a key={index} href="#/">
      <ul className="activities-list hidden">
        <li className="list-item">
          <img className="list-img" src={activity.mainImageUrl} alt="foto van activiteit" />
          <div className="list-container">
            <h6 className="list-title">{activity.title}</h6>
            <p className="list-description">{activity.shortDescription}</p>
            <hr className="list-line" />
          </div>
        </li>
      </ul>
    </a>
  ))
}

export default function Activities({ weather, activities }) {
  const currentWeather = weather.weatherInfo[3]
  const doActivities = activities.filter(a => a.type !== 'dont')
  const dontActivities = activities.filter(a => a.type === 'dont')

  return (
    <section data-scroll-theme="" className="area-3 hidden">
      <div className="content-wrapper">
        <div className="widget hidden">
          <h3 className="widget-temp">{weather.temp}˚</h3>
          <div>
            <h4 className="widget-heading">{currentWeather?.title}</h4>
            <p className="widget-text">{currentWeather?.description}</p>
          </div>
        </div>
        <div className="activities hidden">
          <h5 className="activities-heading hidden">Some things you could do:</h5>
          <ActivityList activities={doActivities} />
        </div>
        {dontActivities.length > 0 && (
          <div className="activities hidden">
            <h5 className="activities-heading hidden">Some things you should not do:</h5>
            <ActivityList activities={dontActivities} />
          </div>
        )}
      </div>
    </section>
  )
}
