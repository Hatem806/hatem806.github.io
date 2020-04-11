$(function() {
  let images = ["images/laptop-mobile_small.jpg","images/laptop-on-table_small.jpg","images/people-office-group-team_small.jpg"];
  
  
  // SLIDESHOW (to test this code remove 2 images from the gallery div in the index.html file)

  // let galleryImage = $(".gallery").find("img").first();
  // let i = 0;
  // setInterval(function(){
  //   i = (i+1) % images.length; //0, 1, 2, 0, 1, 2, 0, 1, ...
  //   galleryImage.fadeOut(function(){
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn();
  //   });
  //   console.log(galleryImage.attr("src"));
  // }, 2000);

  //---------------------------------------------//
  
  //GALLERY LIGHTBOX (to test this code you need to add all 3 images to your gallery div in the index.html file)

  let galleryItems = $(".gallery").find("img");
  galleryItems.css("width", "33%").css("opacity" , "0.7");

  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryItems.click(function() {
    let source = $(this).attr("src");
    let image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).stop().fadeIn();
  });

  $(".lightbox").click(function(){
    $(this).stop().fadeOut();
  });

});

  