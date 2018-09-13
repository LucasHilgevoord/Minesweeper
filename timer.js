var counter = 0;

function setup(){

  var timer = select('#countUp');
  timer.html('0');

  function timeIt(){
    counter ++;
    timer.html(counter);
  }

  setInterval(timeIt, 1000);
}
