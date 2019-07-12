
const name = 'Rack Monome'
const readline = require('readline')
const easymidi = require('easymidi')
const serialosc = require('serialosc')
const output = new easymidi.Output(name, true)

let channel = 1
let grid = null
let last = null
let down = 0
let fn = false

console.log(`Welcome to ${name}, press any key to stop.`)

serialosc.start()

// Utils

function noteAt (x, y) {
  const q = quadAt(x, y)
  const o = offsetAt(x, y)
  return (q * 16) + o
}

function offsetAt (x, y) {
  const pad = padAt(x, y)
  return (pad.y * 4) + pad.x
}

function quadAt (x, y) {
  return (1 - Math.floor(y / 4)) + (Math.floor(x / 4) * 2)
}

function padAt (x, y) {
  return { x: x % 4, y: -(y % 4) + 3 }
}

function posAt (i) {
  return { x: i % 16, y: Math.floor(i / 16) }
}

function idAt (x, y) {
  return (y * 16) + x
}

function redraw () {
  for (let i = 0; i < 128; i++) {
    const pos = posAt(i)
    grid.levelSet(pos.x, pos.y, 0)
  }
}

function print (note) {
  console.log(`${(note.i + '').padStart(3, ' ')} | ${(note.p + '').padStart(3, ' ')} | ${(note.v + '').padStart(3, ' ')} | ch:${(channel + '').padStart(3, ' ')}`)
}

function onKeyDown (x, y) {
  const id = idAt(x, y)
  console.log(id, posAt(id), quadAt(x, y), padAt(x, y), noteAt(x, y))
  // const note = noteAt(idAt(x, y))
  // down += 1
  grid.levelSet(x, y, 10)
  // output.send('noteon', { note: note.v, velocity: 127, channel: channel })
  // print(note)
  // if (fn && idAt(x, y) < 16) {
  //   channel = idAt(x, y)
  // }
  // fn = note.i === 127
  // last = note.p
}

function onKeyUp (x, y) {
  // const note = noteAt(idAt(x, y))
  // down -= 1
  grid.levelSet(x, y, 0)
  // output.send('noteoff', { note: note.v, velocity: 127, channel: channel })
  // fn = false
  // if (down < 1) {
  //   last = null
  // }
}

function close () {
  console.log('Done.')
  process.exit()
}

// Ready

serialosc.on('device:add', (device) => {
  grid = device
  grid.all(0)
  grid.on('key', (data) => { if (data.s === 1) { onKeyDown(data.x, data.y) } else { onKeyUp(data.x, data.y) } })
  console.log(`Selecting ${device.model}(${device.sizeX}x${device.sizeY}) ${device.id}..`)
  redraw()
})

// Quit

readline.emitKeypressEvents(process.stdin)

process.stdin.setRawMode(true)

process.stdin.on('keypress', (str, key) => {
  console.log('Closing..')
  grid.all(0)
  output.close()
  setTimeout(close, 500)
})
