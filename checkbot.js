// на страничке инициализирует кнопки , по которым брать доступ
function init() {
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
  setTimeout(() => {
    div.click();
    setTimeout(likeFirstPhoto, 2100);
    setTimeout(closeLikedPost, 3400);
    setTimeout(getFollowers, 5000);
    setTimeout(chooseOpenFolowers, 10000);
    setTimeout(() => {
      checkAccaunt(init());
    }, 15000);
  }, 4000);
}

//стравим лайк открывшему пользователю
function likeFirstPhoto() {
  let heart = document.getElementsByClassName(
    "glyphsSpriteHeart__outline__24__grey_9 u-__7"
  );
  if (heart[0]) {
    heart = heart[0].parentElement;
    heart.click();
  }
}
// проверка на тип аккаунта
async function checkAccaunt(arr) {
  setTimeout(() => {
    try {
      if (checkPrivetAccaunt()) {
        console.log("Private accaunt");
        chooseFollowersInCloseAccount()
          ? setTimeout(() => {
              checkAccaunt(init());
            }, 5000)
          : () => {
              console.log("users nont found in privet ackaunt");
            };
      } else if (
        parseInt(arr[1].innerText) === 0 &&
        !checkPrivetAccaunt() &&
        parseInt(arr[2].innerText) !== 0
      ) {
        console.log("0 posts");
        setTimeout(getFollowers, 2300);
        setTimeout(chooseOpenFolowers, 10000);
        setTimeout(() => {
          checkAccaunt(init());
        }, 18000);
      } else if (
        parseInt(arr[1].innerText) === 0 &&
        !checkPrivetAccaunt() &&
        parseInt(arr[2].innerText) === 0 &&
        parseInt(arr[3].innerText) > 1
      ) {
        console.log("0 post 0 folowers");
        arr[3].click();
        setTimeout(() => {
          chooseOpenFolowers();
        }, 4000);
        setTimeout(() => {
          checkAccaunt(init());
        }, 8000);
      } else if (
        parseInt(arr[1].innerText) === 0 &&
        !checkPrivetAccaunt() &&
        parseInt(arr[2].innerText) === 0 &&
        parseInt(arr[3].innerText) === 0
      ) {
        let home = document.querySelector(
          ".glyphsSpriteUser__outline__24__grey_9.u-__7"
        );
        home.click();
        setTimeout(() => {
          checkAccaunt(init());
        }, 5000);
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
  openFollowers[Math.floor(Math.random() * openFollowers.length)].click();
  return true;
}

// выбрать случайного пользователя у закрытого аккаунта
function chooseFollowersInCloseAccount() {
  if (!(document.querySelectorAll(".FPmhX.notranslate.Qj3-a").length > 2)) {
    document.querySelectorAll(".XrOey")[2].firstElementChild.click();
    return true;
  }

  let closeFolowers = document.querySelectorAll(".FPmhX.notranslate.Qj3-a");

  if (closeFolowers.length === 0) {
    let home = document.querySelector(".FPmhX.notranslate.Qj3-a");
    home.click();
    return true;
  } else {
    closeFolowers[Math.floor(Math.random() * closeFolowers.length)].click();
    return true;
  }
}

// проверка , приватный ли аккаунт
function checkPrivetAccaunt() {
  let closeAccaunt = document.querySelector(".rkEop");
  if (closeAccaunt) {
    if (
      closeAccaunt.textContent === "This Account is Private" ||
      closeAccaunt.textContent === "Це приватний обліковий запис" ||
      closeAccaunt.textContent === "Это закрытый аккаунт"
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
