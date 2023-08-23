// PROMISES IN JAVASCRIPT

// let car = new Promise(function(resolve,reject){
//     fuel_fulltank = false;
//     if(fuel_fulltank){
//         resolve()
//     }else{
//         reject()
//     }
// });

// car.then(function(){
//     document.write(" <br><br>The car's fuel tank if full. Good to drive")
// }).catch(function(){
//     document.write(" <br><br>The car's fuel tank is not full. Not save to drive.")
// })

// let huntLight = new Promise(function(resolve,reject){
//     battery_charge = true;
//     if(battery_charge){
//         resolve()
//     }else
//     {
//         reject()
//     }
// })

// huntLight.then(function(){
//     document.write(" <br><br> The battery is fully charged. You can go for hunting")
// }).catch(function(){
//     document.write(" <br><br> The battery is not fully charged. Can't go for hunting")
// })

//GENERATOR FUNCTION

// function* num(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }

// let generate = num();
// let one = generate.next();
// let two = generate.next();
// let three = generate.next();
// let four = generate.next();
// let five = generate.next();
// let six = generate.next();

// document.write(JSON.stringify(one));
// document.write(JSON.stringify(two));
// document.write(JSON.stringify(three));
// document.write(JSON.stringify(four));
// document.write(JSON.stringify(five));
// document.write(JSON.stringify(six));

//MULTI PROMISES FUNCTION

// let fuel_tank = function(){
//     return new Promise(function(resolve,reject){
//         resolve("The car doesn't have enouth fuel. ")
//     });
// }
// let engine = function(msg){
//     return new Promise(function(resolve,reject){
//         resolve(msg + "The car's engine is heated. ")
//     })
// }
// let travel = function(msg){
//     return new Promise(function(resolve,reject){
//         resolve(msg + "The car is not safe for travelling. ")
//     })
// }

// fuel_tank().then(function(result){
//     return engine(result)
// }).then(function(result){
//     return travel(result)
// }).then(function(result){
//     document.write("Information: " + result);
// })

//Async Await

// let results = function(score){
//     return new Promise(function(resolve,reject){
//         document.write("Calculating results...... ")
//         if(score>49)
//         resolve("Congratulation! You have passed. ")
//         else
//         reject("You have failled. ")
//     })
// }
// let grade = function(response){
//     return new Promise(function(resolve,reject){
//         document.write(" <br> Calculating Grade..... ")
//         resolve("<br>You got A. " + response)
//     })
// }
//  results(80).then(response =>{
//     document.write(" <br> Results received. ")
//     return grade(response)
//  }).then(finalGrade =>{
//     document.write(finalGrade)
//  })

// async function calculateGrade(){
//     try
//     {
//         const response = await results(50)
//         document.write("<br>Results received. ")
//         const finalGrade = await grade(response)
//         document.write(finalGrade)
//     }catch (error)
//     {
//         document.write(error)
//     }
// }

// calculateGrade();
