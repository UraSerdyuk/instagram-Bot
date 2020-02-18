function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

let likesGiven = 0;

// // выбирает первый пост
function getFirstPost() {
  setTimeout(() => {
    const div = document.querySelector("._9AhH0");
    div.click();
    show(3000, 6000);
  }, 2000);
}

function show(min, max) {
  const time = randomInteger(min, max);
  setTimeout(function() {
    const likeButton = document.querySelector(".fr66n").children[0];
    const likeSvg = likeButton.children[0];
    const validate = likeSvg.getAttribute("fill") !== "#ed4956";
    const arrow = document.querySelector(".coreSpriteRightPaginationArrow");

    if (validate) {
      likesGiven++;
      likeButton.click();
    }
    arrow.click();
    console.log(`You've liked ${likesGiven} post(s)!`);

    show(min, max);
  }, time);
}

getFirstPost();
