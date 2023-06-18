//Challenge 3: Net Salary Calculator (Toy Problem)
// Declaring variables globally so that they can be accessed through out the program

let basic_pay;
let gross_pay;
let total_deductions;
let net_pay;
let payee;
let NHIFDeductions;
let NSSFDeductions;
let bp;

//Declaring function with one parameter(basic_pay) that will accept one argument passed to it during function call
function payeeCalculator(basic_pay){

    bp=basic_pay;
    if(basic_pay <= 24000 ){
        payee=basic_pay*0.1;
         return payee;
         
         
      
    }
    
    else if(basic_pay >= 24001 && basic_pay <= 32333 ){
        payee=basic_pay*0.25;
        return payee;
        
    }
    
    else {
        payee=basic_pay*0.3;
        return payee;
        
    }


    
    } 

    function nhifCalculator(gross_pay){
        gp=gross_pay;
        if(gross_pay <= 5999 ){          
            NHIFDeductions=150;
         return NHIFDeductions;
           
        }
        
        else if(gross_pay >= 6000 && gross_pay <= 7999 ){   
            gp=gross_pay;
            NHIFDeductions=300;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 8000 && gross_pay <= 11999 ){   
            gp=gross_pay;
            NHIFDeductions=400;
            return NHIFDeductions;
            
            
        }

        else if(gross_pay >= 12000 && gross_pay <= 14999 ){ 
            gp=gross_pay;    
            NHIFDeductions=500;
         return NHIFDeductions;
           
           
        }

        else if(gross_pay >= 15000 && gross_pay <= 19999 ){
            gp=gross_pay;
            NHIFDeductions=600;
         return NHIFDeductions;
           
           
        }

        else if(gross_pay >= 20000 && gross_pay <= 24999 ){
            gp=gross_pay;
            NHIFDeductions=750;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 25000 && gross_pay <= 29999 ){
            gp=gross_pay;
            NHIFDeductions=850;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 30000 && gross_pay <= 34999 ){
            gp=gross_pay;
            NHIFDeductions=900;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 35000 && gross_pay <= 39999 ){
            gp=gross_pay;
            NHIFDeductions=950;
            return NHIFDeductions;
           
           
        }

        else if(gross_pay >= 40000 && gross_pay <= 44999 ){   
            gp=gross_pay;     
            NHIFDeductions=1000;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 45000 && gross_pay <= 49999 ){
            gp=gross_pay;
            NHIFDeductions=1100;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 50000 && gross_pay <= 59999 ){
            gp=gross_pay;
            NHIFDeductions=1200;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 60000 && gross_pay <= 69999 ){
            gp=gross_pay;
            NHIFDeductions=1300;
            return NHIFDeductions;
            
            
        }

        else if(gross_pay >= 70000 && gross_pay <= 79999 ){
            gp=gross_pay;
            NHIFDeductions=1400;
            return NHIFDeductions;
          
            
        }

        else if(gross_pay >= 80000 && gross_pay <= 89999 ){
            gp=gross_pay;
            NHIFDeductions=1500;
            return NHIFDeductions;
           
            
        }

        else if(gross_pay >= 90000 && gross_pay <= 99999 ){
            gp=gross_pay;
            NHIFDeductions=1600;
            return NHIFDeductions;
          
            
        }
        
        else {
            gp=gross_pay;
            NHIFDeductions=1700;
            return NHIFDeductions;
          
            
        }
        
        } 
    
    
        payeeCalculator(30000);//calling payeeCalculator function and passing basic pay value to it

        nhifCalculator(bp+(0.06*bp));//calling nhifCalculator function and passing gross pay value to it
    

        gross_pay=gp
        total_deductions=payee+NHIFDeductions+(0.12*bp)
        net_pay=gross_pay-total_deductions
        console.log("PAYROLL")
        console.log(`BASIC PAY = ${bp} ,BENEFITS = ${0.06*bp},GROSS PAY = ${gp},PAYE = ${payee},NHIF = ${NHIFDeductions},NSSF = ${0.12*bp} ,TD = ${total_deductions},NET PAY = ${net_pay}`)