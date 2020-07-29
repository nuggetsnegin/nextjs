// src/data/data.js
//in memory array of notes nothing flashy
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }))

//must do module.export or else it wont persist
module.exports = notes