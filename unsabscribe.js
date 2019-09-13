// функция берет данные о пользователе
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
  arr[3].click();
  setTimeout(scroll, 3000);
}

// проскроливает открытый список
function scroll() {
  let list = document.querySelector(".isgrP");
  let val1 = 0;
  let val2 = 100;

  let interval = setInterval(() => {
    list.scrollTo(val1, val2);
    val = val2;
    val2 += 100;
    console.log(val2);

    if (val2 > 20000) {
      subscribe();
      return clearInterval(interval);
    }
  }, 200);
}

// функция подписки
function subscribe() {
  console.log("start unsabscribe");
  let arr2 = document.querySelectorAll(
    '._0mzm-.sqdOP.L3NKy._8A5w5[type="button"]'
  );

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  let item = 1;

  function show(min, max) {
    let time = randomInteger(min, max);

    setTimeout(function() {
      arr2[item].click();
      item++;
      setTimeout(()=>{
        let btn =  document.querySelector('.aOOlW.-Cab_');
        btn.click();
        console.log(arr2[item], item, time);
        show(min, max);
      },2000)
      
    }, time);
  }

  show(3000, 20000);
}

setTimeout(getFollowers, 400);
