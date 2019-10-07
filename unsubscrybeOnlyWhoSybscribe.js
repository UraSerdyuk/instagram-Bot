// функция берет данные о пользователе
function init() {
  // 1
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
function openReaders() {
  // 2
  let arr = init();
  arr[2].click();
  setTimeout(scroll, 3000);
}

// проскроливает открытый список
function scroll() {
  // 3
  let list = document.querySelector(".isgrP");
  let val1 = 0;
  let val2 = 100;

  let interval = setInterval(() => {
    list.scrollTo(val1, val2);
    val = val2;
    val2 += 100;
    // console.log(val2);

    if (val2 > 45000) {
      setTimeout(() => {
        closeFolowersBlock(getNames());
      }, 1000);
      return clearInterval(interval);
    }
  }, 200);
}
//скрол для тех на кого подписан

function newScroll(arr) {
  // 7
  let list = document.querySelector(".isgrP");
  let val1 = 0;
  let val2 = 100;

  let interval = setInterval(() => {
    list.scrollTo(val1, val2);
    val = val2;
    val2 += 100;
    console.log(val2);

    if (val2 > 45000) {
      setTimeout(() => {
        checkOrSubscribeUser(arr, init());
      }, 1000);
      return clearInterval(interval);
    }
  }, 200);
}

// функция которая берет весь список имен пользователей
function getNames() {
  // 4
  let arrA = document.querySelectorAll(".FPmhX.notranslate._0imsa");
  let arrUserNames = [];
  for (let i of arrA) {
    arrUserNames.push(i.textContent);
  }
  return arrUserNames;
}

// закрыть окно после получения масива имен
function closeFolowersBlock(arr) {
  // 5
  document.querySelector(".glyphsSpriteX__outline__24__grey_9.u-__7").click();
  setTimeout(() => {
    openUserFollow(arr);
  }, 2000);
}
// функция которая откроет список на кого я подписан
function openUserFollow(arr) {
  // 6
  let arrFolowers = init();
  arrFolowers[3].click();
  setTimeout(() => {
    newScroll(arr);
  }, 2000);
}

// функция проверки
function checkOrSubscribeUser(arr, list) {
  // 8
  console.log("number of users", arr);
  let li = document.querySelectorAll(".wo9IH");
  let num = 0;
  let numberOfFollowers = +list[3].children[0].textContent;

  myLoop();

  function myLoop() {
  
    setTimeout(() => {
      if (
        arr.includes(
          li[num].querySelector(".FPmhX.notranslate._0imsa").textContent
        )
      ) {
        console.log("подписан ");
        num++;
        myLoop();
      } else {
        setTimeout(() => {
          li[num].querySelector('.sqdOP.L3NKy._8A5w5[type="button"]').click();
        }, randomInteger(30000, 40000));
        setTimeout(() => {
          console.log('dellete');
          document.querySelector(".aOOlW.-Cab_").click();
          num++;
          myLoop();
        }, randomInteger(50000, 80000));
      }
    }, 2000);
    // console.log('inside myLoop');
    // setTimeout(function() {

    //   if (arr.includes(li[num].querySelector(".FPmhX.notranslate._0imsa").textContent)) {
    //     // console.log(li[num].querySelector(".FPmhX.notranslate._0imsa").textContent);
    //     console.log("такой пользователь подписан на тебя ");

    //   } else {
    //     // console.log(li[num].querySelector(".FPmhX.notranslate._0imsa").textContent);
    //     console.log("такой не подписан , можно удалять !!!");

    //     li[num].querySelector('.sqdOP.L3NKy._8A5w5[type="button"]').click();
    //     setTimeout(() => {
    //       document.querySelector('.aOOlW.-Cab_').click();
    //     }, randomInteger(20000, 25000));
    //   }

    //   // console.log('incremrnt')
    //   num++;
    //   myLoop();

    // }, randomInteger(30000));
  }
}

// вспомогающая функция
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Запуск скрипта
setTimeout(openReaders, 400);
