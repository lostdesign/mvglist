import db from '../database'

async function getSettings(commit) {
  try {
    let settings = await db.settings
      .toArray()
    commit('setSettings', settings)
  } catch (err) {
    console.error("Couldn't load settings", err)
  }
}

async function getRoutes(commit) {
  try {
    let routes = await db.routes.toArray()
    commit('setRoutes', routes)
  } catch (err) {
    console.error("Couldn't load routes", err)
  }
}

async function addRoute(commit, route) {
  try {
    let newRoute = await db.routes.put({from: route.from, to: route.to})
    getRoutes(commit)
  } catch (err) {
    console.error("Couldn't load newRoute", err)
  }
}

async function deleteRouteById(commit,id) {
  try {
    let route = await db.routes.where({'id':id}).delete()
    getRoutes(commit)
  } catch (err) {
    console.error("Couldn't delete routes", err)
  }
}


async function getStationWatchers(commit) {
  try {
    let stationWatchers = await db.stationWatchers.toArray()
    commit('setStationWatchers', stationWatchers)
  } catch (err) {
    console.error("Couldn't load stationWatchers", err)
  }
}

async function addStationWatch(commit, station) {
  try {
    let stationWatchers = await db.stationWatchers.put({name: station.name, to: station.to})
    getStationWatchers(commit)
  } catch (err) {
    console.error("Couldn't load stationWatchers", err)
  }
}

async function deleteStationWatcherById(commit,id) {
  try {
    let stationWatcher = await db.stationWatchers.where({'id':id}).delete()
    getStationWatchers(commit)
  } catch (err) {
    console.error("Couldn't delete stationWatchers", err)
  }
}


export default {
  loadSettings: ({ commit }) => {
    getSettings(commit)
  },
  deleteStationWatch: ({commit}, id) => {
    deleteStationWatcherById(commit, id)
  },
  deleteRoute: ({commit}, id) => {
    deleteRouteById(commit, id)
  },
  addNewStationWatch: ({commit}, station) => {
    addStationWatch(commit, station)
  },
  addNewRoute: ({commit}, route) => {
    addRoute(commit, route)
  },
  initialLoad: ({ commit }) => {
    getSettings(commit)
    getStationWatchers(commit)
    getRoutes(commit)
  }
}