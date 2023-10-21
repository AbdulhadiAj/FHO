// //log for print in console
// console.log(
//   "%cgsdfgseeas fa asera %cew rgeg",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// );
// //to see error in console
// console.error("error");
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.table(["ahmad", "masf", "sadfas"]);
// my_name = "osama";
// window.alert(`hello ${my_name}`);
// document.write(`hello ${my_name}` + " ");
// console.log(`hello %c${my_name}`, "color:red;font-size:30px;");
// window.alert("hello " + my_name);
// document.write(" hello " + my_name);
// console.log(" hello  " + "%c" + my_name, "color:red;font-size:30px;");
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// //data type
// console.log(typeof "FADI");
// console.log(typeof 50);
// console.log(typeof 55.5);
// console.log(typeof [50, 5, 12]);
// console.log(typeof ["fadi", "osama", "samir"]);
// console.log(typeof { name: "fadi", age: 50, country: "lb" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// // make variable
// var user = "osama";
// console.log(user);
// console.log(hello);
// //innerHTML for edit in HTMl
// hello.innerHTML = "option";
//-------------------------------------------------------challenge-----------------------------------------------------------------------------------------------
//challange
// let title = "elzero ",
//   paragraph = "elzero web school",
//   date = "10/15",workup=`<div class="all">
//   <h1 class="title">hello ${title}</h1>
//   <p>${paragraph}</p>
//   <div class="time">${date}</div>
//   </div>`;

// document.write(workup.repeat(4));
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// //arithmetic operator
// console.log(10 + 10);//addition
// console.log(10 + " osama");//addition with two string
//console.log(+"10"+10)//retrun number
// console.log(10 - 10);//subtraction
// console.log(10 - " osama"); //nan
// console.log(typeof NaN);
// console.log(10 * 20);//multiplication
// console.log(10 * (-20 * 8));//multiplication
// console.log(2 ** 4);//power
// console.log(10 % 2);//modelo
// console.log(11 % 2);//modelo
// let num = 1;
// num++;//increment
// ++num;//increment
// num--;//decrement
// --num;//decrement
// ++num;//increment
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// assignment operators
// let a = 10;
// a = a + 20;
// //or
// a += 20;
// //and
// a = a - 20;
// //or
// a -= 20;
// //and
// a = a / 20;
// //or
// a /= 20;
// //and
// a = a % 20;
// //or
// a %= 20;
//------------------------------------------------------challenge--------------------------------------------------------------------------------------------
// let a = "-100";
// let b = "20";
// let c = 30;
// let d = true;
// console.log(-a * b); //2000
// console.log(-(--a) * +(++d) - --c); //173
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER);//max number safe
// console.log(Number.MAX_VALUE);//max number
// console.log(Number.MAX_VALUE+20000);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log((10.34234123132).toString());//retrun string
// console.log((10.34234123132).toFixed(2));//if want spacfic number after comma
// console.log(+"10.34234123132 osama");//retrun not a number
// console.log(parseInt("10.34234123132 osama"));//retrun intger number if it is first
// console.log(parseFloat("10.34234123132 osama"));//retrun decimal number if it is first
// console.log(Number.isInteger("100"))//false
// console.log(Number.isInteger(100.500))//false
// console.log(Number.isInteger(100))//true
// console.log(Number.isNaN("osama"))//false
// console.log(Number.isNaN("osama"/20))//true
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(Math.round(99.2)); // if under .5 give 0
// console.log(Math.round(99.5)); //if above .5 give 1
// console.log(Math.ceil(99.2)); // any number after the comma will give 1
// console.log(Math.floor(99.9)); // any number after the comma will give 0
// console.log(Math.max(20, 30, 3)); //max number between list
// console.log(Math.min(20, 30, 3)); //min number between list
// console.log(Math.pow(2, 3)); //power same console.log(2 ** 3);
// console.log(Math.random());//random number
// console.log(Math.trunc(99.5));//take only intger number
//--------------------------------------------number challenge-----------------------------------------------------------------------------------------------
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e6;
// let d = 2.4;
// //find smallest number in all variables return integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// //use variables  a + d one time to get the needed out put
// console.log(Math.pow(a, Math.trunc(d))); //10000
// //get integer "2" from d variables with 4 methods
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.ceil(d)-1);
// //use variables b+d to get this values
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2))//66.6=>string
// console.log(Math.ceil(b)/Math.ceil(d))//67=>number
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// let theName = "  ahmed  ";
// console.log(theName[1]);
// console.log(theName[5]);
// console.log(theName.charAt(1));
// console.log(theName.charAt(5));
// console.log(theName.length);
// console.log(theName.trim());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = "elzero web school";
// console.log(a.indexOf("web")); //for search on start point of input
// console.log(a.lastIndexOf("web")); //for search on start point of input
// console.log(a.indexOf("o")); //for search on start point of input
// console.log(a.lastIndexOf("o")); //for search on start point of input
// console.log(a.slice(2, 6)); //if you want to cut some ports of p from first
// console.log(a.slice(-2, -6)); //if you want to cut some ports of p from last
// console.log(a.repeat(5)); //for repeat the p
// console.log(a.split(" " /*from where you want split*/, 2 /*limit of split*/));
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = "elzero web school";
// console.log(a.length);
// console.log(a.substring(2, 6)); //same slice
// console.log(a.substring(6, 2)); //same slice
// console.log(a.substring(-10, 6)); //0 -6
// console.log(a.substring(a.length - 5, a.length - 3));
// console.log(a.substr(0));
// console.log(a.substr(17));
// console.log(a.substr(-3));
// console.log(a.includes("web"));
// console.log(a.includes("web", 8));
// console.log(a.startsWith("web", 7));
// console.log(a.endsWith("o", 6));
//---------------------------------string challenge-----------------------------------------------------------------------------------------------------------
// let a = "Elzero web school";
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 7) + a.substr(11));
// console.log(
//   a.charAt(0).toLocaleLowerCase() + a.slice(1, 16).toUpperCase() + a.charAt(16)
// );
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(10 == "10"); //"equal"compare value only
// console.log(10 != "10"); //"not equal"compare value only
// console.log(10 === "10"); //"equal"compare between value and typeof
// console.log(10 !== "10"); //"not equal"compare between value and typeof
// console.log(10 > "10"); //compare between smaller and bigger
// console.log(10 < "10"); //compare between smaller and bigger
// console.log(10 <= "10"); //compare between smaller and bigger or equal
// console.log(true);
// console.log(!true); // "!" not
// console.log(!(10 == "10")); //example
// console.log(10 == "10" && 10 > 8 && 10 >= 10); //"&&" and ,example
// console.log(10 == "10" || 10 > 8 || 10 >= 10); //"||" or ,example
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//if condition
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// if (price == true) {
//   price -= discountAmount;
// } else if (country == "Egypt") {
//   price -= 40;
// } else if (country == "syria") {
//   price -= 50;
// }else{
//     price -= 10;
// }
// console.log(price);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//nesting if
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let students = true;
// if (price == true) {
//   price -= discountAmount;
// } else if (country == "Egypt") {
//   if (students == true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else if (country == "syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// console.log(price);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// //condition (ternary) operator
// let theName = "mona";
// let thwGender = "female";
// let theAge = 30;
// if (thwGender === "male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }
// //condition "?"=if condition ":"else if or else
// thwGender === "male" ? console.log("Mr") : console.log("Mrs");
// let result = thwGender === "male" ? "Mr" : "Mrs"; //can you save it in variable
// console.log(result); //example
// console.log(`hello ${thwGender === "male" ? "Mr" : "Mrs"}${theName}`); //example
// theAge < 20
//   ? console.log("20")
//   : theAge > 20 && theAge < 60
//   ? console.log("between 20 and 60")
//   : theAge > 60
//   ? console.log("geater than 60")
//   : console.log("unknown");
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// /*
// logical or"||":
//     null +undefined+any falsy Value
// nullish coalescing operator "??":
//     null+undefined
// */
// console.log(Boolean(100)); //falsy value
// console.log(Boolean(-100)); //falsy value
// console.log(Boolean(0)); //falsy value
// console.log(Boolean("")); //falsy value
// console.log(Boolean(null)); //falsy value
// let price = 0;
// console.log(`the price is ${price || 200}`); //logical or"||":null +undefined+any falsy Value
// console.log(`the price is ${price ?? 200}`); //nullish coalescing operator "??":null+undefined
//----------------------------------------------challenge if condition----------------------------------------------------------------------------------------------------
// let a = 10;
// a > 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log("unknown");

// let st = "Elzero Web School";
// if (st.repeat(2).length.toString() === "34") {
//   console.log("Good");
// }
// //W poition may change
// if (st.charAt(7) === "W") {
//   console.log("Good");
// }
// if (st !== "string") {
//   console.log("Good");
// }
// let s = "10";
// if (typeof +st === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
//-------------------------------------------------------challenge switch--------------------------------------------------------------------------------------------------
// let job = "support";
// let salary = 0;
// switch (job) {
//   case "manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "support":
//     salary = 6000;
//     break;
//   case job === "Developer" || job === "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
//     break;
// }
// console.log(salary);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir", ["osama", "lolo"]];
// console.log("hello " + a[1]);
// console.log("hello " + a[1][1]);
// console.log("hello " + a[4][1][1]);
// //or
// console.log(`hello ${a[1]}`);
// console.log(`hello ${a[1][1]}`);
// console.log(`hello ${a[4][1][1]}`);

// console.log(a);
// //edit on array
// a[0] = "jamal";
// console.log(a);
// a[4] = "mom";
// console.log(a);
// console.log(Array.isArray(a));//to check it if Array
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir"];
// console.log(a.length);
// a[a.length] = "gamil";
// console.log(a);
// a.length = 3;
// console.log(a);
// a.unshift("miss", "idol");//add to first
// console.log(a);
// a.push("khra", "less");//add to last
// console.log(a);
// a.pop();//delete from last
// console.log(a);
// a.shift();//delete from first
// console.log(a);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir", "ahmed"];
// console.log(a);
// console.log(a.indexOf("ahmed"));//search in Array
// console.log(a.indexOf("ahmed", 2 /*where u want it start*/));
// console.log(a.lastIndexOf("ahmed"));//The opposite
// console.log(a.lastIndexOf("ahmed", -2 ));//The opposite
// //if you sreach in array to string not found give -1
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = [10, "sayed", "mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(a.sort());
// console.log(a.reverse());
// //can you put it with some ,like:
// console.log(a.sort().reverse());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["Ahmed", "sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(a);
// //slice create new array
// console.log(a.slice());
// console.log(a.slice(1));
// console.log(a.slice(1, 3));
// console.log(a.slice(-3));
// console.log(a.slice(1, -2));
// console.log(a.slice(-4, -2));
// console.log(a);
// //splice can you add and delete and select from where start
// a.splice(1, 2, "fadi", "samara");
// console.log(a);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["Ahmed", "sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let b = [" samar", "sameh "];
// let c = ["haytham", "shadi"];
// let all = a + b + c;//false try
// console.log(all);
// let all1 = a.concat(b,c);//if you want make many array in one array
// console.log(all1);
// console.log(all1.join("|").toUpperCase());//for change to string or between it  in array
// console.log(all1.join());
//-----------------------------------------challenge Array-------------------------------------------------------------------------------------------------------------------
// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// //write code here

// console.log(my.slice(my.indexOf("Ahmed"), my.indexOf("Gamal")).reverse()); //["Osama", "Elham", "Mazero","Ahmed"]

// console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); //["Elham", "Mazero"]

// my.splice(zero, my.length, "Elzero");

// console.log(my); //"Elzero"

// console.log(
//   my[+zero][my[zero].indexOf("r")] + my[+zero][my[zero].indexOf("o")].toUpperCase()
// ); //"rO"
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // for([1][2][3]){
// //   //block of code
// // }
// a=10
//for loop
// for(let i =0 ; i<=a ;i++){
//   console.log(i)
// }
// for (let i = 0; i < a; i++) {
//   console.log("hello number "+i)
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = [1, 2, "osama", "ahmed", 1, 3, "sayed", "ali", "amira"];
// for (let i = 0; i < a.length; i++) {
//   if (isNaN(a[i])) {//check the array"a" if it is a number
//     console.log(a[i]);
//   }
// }
// //or=>same output
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] === "string") {
//     console.log(a[i]);
//   }
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //nested loop
// let products = ["keyboard","mouse","pen","pad","monitor"]

// let color =["red","green","black"]
// let models=[2020,2021]
// for (let i = 0; i < products.length; i++) {
//     console.log(`#`.repeat(15))
//      console.log(`#${products[i]}`)
//      console.log(`#`.repeat(15))
//      console.log(`color: `)
// for (let j = 0; j < color.length; j++) {
//     console.log(`-  ${color[j]}`)
// }
// console.log(`models: `)
// for (let k = 0; k < models.length; k++) {
//     console.log(`-  ${models[k]}`);

// }

// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let color = ["red", "green", "black"];
// // for (let i = 0; i < products.length; i++) {
// //   if (products[i] === "pen") {
// //     break; //for stop
// //   }
// //   console.log(products[i]);
// // }
// // products = ["keyboard", 55, "mouse", 12, "pen", "pad", "monitor", 11];
// // for (let i = 0; i < products.length; i++) {
// //   if (typeof products[i] === "number") {
// //     continue; //من اجل الحذف والاستمرار
// //   }
// //   console.log(products[i]);
// // }
// //and
// mainloop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestloop: for (let j = 0; j < color.length; j++) {
//     console.log(color[j]);
//     if (color[j] == "green") {
//       break mainloop;//to break main loop from nested loop
//     }
//   }
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let i = 0;
// for (;;) {
//   console.log(products[i]);  
//   i +=1;
//   if (i === products.length) {
    
//     break;
//   } 

// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
