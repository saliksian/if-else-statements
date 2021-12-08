function Salary() {
  var dom = document;
  var salary = dom.getElementById("sal");
  

  

  var basicsalary = parseInt(salary.value);
  var HRA =0;
  var DA =0;
  var grossSalary;


  

  var result = dom.getElementById("result");
  // console.log(char1.length);
  
  if (basicsalary<=10000) {
    HRA = basicsalary*0.2;
    DA = basicsalary*0.8;

    grossSalary = basicsalary+HRA+DA;
    result.innerHTML = `Gross Salary: ${grossSalary}`
    
  }
  else if (basicsalary>10000 && basicsalary <= 20000) {
    HRA = basicsalary*0.25;
    DA = basicsalary*0.9;

    grossSalary = basicsalary+HRA+DA;
    result.innerHTML = `Gross Salary: ${grossSalary}`
    
  }
  else if (basicsalary>20000 ) {
    HRA = basicsalary*0.3;
    DA = basicsalary*0.95;

    grossSalary = basicsalary+HRA+DA;
    result.innerHTML = `Gross Salary: ${grossSalary}`
    
  }
 

  salary.value = "";
 
}
 


