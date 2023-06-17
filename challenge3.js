//Challenge 3: Net Salary Calculator (Toy Problem)

//let basic_pay;
let benefits;
let gross_pay;
let total_deductions;
let net_pay;
let payee;
let NHIFDeductions;
let NSSFDeductions;


function payeeCalculator(basic_pay){


    if(basic_pay <= 24000 ){
         return basic_pay*0.1;
         console.log(basic_pay*0.1)
    }
    
    else if(basic_pay >= 24001 && basic_pay <= 32333 ){
        return basic_pay*0.25;
        console.log(basic_pay*0.25)
    }
    
    else {
        return basic_pay*0.3;
        console.log(basic_pay*0.3)
    }
    
    } 

    function nhifCalculator(gross_pay){

        if(gross_pay <= 5999 ){
            return 150;
            console.log(150)
        }
        
        else if(gross_pay >= 6000 && gross_pay <= 7999 ){
            return 300;
            console.log(300)
            
        }

        else if(gross_pay >= 8000 && gross_pay <= 11999 ){
            return 400;
            console.log(400)
            
        }

        else if(gross_pay >= 12000 && gross_pay <= 14999 ){
            return 500;
            console.log(500)
           
        }

        else if(gross_pay >= 15000 && gross_pay <= 19999 ){
            return 600;
            console.log(600)
           
        }

        else if(gross_pay >= 20000 && gross_pay <= 24999 ){
            return 750;
            console.log(750)
            
        }

        else if(gross_pay >= 25000 && gross_pay <= 29999 ){
            return 850;
            console.log(850)
            
        }

        else if(gross_pay >= 30000 && gross_pay <= 34999 ){
            return 900;
            console.log(900)
            
        }

        else if(gross_pay >= 35000 && gross_pay <= 39999 ){
            return 950;
            console.log(950)
           
        }

        else if(gross_pay >= 40000 && gross_pay <= 44999 ){
            return 1000;
            console.log(1000)
            
        }

        else if(gross_pay >= 45000 && gross_pay <= 49999 ){
            return 1100;
            console.log(1100)
            
        }

        else if(gross_pay >= 50000 && gross_pay <= 59999 ){
            return 1200;
            console.log(1200)
            
        }

        else if(gross_pay >= 60000 && gross_pay <= 69999 ){
            return 1300;
            console.log(1300)
            
        }

        else if(gross_pay >= 70000 && gross_pay <= 79999 ){
            return 1400;
            console.log(1400)
            
        }

        else if(gross_pay >= 80000 && gross_pay <= 89999 ){
            return 1500;
            console.log(1500)
            
        }

        else if(gross_pay >= 90000 && gross_pay <= 99999 ){
            return 1600;
            console.log(1600)
            
        }
        
        else {
            return 17000;
            console.log(1700)
            
        }
        
        } 
    
    
        payeeCalculator(25000);

        //nhifCalculator(65000);
    
        //gross_pay=basic_pay+benefits
        //total_deductions=payee+NHIFDeductions+NSSFDeductions
        //net_pay=gross_pay-total_deductions