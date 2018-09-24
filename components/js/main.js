const getSlides = () => {
  let waypoint1 = new Waypoint.Inview({
    element: $("#slide-1"),
    enter: function(direction) {
      console.log("slide 1 Enter triggered");
      $("body").addClass("background-1");
    },
    entered: function(direction) {
      console.log("slide 1 Entered triggered");
    },
    exit: function(direction) {
      console.log("Exit triggered with direction " + direction);
    },
    exited: function(direction) {
      console.log("Exited triggered with direction " + direction);
      $("body").removeClass("background-1");
    },
    context: $(".text-section")
  });

  let waypoint2 = new Waypoint.Inview({
    element: $("#slide-2"),
    enter: function(direction) {
      console.log("slide 2 Enter triggered");
      $("body").addClass("background-2");
    },
    entered: function(direction) {
      console.log("slide 2 Entered triggered");
    },
    exit: function(direction) {
      console.log("Exit triggered with direction " + direction);
    },
    exited: function(direction) {
      console.log("Exited triggered with direction " + direction);
      $("body").removeClass("background-2");
    },
    context: $(".text-section")
  });

  let waypoint3 = new Waypoint.Inview({
    element: $("#slide-3"),
    enter: function(direction) {
      console.log("slide 3 Enter triggered");
      $(".background-video").addClass("active");
    },
    entered: function(direction) {
      console.log("slide 3 Entered triggered");
    },
    exit: function(direction) {
      console.log("Exit triggered with direction " + direction);
    },
    exited: function(direction) {
      console.log("Exited triggered with direction " + direction);
      $(".background-video").removeClass("active");
    },
    context: $(".text-section")
  });

  var slide = document.querySelector(`[data-slide-number="0"]`);
  //console.log(waypoint1);
};

const fireWaypoints = () => {
  $("#slide-1").waypoint(
    function() {
      console.log(this);
    },
    {
      //offset: 900
    }
  );

  $("#slide-2").waypoint(
    function() {
      console.log("hi");
    },
    {
      enter: function(direction) {
        console.log("Enter triggered with direction " + direction);
      }
    }
  );

  $("#slide-3").waypoint(
    function() {
      console.log("hi");
    },
    {
      //offset: 900
    }
  );
};

$(document).ready(function() {
  getSlides();
  //fireWaypoints();
});
