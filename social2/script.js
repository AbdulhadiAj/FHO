const share = document.getElementsByClassName("share")

share.addEventListener('click', event => {

    if (navigator.share) {

        navigator.share({
            Text: 'please read this great article:',
            url: 'https://www.google.com/'

        }).then(() => {
            console.log('thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {
        alert("the current browser does not support the sjare function. please ,manually share the link")
    }
});