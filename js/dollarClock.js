setInterval(function () {
    elevenPlay()
}, 1);

setInterval(function () {
    tenPlay()
}, 1);

setInterval(function () {
    ninePlay()
}, 1);

setInterval(function () {
    eightPlay()
}, 1);

setInterval(function () {
    sevenPlay()
}, 100);

setInterval(function () {
    sixPlay()
}, 1000);

setInterval(function () {
    fivePlay()
}, 10000);

setInterval(function () {
    fourPlay()
}, 100000);

setInterval(function () {
    threePlay()
}, 100000);

setInterval(function () {
    twoPlay()
}, 1000000);

setInterval(function () {
    onePlay()
}, 1000000);


function twoPlay() {
$("body").removeClass("play");
var aa = $("ul.twoPlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.twoPlay li").eq(3);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.twoPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.twoPlay li").eq(3);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.twoPlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
      }

}

function onePlay() {
$("body").removeClass("play");
var aa = $("ul.onePlay li.active");

if (aa.html() == undefined) {
    aa = $("ul.onePlay li").eq(4);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.onePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.onePlay li").eq(4);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.onePlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
      }
    }

    function threePlay() {
    $("body").removeClass("play");
    var aa = $("ul.threePlay li.active");

    if (aa.html() == undefined) {
        aa = $("ul.threePlay li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.threePlay li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.threePlay li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.threePlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
          }
        }

        function fourPlay() {
        $("body").removeClass("play");
        var aa = $("ul.fourPlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.fourPlay li").eq(0);
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.fourPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa = $("ul.fourPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.fourPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
              }
            }
          function fivePlay() {
            $("body").removeClass("play");
            var aa = $("ul.fivePlay li.active");

            if (aa.html() == undefined) {
                aa = $("ul.fivePlay li").eq(0);
                aa.addClass("before")
                    .removeClass("active")
                    .next("li")
                    .addClass("active")
                    .closest("body")
                    .addClass("play");

            }
            else if (aa.is(":last-child")) {
                $("ul.fivePlay li").removeClass("before");
                aa.addClass("before").removeClass("active");
                aa = $("ul.fivePlay li").eq(0);
                aa.addClass("active")
                    .closest("body")
                    .addClass("play");
            }
            else {
                $("ul.fivePlay li").removeClass("before");
                aa.addClass("before")
                    .removeClass("active")
                    .next("li")
                    .addClass("active")
                    .closest("body")
                    .addClass("play");
                  }
                }
              function sixPlay() {
                $("body").removeClass("play");
                  var aa = $("ul.sixPlay li.active");

                  if (aa.html() == undefined) {
                      aa = $("ul.sixPlay li").eq(0);
                      aa.addClass("before")
                          .removeClass("active")
                          .next("li")
                          .addClass("active")
                          .closest("body")
                          .addClass("play");

                  }
                  else if (aa.is(":last-child")) {
                      $("ul.sixPlay li").removeClass("before");
                      aa.addClass("before").removeClass("active");
                      aa = $("ul.sixPlay li").eq(0);
                      aa.addClass("active")
                          .closest("body")
                          .addClass("play");
                  }
                  else {
                      $("ul.sixPlay li").removeClass("before");
                      aa.addClass("before")
                          .removeClass("active")
                          .next("li")
                          .addClass("active")
                          .closest("body")
                          .addClass("play");
                        }
                      }
                    function sevenPlay() {
                      $("body").removeClass("play");
                        var aa = $("ul.sevenPlay li.active");

                          if (aa.html() == undefined) {
                              aa = $("ul.sevenPlay li").eq(0);
                              aa.addClass("before")
                                  .removeClass("active")
                                  .next("li")
                                  .addClass("active")
                                  .closest("body")
                                  .addClass("play");

                          }
                          else if (aa.is(":last-child")) {
                              $("ul.sevenPlay li").removeClass("before");
                              aa.addClass("before").removeClass("active");
                              aa = $("ul.sevenPlay li").eq(0);
                              aa.addClass("active")
                                  .closest("body")
                                  .addClass("play");
                          }
                          else {
                              $("ul.sevenPlay li").removeClass("before");
                              aa.addClass("before")
                                  .removeClass("active")
                                  .next("li")
                                  .addClass("active")
                                  .closest("body")
                                  .addClass("play");
                                }
                              }
                            function eightPlay() {
                              $("body").removeClass("play");
                                var aa = $("ul.eightPlay li.active");

                                  if (aa.html() == undefined) {
                                      aa = $("ul.eightPlay li").eq(0);
                                      aa.addClass("before")
                                          .removeClass("active")
                                          .next("li")
                                          .addClass("active")
                                          .closest("body")
                                          .addClass("play");

                                  }
                                  else if (aa.is(":last-child")) {
                                      $("ul.eightPlay li").removeClass("before");
                                      aa.addClass("before").removeClass("active");
                                      aa = $("ul.eightPlay li").eq(0);
                                      aa.addClass("active")
                                          .closest("body")
                                          .addClass("play");
                                  }
                                  else {
                                      $("ul.eightPlay li").removeClass("before");
                                      aa.addClass("before")
                                          .removeClass("active")
                                          .next("li")
                                          .addClass("active")
                                          .closest("body")
                                          .addClass("play");
                                        }
                                      }
                                    function ninePlay() {
                                      $("body").removeClass("play");
                                        var aa = $("ul.ninePlay li.active");

                                          if (aa.html() == undefined) {
                                              aa = $("ul.ninePlay li").eq(0);
                                              aa.addClass("before")
                                                  .removeClass("active")
                                                  .next("li")
                                                  .addClass("active")
                                                  .closest("body")
                                                  .addClass("play");

                                          }
                                          else if (aa.is(":last-child")) {
                                              $("ul.ninePlay li").removeClass("before");
                                              aa.addClass("before").removeClass("active");
                                              aa = $("ul.ninePlay li").eq(0);
                                              aa.addClass("active")
                                                  .closest("body")
                                                  .addClass("play");
                                          }
                                          else {
                                              $("ul.ninePlay li").removeClass("before");
                                              aa.addClass("before")
                                                  .removeClass("active")
                                                  .next("li")
                                                  .addClass("active")
                                                  .closest("body")
                                                  .addClass("play");
                                                }
                                              }

                                            function tenPlay() {
                                              $("body").removeClass("play");
                                                var aa = $("ul.tenPlay li.active");

                                                  if (aa.html() == undefined) {
                                                      aa = $("ul.tenPlay li").eq(0);
                                                      aa.addClass("before")
                                                          .removeClass("active")
                                                          .next("li")
                                                          .addClass("active")
                                                          .closest("body")
                                                          .addClass("play");

                                                  }
                                                  else if (aa.is(":last-child")) {
                                                      $("ul.tenPlay li").removeClass("before");
                                                      aa.addClass("before").removeClass("active");
                                                      aa = $("ul.tenPlay li").eq(0);
                                                      aa.addClass("active")
                                                          .closest("body")
                                                          .addClass("play");
                                                  }
                                                  else {
                                                      $("ul.tenPlay li").removeClass("before");
                                                      aa.addClass("before")
                                                          .removeClass("active")
                                                          .next("li")
                                                          .addClass("active")
                                                          .closest("body")
                                                          .addClass("play");
                                                        }
                                                      }

                                                      function elevenPlay() {
                                                        $("body").removeClass("play");
                                                          var aa = $("ul.elevenPlay li.active");

                                                            if (aa.html() == undefined) {
                                                                aa = $("ul.elevenPlay li").eq(0);
                                                                aa.addClass("before")
                                                                    .removeClass("active")
                                                                    .next("li")
                                                                    .addClass("active")
                                                                    .closest("body")
                                                                    .addClass("play");

                                                            }
                                                            else if (aa.is(":last-child")) {
                                                                $("ul.elevenPlay li").removeClass("before");
                                                                aa.addClass("before").removeClass("active");
                                                                aa = $("ul.elevenPlay li").eq(0);
                                                                aa.addClass("active")
                                                                    .closest("body")
                                                                    .addClass("play");
                                                            }
                                                            else {
                                                                $("ul.elevenPlay li").removeClass("before");
                                                                aa.addClass("before")
                                                                    .removeClass("active")
                                                                    .next("li")
                                                                    .addClass("active")
                                                                    .closest("body")
                                                                    .addClass("play");
                                                                  }
                                                                }
