$(document).ready (function(){
    $("#hexForm").submit(function(event) {
       //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
      event.preventDefault();
     console.log("button clicked");
     let form = $('#hexForm')[0];
     let data = new FormData(form);

     for(
       let valuePairs of data.entries()){
         console.log(valuePairs[0]+','+ valuePairs[1]);
       }


     $.ajax({
            type: "POST",
            enctype: 'form-data',
            url: "../index.php",
            data: data,
            processData: false,//prevents from converting into a query string
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
            //reponse is a STRING (not a JavaScript object -> so we need to convert)
            console.log("we had success!");
            console.log(response);
            
            document.getElementById("inputText").value = "";

            //use the JSON .parse function to convert the JSON string into a Javascript object

            // let parsedJSON = JSON.parse(response);
            // console.log(parsedJSON);
            // displayResponse(parsedJSON);

            //reset the form
            $('#hexForm')[0].reset();
           },
           error:function(){
          console.log("error occurred");

        }
      });
   });

 });
