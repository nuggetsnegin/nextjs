// src/data/data.js
//in memory array of notes nothing flashy
//We won't get into creating a UI to create notes, so let's just seed our in-memory DB with some notes.
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }))

//must do module.export or else it wont persist
module.exports = notes