const share = document.querySelector(".share")
const like = document.querySelector(".like")
share.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            text: `welcome to my profile:
`,
            url: 'https://fadikbb.netlify.app/',

        }).then(() => {
            console.log('thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {
        alert("the current browser does not support the sjare function. please ,manually share the link")
    }
});
let textShare = document.querySelector('.text-share');
share.addEventListener('click', e => {
    textShare.innerHTML++
})



var storedItem = localStorage.getItem("storedItem");

function save(){
    var Item = document.querySelector(".text-like").innerHTML;
    localStorage.setItem("storedItem", Item);
    document.querySelector(".text-like").innerHTML = Item;
}

function get(){
    localStorage.getItem("storedItem");
    document.querySelector(".text-like").innerHTML = storedItem;

}

const likeIcon = document.querySelector(".fa-heart")
let textLike = document.querySelector('.text-like');
like.addEventListener('click', e => {
    if(likeIcon.style.color == "red") {
        likeIcon.style.color = "black";
        textLike.innerHTML++;
    } 
    else {
        likeIcon.style.color = "red";
        textLike.innerHTML--;
    }

})
