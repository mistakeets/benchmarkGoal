const audioContext = new AudioContext()
let oscillator = audioContext.createOscillator()
oscillator.type = 'square'
oscillator.connect(audioContext.destination)
oscillator.start(audioContext.currentTime)
oscillator.stop(audioContext.currentTime + 2)

const gainNode = audioContext.createGain()
gainNode.gain.value = 0.5
gainNode.connect(audioContext.destination)

// Solfège/Music Scale
// Do (262 Hz) Re (294 Hz) Mi (330 Hz) Fa (349 Hz) 
// Sol (392 Hz) La (440 Hz) Ti (494 Hz), Do (523Hz)

const playItAgain = () => {
  noteArray = [262, 294, 330, 349, 392, 440, 494, 523]
  for (let i = 0; i < noteArray.length - 1; i++) {
    noteArray[i] = oscillator.frequency.value
  }
}