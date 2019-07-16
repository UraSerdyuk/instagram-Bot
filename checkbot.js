let start = true;
// на страничке инициализирует кнопки , по которым брать доступ
function init() {
  start = false;
  let menuButtomn,
    posts,
    followers,
    following,
    arr = [];
  arr.push(
    (menuButtomn = document.querySelectorAll(".-nal3")),
    (posts = menuButtomn[0]),
    (followers = menuButtomn[1]),
    (following = menuButtomn[2])
  );
  return arr;
}
// открывает список пользователей
function getFollowers() {
  setTimeout(function() {
    let arr = init();
    arr[2].click();
  }, 6000);
}
// выбирает первый пост
function getFirstPost() {
  let div = document.querySelector("._9AhH0");

  if (div) {
    setTimeout(likeFirstPhoto, 2100);
    div.click();
    setTimeout(closeLikedPost, 2400);
    setTimeout(getFollowers, 4000);
    setTimeout(chooseOpenFolowers, 10000);
  } else {
    getFollowers();
  }
}
//стравим лайк открывшему пользователю
function likeFirstPhoto() {
  let heart = document.getElementsByClassName(
    "glyphsSpriteHeart__outline__24__grey_9"
  );
  if (heart[1]) {
    heart = heart[1].parentElement;
    heart.click();
  }
}

function checkPost(arr) {
  console.log(arr);

  setTimeout(() => {
    if (checkPrivetAccaunt()) {
      setTimeout(closeFolowers(), 2000);
      return;
    } 


    if (parseInt(arr[1].innerText) === 0 && !checkPrivetAccaunt ){
      setTimeout(getFollowers, 2300);
      setTimeout(chooseOpenFolowers, 10000);
      return;
    } 

    if (parseInt(arr[1].innerText) >= 1) {
      setTimeout(() => {
        getFirstPost();
      }, 2000);
      return;
    }  
      // пойти к другому пользавателю
      setTimeout(getFollowers, 2300);
      setTimeout(chooseOpenFolowers, 10000);
    
  }, 2000);
}

function closeLikedPost() {
  let closeButton = document.querySelector(".ckWGn");
  closeButton.click();
}

function chooseOpenFolowers() {
  let openFollowers = document.querySelectorAll(".FPmhX.notranslate._0imsa");
  openFollowers[Math.floor(Math.random() * 4)].click();
  start = true;
  console.log(start, "inside choose");
  if (start) {
    setTimeout(() => {
      checkPost(init());
    }, 10000);
  }
}
// закрыть пост , после лайка
function closeFolowers() {
  let closeFolowers = document.querySelectorAll(".FPmhX.notranslate.Qj3-a");
  closeFolowers[2].click();
  setTimeout(checkPost(init()),1000);
}

function checkPrivetAccaunt() {
  console.log('!!!!!!!!!!!!!!!!!CHECKED PRIVED ACCAUNT!!!!!!!!!!!!!!!!!!!')
  let closeAccaunt = document.querySelector(".rkEop");
  if(closeAccaunt){
    if (closeAccaunt.textContent === "This Account is Private") {
      return true;
    }
  }
  
  return false;
}
