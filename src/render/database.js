import Dexie from 'dexie'
const db = new Dexie('mvglist')

db.version(2).stores({
  settings: '++id, name, value',
  stationWatchers: '++id, name, to',
  routes: '++id, from, to, oneway'
})

export default db