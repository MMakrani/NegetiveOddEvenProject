
const calculateTemp= () =>{
    const numberTemp = parseInt(document.getElementById("temp").value);
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    const NegNum =(Neg)=>{
        Neg;
       if(Neg<0){
     Neg= Neg + " "+ " Enter A Positive Number";
       }else if(Neg==0){
      Neg =  Neg + " "+ " Neither Its Positive Nor Negative";
       }else{
        Neg=Neg + " " + " Its a Positive Number";
       }
    return Neg;
        }
        
        
    const OddNum = (num) =>{
            if(num %2!== 0 && num > 0){
        
        let OddNextNum = `${num+2} , ${num+4} , ${num+6}`;
        return OddNextNum;
        }else{
        return "Please enter odd number or greater than zero"
        }
    }
    const EvenNum = (num) =>{
            if(num%2==0 && num > 0){
        let evenNextNum = `${num+2} , ${num+4} , ${num+6}`;
        return evenNextNum;	
        }else{
        return "Please enter even number and greater than zero"
        }
        
        
    }
    let result ; 
     if(valueTemp == 'Neg'){
    result = NegNum(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${ result}   `;
    
    }else if (valueTemp == 'Odd'){
        result = OddNum(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}`;
    }else{
        result = EvenNum(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}`;
    }
    
    
    }