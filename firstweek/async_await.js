/* 

function withdrawMoney(money){
    return new Promise((resolve,reject)=>{
        let balance = 25000;
        if(money <= balance){
            resolve(`The withdraw amount is ${ balance - money}`)
            }
            else{
                reject("Insuffcient balance");
        }

    })
}

async function ATM(x){
    try{
       let result = await withdrawMoney(x);
       console.log(result);
    }
    catch(error){
        console.log(error);
    }

}

ATM(10000);
 */
/* 
function placeOrder(food,price){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
         if(price > 200){
            resolve(`Thank You \nYour order has been placed for ${food}`)
         }
         else{
            reject("payment insufficient : order Rejected");
        }
        },4000);
        })
    }
   
    
    
async function orderFood(x,y){
    try{
    let result = await placeOrder(x,y);
     console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("process completed");
    }
}
orderFood('dosa',100); */

function bookTciket(moviename,tickets){
    return new Promise((resolve,reject)=>{
        let seat = 20;
        setTimeout(()=>{
            if(seat >= tickets){
                 seat = seat - tickets;
                resolve(`Movie name :${moviename}\nNo of tickets booked:${tickets}`);
            }
            else{
                reject("Its housefull");
            }
        },3000);
    })

}

async function bt(a,b){
    try{
        let result = await bookTciket(a,b);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('process completed');
    }
}

bt("screen",5);