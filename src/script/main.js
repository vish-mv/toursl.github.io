
function Playpause(){
    var vid=document.getElementById('mainvid');
    var scrollVal=window.scrollY;
    if(scrollVal>400){
        vid.pause()
    }
    else{
        vid.play()
    }
}
window.addEventListener('scroll',Playpause);

function sendSubmitEmail() {
    const emailBody = {
      First_Name: document.getElementById("fname").value,
      Last_Name: document.getElementById("lname").value,
      Rating : document.querySelector('input[name="rating"]:checked').value,
      Reason_For_Rating: document.getElementById("reason").value,
      First_Task : document.getElementById("firstTask").value ,
      Second : document.getElementById("secondTask").value ,


    };
  
    let emailBodyString = "";
    for (const [key, value] of Object.entries(emailBody)) {
      emailBodyString += key + ": " + value + "\n";
    }
  
    const emailLink =
      "mailto:didula.20221256@iit.ac.lk" +
      "?subject=" +
      encodeURIComponent("USER FEEDBACK") +
      "&body=" +
      encodeURIComponent(emailBodyString);
    window.location.href = emailLink;
  }


function validate_Comment(){
    if(document.getElementById("fname").value == ""){
        alert("Please enter your first name !!");
        return false;
    }
    if(document.getElementById("lname").value == ""){
        alert("Please enter your Last name !!");
        return false;
    }

    validRadio();
    var isRateValid;

    if (document.getElementById("reason").value==""){
        alert("Please enter a valid Reason for your rating !!");
        return false;
    }

    sendSubmitEmail(); 

    document.write("Thank You!! \n");
    document.write("Your feedback reported Successfuly");
}


function validRadio(){
    var valid = false;
    var rate = document.getElementsByName("rating");
        for (var i = 0; i < rate.length; i++) {
            if(rate[i].checked){
                valid = true;
                isRateValid = true;
                break;
            }
        }

    if(valid != true){
         window.alert("Please enter a service rate..!");
        isRateValid = false;   
    }
}





