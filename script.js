// // // promises.all 

// // let p1 = Promise.resolve("harsh")
// // let p2 = Promise.resolve("harshita")
// // let p3 = Promise.resolve("harshi")
// // let p4 = Promise.reject("harshiiiii")

// // Promise.all([p1,p2,p3])
// // .then((result)=>{
// //     console.log(result);
    
// // })

// // promise.any 

// // let c1 = Promise.reject("channel 1")
// // let c2 = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve("channel 2 working")
// //     }, 2000);
// // })
// // let c3 = Promise.reject("channel 3")


// // Promise.any([c1,c2,c3])
// // .then((result)=>{
// //     console.log(result);
    
// // })

// // promise.allsettled

// // let p1 = Promise.resolve("harsh")
// // let p2 = Promise.reject("harshita")
// // let p3 = Promise.resolve("harshi")
// // let p4 = Promise.reject("harshiiiii")

// // Promise.allSettled([p1,p2,p3,p4])
// // .then((result)=>{
// //     console.log(result);
    
// // })


// //promise.race

// // let p1 = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve("prod 1 milgya")
// //     }, 2000);
// // }) 


// // let p2 = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve("prod 2 milgya")
// //     }, 3000);
// // }) 

// // Promise.race([p1,p2]).then((aditya)=>{
// //    console.log(aditya);
   
// // })

// // let marks = 33

// // new Promise((resolve, reject) => {
// //     if(marks >= 33){
// //         resolve("you're passed")
// //     }
// //     else{
// //         reject("you're failed")
// //     }
// // })

// // .then((kuchbhi)=>{
// //    console.log(kuchbhi);
// // })
// // .catch((error)=>{
// //     console.log(error);
    

// // })


// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         name:"harsh",
//         age:23
//     })
// })

// .then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//     console.log(data);
    
// })

// //implicit

// let a = "10"

// a = Number(a)

// console.log(a);

// json kya hota hai ?
// Array of object
// let harsh = {
//      name:"harsh",
//      age:23,
//      role:"sr trainer @trainx"
// }

// let json = JSON.stringify(harsh)

// console.log(json);


// let harshita = '{"name":"harshita","age":23,"role":"sr trainer @trainx"}'

// let json = JSON.parse(harshita)

// console.log(json);


// function yeyaadrahega(){
//     let dada = "kuch to tha"

//     function yebhiyaadrahega(){
//         console.log(dada);
//     }
//     return yebhiyaadrahega
// }

// let result = yeyaadrahega()

// result()

    



