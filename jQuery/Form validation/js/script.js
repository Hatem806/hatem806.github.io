// $(function() {

//   let inputFields = $("input:text, input:password, textarea");





//   //focus and blur

//   inputFields.focus(function(){
//     $(this).css("box-shadow", "0 0 4px #666");
//   });

//   inputFields.blur(function(){
//     $(this).css("box-shadow", "none");
//   });

//   //validate number of characters entered in text box
//   $("#name").blur(function(){
//     let text = $(this).val();
//     if(text.length < 3){
//       $(this).css("box-shadow", "0 0 10px #911");
//     } else {
//       $(this).css("box-shadow", "0 0 10px #191");
//     }
//   });




//   //change event

//   $("#checkbox").change(function(){
//     let isChecked = $(this).is(":checked");
//     if (isChecked){
//       $(this).add("label[for='cb']").css("box-shadow", "0 0 10px #191");
//     } else {
//       $(this).add("label[for='cb']").css("box-shadow", "0 0 10px #911");
//     }
//   });

//   $("#selection").change(function(){
//     let selectedOption = $(this).find(":selected").text();
//     alert(selectedOption);
//   });





//   //submit event

//   $("#form").submit(function(e){
//     var textarea = $("#message");
//     if(textarea.val().trim() == ""){
//       textarea.css("box-shadow", "0 0 10px #911");
//       e.preventDefault();
//     } else {
//       //form will be submitted
//     }
//   });
// });

  