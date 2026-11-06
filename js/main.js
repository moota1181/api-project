function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            var result = this.responseText;
            var mohamed = JSON.parse(result);
            document.querySelector(".test img").src = mohamed[0].url;
            document.querySelector(".test h4").innerHTML = mohamed[0].title;
            document.querySelector(".test h6").innerHTML = mohamed[0].id;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
    xhttp.send();
}

getApi();