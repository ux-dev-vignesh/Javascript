// $(document).ready(function () {
//   $("#click").click(function () {
//     $("#para").toggle();
//   });
// });

// $(document).ready(() => {
//   $("tr:odd").css({
//     color: "green",
//     fontSize: "2em",
//   });
//   $("tr:even").css("color", "orange");
// });

// $("body").css({ width: "100vw", height: "200vh" });
// $(document).ready(() => {
//   $(document).scrollTop(function () {
//     $("body").css("background-color", "green");
//   });
//   $(document).scroll(function () {
//     $("body").css("background-color", "orange");
//     $("body").animate({ fontSize: "10em" });
//   });
// });

// $(".container").css({
//   backgroundColor: "green",
//   color: "#fff",
//   fontSize: "3em",
//   padding: "10px",
// });

// $("body").keydown(function () {
//   $("#p").hide();
// });
// $("#hide").click(() => $("#p").animate({ left: "250px" }));

// $("#show").click(() => $("#p").slideDown("slow"));

// $("#p").keydown(function () {});

// $("#flip").keyup(function () {
//   $("#panel").slideUp("slow");
// });

// $("#div").innerWidth("5px");

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#div")
//       .animate(
//         {
//           right: "0px",
//           bottom: "0px",
//           opacity: "0.2",
//           height: "50px",
//           width: "50px",
//           backgroundColor: "red !important",
//         },
//         "slow"
//       )
//       .animate({
//         top: "0px",
//         right: "0px",
//         opacity: "0.4",
//         height: "100px",
//         width: "100px",
//         backgroundcolor: "blue",
//       })
//       .animate({
//         left: "0px",
//         top: "100vh",
//         opacity: "0.6",
//         height: "50px",
//         width: "50px",
//         backgroundcolor: "orange",
//       })
//       .animate({
//         top: "0",
//         left: "0",
//         opacity: "0.9",
//         height: "100px",
//         width: "100px",
//         backgroundcolor: "gray",
//       });
//   });
// });

// traversing

// $(document).ready(function () {
//   $("#btn").click(function () {
//     $("#div").child().CSS({ color: "red" });
//   });
// });

// $(document).ready(() => {
//   $("body").html(`<div id=div></div>`);
//   $("#div").text("main div in the html").css({
//     color: "green",
//     fontSize: "10em",
//     backgroundColor: "orange",
//     border: "10px solid #000",
//     textAlign: "center",
//   });
//   $("body").append(`<button id=btn>click</button>`);
//   $("#btn").css({
//     backgroundColor: "gray",
//     color: "#fff",
//     border: `2px solid #000`,
//   });

//   $("#btn").click(() => {
//     alert($("#div").text());
//   });
// });

// $(document).ready(function () {
//   $("body").prepend(
//     `<img src=https://images.unsplash.com/photo-1714594847673-598766efd03f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D alt=mainImage id=mainImage> </img>`
//   );

//   $("#mainImage").after(
//     `<img src=https://images.unsplash.com/photo-1682878041238-eb1edf912a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8 alt=rightImage id=rightImage> </img>`
//   );

//   $("#mainImage").before(
//     `<img src=https://images.unsplash.com/photo-1714594847679-64b5a0704937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D alt=leftImage id=leftImage> </img>`
//   );

//   $("#rightImage").after(
//     `<img src=https://images.unsplash.com/photo-1714594847679-64b5a0704937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D alt=leftImage id=leftImage> </img>`
//   );
// });

// setTimeout(summa, 5000);
// function summa() {
// console.log($("img"));
//}
// setTimeout($("#leftImage").html(""), 3000);

// $(document).ready(function () {
//   $("button").click(function () {
//     $.ajax({
//       url: "https://dummy.restapiexample.com/api/v1/employees",
//       success: function (result) {
//         // $("#heading").html(result);
//         // result.map((el) => {
//         //   console.log(el);
//         // });

//         for (let el of result) {
//           console.log(el.id);
//         }
//       },
//     });
//   });
// });

// no conflict

// var j = $.noConflict();

// j(document).ready(() => {
//   j("button").click(() => {
//     j("#heading").text(`new content changed`);
//   });
// });

// each

// $(document).ready(() => {
//   $("button").click(() => {
//     $("p").each(() => {
//       alert($(this).text());
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").each(function () {
//       alert($(this).text());
//     });
//   });
// });

// hover

// $(document).ready(function () {
//   $("button").hover(function () {
//     $("p").each(function () {
//       $(this).css({
//         color: "orange",
//         backgroundColor: "green",
//         fontSize: "10em",
//       });
//     });
//   });
// });

// not

var jq = $.noConflict();

$(document).ready(() => {
  jq("button").click(() => {
    jq("p")
      .not("#p2")
      .css({
        color: "#fff",
        backgroundColor: "orange",
        border: `2px solid #000`,
        width: "200px",
        padding: "10px",
      })
      .animate({ width: "100vw" });
  });
});
