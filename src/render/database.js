import Dexie from 'dexie'
const db = new Dexie('mvglist')

db.version(1).stores({
  settings: '++id, name, value',
  stationWatchers: '++id, name, to',
  routes: '++id, from, to'
})

export default db