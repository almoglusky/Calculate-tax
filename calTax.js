  const calTax = (salary) => {

    const step1 = 629;
    const step2 = 383.46;
    const step3 = 1091.8;
    const step4 = 1751.19;
    const step5 = 7619.15;
    const step6 = 5667.73;
    
    
      if (salary <= 6290){
        return salary * 0.1
      }
       else if(salary > 6290 && salary <= 9030){
        return (salary-6290)*0.14 + step1;
      }
      else if (salary > 9031 && salary <= 14490){
        return (salary - 9030)*0.2 + step1 + step2;
      }
      else if (salary > 14491 && salary <= 20140){
        return (salary - 14490)*0.31 + step1 + step2 + step3;
      }
      else if (salary > 20141 && salary <= 41910){
        return (salary - 20140)*0.35 + step1 + step2 + step3 + step4;
      }
      else if (salary > 41911 && salary <= 53970){
        return (salary - 41910)*0.47 + step1 + step2 + step3 + step4 + step5;
      }
      else if(salary > 53971){
        return (salary - 53971)*0.5 + step1 + step2 + step3 + step4 + step5 + step6;
      }
    }
    module.exports = calTax;