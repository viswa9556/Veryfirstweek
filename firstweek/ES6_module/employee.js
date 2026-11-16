
// export 

export let cname = "NovaStrid";

export function employeeDetails(name,age,department){
   return `name : ${name}
   age : ${age}
   department : ${department}`
}
export function calculateSalary(basic,bonus){
    let salary;
    salary = basic + bonus;
    return(salary);
}

export function checkExperience(x){
    if(x >= 3){
        return "experience";
    }
        else{
            return "fresher";
        }
    }
