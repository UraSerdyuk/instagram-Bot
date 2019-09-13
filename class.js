// // // class betchBot {
// // // _start =  false

// // //  init() {
// // //     start = false;
// // //   let menuButtomn,
// // //     posts,
// // //     followers,
// // //     following,
// // //     arr = [];
// // //   arr.push(
// // //     (menuButtomn = document.querySelectorAll(".-nal3")),
// // //     (posts = menuButtomn[0]),
// // //     (followers = menuButtomn[1]),
// // //     (following = menuButtomn[2])
// // //   );
// // //   return arr;
// // //   }

// // // }

// // let a = 0;

// // let promise = new Promise((res, reg) => {
// //   setTimeout(() => {
// //     a += 30;
// //     res('Jopa');
// //   });
// // });

// // promise.then(res => {
// //   console.log(res);
// //   return res;
// // }).then((res) => {
// //   console.log(res);
// // }).finally((a) => {
// //   console.log('finally');
// //   return a
// // }).then((after) => {
// //   console.log('after :', after);
// // }).catch((err) => {
// //   console.error(err);
// // });

// let tweeps = [
//   { name: 'Peter' },
//   { name: 'Mary' }
// ];

// var str = "Mentioned by " + tweeps.map(prop("name")).join(", ");

// function prop (str) {
//   return function(el) {
//     return  el[str] ;
//   }
// }

// console.log(str);

// // var str = "Mentioned by " + tweeps.map(el => {
// //   return el.name;
// // });
// console.log(str);

// // var str = "Mentioned by " + tweeps.map(prop);
// // console.log(str);

// function prop (str) {
//   return function(el) {
//     return  el[str] ;
//   }
// }

// // написать функцию prop

// "Mentioned by Peter, Mary"

// let arr = [2, 3, 4235, 6, 343, -1, 34, 111, 1, 12, -555];

// function sort(arr) {
//   let newArr = [];
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let min = Math.min(...arr);
//     let indexMin = arr.indexOf(min);
//     let num = arr.splice(indexMin, 1);
//     newArr.push(num[0]);
//   }

//   return newArr
// }

// console.log(sort(arr));






//----------------------------- замікание  ----------------------------------------------------------
// function Counter() {
//   var count = 0;
//   return function(){
//     count++;
//     return count;
//   }
// }

// let counter = Counter();

// console.log(counter());



// function sum(a) {


// return function(b) {
// if(typeof b !== )
// }
// }

// console.log(sum(1,2)());