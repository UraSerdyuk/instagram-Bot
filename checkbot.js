let start = true;
let status = null;

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

// // открывает список пользователей
function getFollowers() {
  let arr = init();
  arr[2].click();
}

// // выбирает первый пост
function getFirstPost() {
  let div = document.querySelector("._9AhH0");
console.log(div);
div.click();
  setTimeout(() => {
    
    setTimeout(likeFirstPhoto, 4000);
    setTimeout(closeLikedPost, 7000);
    setTimeout(getFollowers, 10000);
    setTimeout(chooseOpenFolowers, 15000);
    setTimeout(() => {
      checkAccaunt(init());
    }, 30000);
  }, 4000);
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
// проверка на тип аккаунта
async function checkAccaunt(arr) {
  console.log(arr);
  if(arr[1]){
    setTimeout(() => {
      try {
        if (checkPrivetAccaunt()) {
  
          console.log("Private accaunt");
  
          chooseFollowersInCloseAccount()
            ? setTimeout(() => {
                checkAccaunt(init());
              }, 5000)
            : "";
        } else if (parseInt(arr[1].innerText) === 0 && !checkPrivetAccaunt()) {
  
          console.log("0 posts");
  
          setTimeout(getFollowers, 4000);
          setTimeout(chooseOpenFolowers, 10000);
          setTimeout(() => {
            checkAccaunt(init());
          }, 18000);
        } else if (parseInt(arr[1].innerText) >= 1) {
  
          console.log("normal accaunt");
  
          setTimeout(() => {
            getFirstPost();
          }, 5000);
        }
      } catch (error) {
        console.log(error);
      }
    }, 5000);
  }else{
  let arr =   checkAccaunt(init());
  console.log(arr,'www')
  }
}
// закрыть блок после удачного лайка
function closeLikedPost() {
  let closeButton = document.querySelector(".ckWGn");
  closeButton.click();
  return;
}

// выбрать пользователи из открытого списка
function chooseOpenFolowers() {
  let openFollowers = document.querySelectorAll(".FPmhX.notranslate._0imsa");
  // console.log(openFollowers);
  openFollowers[Math.floor(Math.random() * openFollowers.length)].click();
  return;
}

// выбрать случайного пользователя у закрытого аккаунта
function chooseFollowersInCloseAccount() {
  let closeFolowers = document.querySelectorAll(".FPmhX.notranslate.Qj3-a");
  closeFolowers[Math.floor(Math.random() * closeFolowers.length)].click();
  return true;
}

// проверка , приватный ли аккаунт
function checkPrivetAccaunt() {
  let closeAccaunt = document.querySelector(".rkEop");
  if (closeAccaunt) {
    if (
      closeAccaunt.textContent === "This Account is Private" ||
      closeAccaunt.textContent === "Це приватний обліковий запис" ||
      closeAccaunt.textContent === 'Это закрытый аккаунт'
    ) {
      return true;
    }
  }
  return false;
}

// получить число от диапазона
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
// старт
checkAccaunt(init());
