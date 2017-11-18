const scrolltoElem = (elem, time) => {
  // elem can be an actual DOM element or a position on the Y axis from
  // the beginning of the document
  // time is the amount of time the animation should take, in ms
  let destination = 0;

  if(typeof elem == "object"){
    while(elem){
      destination += elem.offsetTop;
      elem = elem.offsetParent;
    }
  }
  else if(typeof elem == "number"){
    destination = elem;
  }

  const body = (document.body.scrollTop)?document.body:document.documentElement;

  let actualPos = body.scrollTop;
  const distance = destination - actualPos;


  const interval = (start_time, start_pos, total_distance) => {
    const actual_time = new Date().getTime();
    const time_lapsed = actual_time - start_time;
    // we compute the position we should be at by finding the time lapsed since
    // the beginning of the animation
    const computed_pos = (time_lapsed/time)*total_distance;

    const cond = (time_lapsed <= time);

    if(cond){
      body.scrollTop = start_pos+computed_pos;
      window.requestAnimationFrame(() => {
        interval(start_time, start_pos, total_distance);
      });
    }
  }

  const launchAnimation = () => {
    const start = new Date().getTime();
    window.requestAnimationFrame(() => {
      interval(start, actualPos, distance);
    });
  }

  launchAnimation();
}


module.exports = scrolltoElem;
