"use strict"

var audioContext = new AudioContext()
window.onload = function() {
  var onOff = document.getElementById("on-off")
  var span = document.getElementsByTagName("span")[0]
  var osc = false
  var freqSliderVal = document.getElementsByTagName("input")[1].value
  var selectedWaveform = "sawtooth"
  var selectedSolfege = "do"
  var waveformTypes = document.getElementsByTagName('li')
  var solfegeTypes = document.getElementsByTagName('li')

  function select() {
    var selectedWaveformElement = document.getElementById(this.id)
    selectedWaveform = document.getElementById(this.id).id
    console.log(selectedWaveform)

    for (var i = 0; i < waveformTypes.length; i += 1){
      waveformTypes[i].classList.remove("selected-waveform")
    }

    selectedWaveformElement.classList.add("selected-waveform")
  }

  for (var i = 0; i < waveformTypes.length; i++) {
    waveformTypes[i].addEventListener('click', select)
  }

  // Do (262 Hz) Re (294 Hz) Mi (330 Hz) Fa (349 Hz) Sol (392 Hz) La (440 Hz) Ti (494 Hz)
  function selectNote() {
    var selectedSolfegeElement = document.getElementById(this.id)

    selectedSolfege = document.getElementById(this.id).id;

    for (var i = 0; i < solfegeTypes.length; i += 1){
      solfegeTypes[i].classList.remove("selected-solfege")
    }

    selectedSolfegeElement.classList.add("selected-solfege")
  }

  for (var i = 0; i < solfegeTypes.length; i++) {
    solfegeTypes[i].addEventListener('click', select)
  }

  setInterval(function() {
    if (!osc) {

      console.log("Oscillator is stopped. Waiting for oscillator to start")

    }else{
      freqSliderVal = document.getElementsByTagName("input")[1].value
      osc.frequency.value = freqSliderVal;
      console.log("Oscillator is playing. Frequence value is " + freqSliderVal)
      osc.type = selectedWaveform
    }
  }, 50)

  onOff.addEventListener("click", function() {

    if (!osc){
      osc = audioContext.createOscillator()
      osc.type = selectedWaveform
      osc.frequency.value = freqSliderVal
      osc.connect(audioContext.destination)
      osc.start(audioContext.currentTime)
      onOff.value = "stop"
      span.innerHTML = "Click to stop oscillator"
    }else{
      osc.stop(audioContext.currentTime)
      osc = false
      onOff.value = "start"
      span.innerHTML = "Click to start oscillator"
    }
  })
}
