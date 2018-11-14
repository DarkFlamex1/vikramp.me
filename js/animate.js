var cssSelector = anime({
    targets: '#cssSelector .el',
    translateY: 250
  });


var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#basicTimeline .rectangle.el',
    translateY: window.innerHeight,
    easing: 'easeOutExpo',
    offset: 400
  })
  .add({
    targets: '#basicTimeline .rectangle2.el',
    translateY: window.innerHeight,
    easing: 'easeOutExpo',
    offset: 300
  })
  .add({
    targets: '#basicTimeline .rectangle.el1',
    translateY: window.innerHeight,
    easing: 'easeOutExpo',
    offset: 200
  })
  .add({
    targets: '#basicTimeline .rectangle2.el1',
    translateY: window.innerHeight,
    easing: 'easeOutExpo',
    offset: 100
  });
