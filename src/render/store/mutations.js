export default {
  setSettings: (state, newSettings) => {
    state.settings = newSettings
  },
  setStationWatchers: (state, newStationWatchers) => {
    state.stationWatchers = newStationWatchers
  },
  setRoutes: (state, newRoute) => {
    state.routes = newRoute
  }
}