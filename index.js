function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

let likesGiven = 0;

function show (min,max) {
    let time =   randomInteger(min, max)
    setTimeout(function() {

        let heart = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9'),
            arrow = document.querySelector('.coreSpriteRightPaginationArrow');
        if (heart[1]) {
            heart = heart[1].parentElement;
            likesGiven++, heart.click();
        }
        arrow.click();
        console.log(`You've liked ${likesGiven} post(s)!`);

        show(min,max);
    }, time);

}





function closeOpenFollowersWith0(){
    closeButon = document.querySelector('.glyphsSpriteX__outline__24__grey_9.u-__7');
    closeButon.click();
    let arr =  init();
    arr[2].click
  };


  'Це приватний обліковий запис'