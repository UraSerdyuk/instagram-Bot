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
  arr[2].click();
  setTimeout(scroll,1000)
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
    if (val2 > 20000) {
      subscribe();
      return clearInterval(interval);
     
    } 
  },200);
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}


// функция подписки
function subscribe() {
  let arr2 = document.querySelectorAll('._0mzm-.sqdOP.L3NKy[type="button"]');

  
  let item = 5;
  
  function show(min, max) {
    let time = randomInteger(min, max);
  
    setTimeout(function() {
      if (!arr2[item].className.includes('_8A5w5')) {
        arr2[item].click();
        item++;
        console.log(arr2[item], item,time);
        show(min, max);
      }else {
        item++;
        show(min, max);
      }
    }, time);
  }


  setTimeout(()=>{
    console.log('start subscribe');
    show(10000, 25000);
  },1000);
}


setTimeout(getFollowers,400);
