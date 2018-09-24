const getSlides = () => {
  let waypoint1 = new Waypoint({
    element: document.querySelector(".slide-1"),
    handler: function() {
      console.log("slide-1");
    },
    offset: 50
  });

  let waypoint2 = new Waypoint({
    element: document.querySelector(".slide-2"),
    handler: function() {
      console.log("slide-2");
    },
    offset: 50
  });

  let waypoint3 = new Waypoint({
    element: document.querySelector(".slide-3"),
    handler: function() {
      console.log("slide-3");
    },
    offset: 50
  });

  var slide = document.querySelector(`[data-slide-number="0"]`);
  console.log(waypoint1);
};

const fireWaypoints = () => {
  $(".slide-1").waypoint(function() {
    console.log("slide-1 fired");
    console.log(this);
  });

  $(".slide-2").waypoint(
    function() {
      console.log("slide-2 fired");
    },
    { offset: "30%" }
  );

  console.log("hi");
};

$(document).ready(function() {
  //getSlides();
  fireWaypoints();
});
