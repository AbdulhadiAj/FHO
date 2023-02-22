 function search() {
     let searchbar = document.querySelector(".input-search").Value.toUpperCase();
     let cardlist = document.querySelector(".card-list");
     let list = document.querySelectorAll(".card");
     let gamename = document.getElementsByTagName(".card-body");


     for (let i = 0;i < gamename.length;i++){
        if (gamename[i].innerHTML.toUpperCase().indexOf(searchbar)>=0){
            list[i].getElementsByClassName.display="";

        }else{
            list[i].getElementsByClassName.display="none"
        }
     }


}