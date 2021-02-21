function cardHider(){
    const cardValue = document.getElementById("cardinput").value;
  if (cardValue.length < 16 ||cardValue.length > 16) {
    document.getElementById("ans").innerText ="credit card number should be 0f 16 digits"
  } else {
    let rvalue = "";
    for (let i = 0; i < cardValue.length; i++) {
      if (i < 12) {
        rvalue += "*";
      } else {
        rvalue += cardValue[i];
      }
    }
    document.getElementById(
      "ans"
    ).innerText = `Your last digits are ${rvalue}`;
    document.getElementById("credit").value = "";
    return rvalue;
  }
}
function potatoChecker(){
    const potatoValue = document.getElementById("potatoinput");
  if (potatoValue.value == "") {
    document.getElementById("ans").innerText ="Please enter a string"
  } else {
    const str = potatoValue.value;
    const rvalue = (str.match(/potato/g) || []).length;
    document.getElementById("ans").innerText = `
    no of potatoes = ${rvalue}
  `;
    potatoValue.value = "";
    return rvalue;
  }
}

function repeatChar(){
    const charValue = document.getElementById("repeatinput");
    if (charValue.value == "") {
        document.getElementById("ans").innerText ="Enter string please"
      } else {
        const result = double(charValue.value);
        document.getElementById("ans").innerText = ` ${result}`;
        charValue.value = "";
      }
}
const double = (v) => {
    let rvalue = "";
    for (let i = 0; i < v.length; i++) {
      rvalue += v[i] + v[i];
    }
    return rvalue;
  };

function saleryChecker(){
    const salery = document.getElementById("saleryinput")
    if ( salery.value == "") {
        document.getElementById("ans").innerText ="Please enter salary amount"
      } else {
        const  saleryValue =  salery.value;
        let HRA;
        let DA;
        if (saleryValue <= 10000) {
          HRA = 20;
          DA = 80;
        } else if (saleryValue<= 20000) {
          HRA = 25;
          DA = 90;
        } else if (saleryValue > 20000) {
          HRA = 30;
          DA = 95;
        }
        const grosssalary =
          Number(saleryValue) + Number((saleryValue * HRA) / 100) + Number((saleryValue * DA) / 100);
        document.getElementById("ans").innerText = `${grosssalary} `;
        salery.value = "";
      }
}

function billCal(){
    const unitvalue = document.getElementById("unitinput").value;
    if ( unitvalue == "" ||  unitvalue < 0) {
        document.getElementById("ans").innerText ="unit shoubld be greater than zero"
      } else {
        let cost;
        if ( unitvalue > 0 &&  unitvalue <= 50) {
          cost = 0.5;
        } else if ( unitvalue > 50 &&  unitvalue <= 150) {
          cost = 0.75;
        } else if ( unitvalue > 150 &&  unitvalue <= 250) {
          cost = 1.2;
        } else {
          cost = 1.5;
        }
        const bill =  unitvalue * cost;
        const sr = (bill * 20) / 100;
        const netbill = bill + sr;
    
        document.getElementById(
          "ans"
        ).innerText = `Total unit =  ${ unitvalue} , cost per unit= ${cost} Rs
        bill =${bill} ,surcharge = ${sr} Rs and net bill = ${netbill} Rs
        `;
      }
}


function multipleChecker(){
const numInput = document.getElementById("multipleinput").value;
if (numInput > 1000) {
    document.getElementById("ans").innerText = "limit should be smaller than 1000"
} else {
  let multi = "";
  let sum = 0;
  for (let x = 0; x < numInput; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
      if (x > 0) {
        multi += "*" + x;
      }
    }
  }

  document.getElementById("ans").innerText = `${multi} and sum =${sum}  
  `;
}
}