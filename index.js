let a = ["syed", "hammad", "ali", "hashmi"];
// a.push("ansab");
// let b = a.splice(2, 1, "hero");  //splice mein removed jo hoga wo bataey ga
// console.log(b);
// console.log(a);

//slice mein jo remove krna hota hay us ka index detay hain

// let c = a.slice(1,3);
// console.log(c);
// console.log(a);

// let z = ["syed","hammad","ali"];
// console.log(z.sort());

// mapping
// let map_item=a.map((element,index,list)=>{
//     console.log(element,index,list);
//     return element +" hero";

// })
// console.log(map_item);

//  for each
// let for_each=a.forEach((element,index,list) => {
//     console.log(element,index,list);
// });

// sorted
// let num=[45,78,23,111];
// console.log(num.sort((a,b)=>{
//     return a-b  // for_ascending
//     // return b-a //for_descending
// }));

// let l=["syed","maadi",["hammad",2,["ali",43,3]]];
// console.log(l.flat(2));

// shif//
// console.log(a.shift("syed"));
// console.log(a);

//unshift//
// console.log(a.unshift("shona"));
// console.log(a);

//===============OBJECT==================//
// let object = { name: "syedhammad", age: 20 };
// for (let i in object) {
//   if (object.hasOwnProperty(i)) {
//       const element = object[i];
//       console.log(element);
//   }
// }

let ob_1 = { name: "hammad" };
let ob_2 = { age: 20 };
let ob_3 = { fav: "hello" };

// for (let i in ob_2) {
//     ob_1[i]=ob_2[i]
// }
// console.log(ob_1);

// //another way
// let op={...ob_1,...ob_2,}
// console.log(op);

// let ob = Object.assign(ob_1, ob_2,ob_3);
// console.log(ob);

// let ne={on:"go",lo:"fuck"}
// let b=Object.freeze(ne)
// console.log(b);
// ne["fuck"]="yes fuck me";
// console.log(Object.isFrozen(ne));

let ob = { key_1: "hammad", key_2: 20 };
let x = e => {
  console.log(this, e);
};

x.apply(ob, [12]);
let b = function(i, r) {
  console.log(this,i,r);
};
b("maadi","hello");
let lame = () => {
  console.log("fuck");
};
lame();
