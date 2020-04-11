$(function() {
  //$.get(), $.post(), $.ajax(), $.getJSN()
  //AJAX = Asynchronous JavaScript and XML
  //API = Application programing interface
  //JSON = JaveScript object notation

  //without fallback function
  // $("#code").load("script.js");

  //with fallback function
  // $("#code").load("script.js" , function(response , status){
  //   if(status == "error"){
  //     alert("Could not find file.");
  //   };
  //   console.log(response);
  // });

  //fetch JSON data from flickr
  let flickrAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrAPI , {
    //options
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data){
    //success
    console.log(data);

    $.each(data.items , function(index , item){
      console.log(item);
      $("<img>").attr("src" , item.media.m).appendTo("#flickr");

      //specify number of images you want to display (or remove if condition if you want all images to be displayed)
      if (index == 4){
        return false;
      }
    })

  }).fail(function(){
    //failure
    alert("Ajax call failed.")
  });

});

  