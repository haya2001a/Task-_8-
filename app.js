let count_alert=document.getElementById("count-alert");
function openAlert(){
    count_alert.classList.add("open-alert");
    
            var str = document.getElementById("input_text").value;
            var charCounter=0;
            var spaceCounter=0;
            
            for(var i=0 ;i<str.length;i++){
                if(str[i] != " "){
                    charCounter+=1;
                }
                if(str[i] == " "){
                    spaceCounter+=1;
                   
                } 
            }
        document.getElementById("counter").innerHTML = "The text you entered consists of :  " ;
        document.getElementById("charCounter").innerHTML = charCounter  +"    characters";
        document.getElementById("spaceCounter").innerHTML = spaceCounter+"    spaces";
        document.getElementById("input_text").value = "";

    }

    function closeAlert(){
      count_alert.classList.remove("open-alert");
    }
