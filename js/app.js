let price = 0;
let time = "";
let service = "";
const openTime = 8;

let userName = prompt("Ingrese su nombre y apellido");
let phoneNumber = prompt("Ingrese su número de teléfono");
let option = Number(prompt(`1. Corte de pelo ($1.500)
2. Corte de barba ($1.000)
3. Corte de pelo y barba ($2.000)
4. Tintura ($4.000)
`));

switch(option){
  case 1:
    price = 1500;
    time = "40 minutos";
    service = "Corte de pelo";
    break;
  case 2:
    price = 1000;
    time = "20 minutos";
    service = "Corte de barba";
    break;
  case 3:
    price = 2000;
    time = "1 hora";
    service = "Corte de pelo y barba";
    break;
  case 4:
    price = 4000;
    time = "2 horas";
    service = "Tintura";
    break;
}

let availableTurns = "";
let startTime = 8;
let endTime = 8;
let count = 1;
for(let i = 1; i <= openTime; i++){

  let halfHour = "00";
  let secondHalfHour = "30";
  
  for(let c = 0; c < 2; c++){

    if(c == 1){
      endTime++;
    }
    
    availableTurns += `${count}. ${createTurn(startTime, endTime, halfHour, secondHalfHour)}
`;

    halfHour = "30";
    secondHalfHour = "00";
    count++;
  
  }

  startTime++;
  
}

let turnOption = parseInt(prompt(availableTurns));
let turntText = "";

switch(turnOption){
  case 1:
    turntText = `De 08:00 a 08:30`;
    break;
  case 2:
    turntText = `De 08:30 a 09:00`;
    break;
  case 3:
    turntText = `De 09:00 a 09:30`;
    break;
  case 4:
    turntText = `De 09:30 a 10:00`;
    break;
  case 5:
    turntText = `De 10:00 a 10:30`;
    break;
  case 6:
    turntText = `De 10:30 a 11:00`;
    break;
  case 7:
    turntText = `De 11:00 a 11:30`;
    break;
  case 8:
    turntText = `De 11:30 a 12:00`;
    break;
  case 9:
    turntText = `De 12:00 a 12:30`;
    break;
  case 10:
    turntText = `De 12:30 a 13:00`;
    break;
  case 11:
    turntText = `De 13:00 a 13:30`;
    break;
  case 12:
    turntText = `De 13:30 a 14:00`;
    break;
  case 13:
    turntText = `De 14:00 a 14:30`;
    break;
  case 14:
    turntText = `De 14:30 a 15:00`;
    break;
  case 15:
    turntText = `De 15:00 a 15:30`;
    break;
  case 16:
    turntText = `De 15:30 a 16:00`;
    break;
}
console.log(turntText);
let turnConfirmation = prompt(`¡Hola ${userName}! 
-Información sobre su turno-

Has elegido: ${service}
Horario elegido: ${turntText}
Duración aproximadamente de: ${time}
Precio: $${parseFloat(price)}

¿Desea confirmarlo?
(OK) para confirmar
(NO) para salir`);

while(turnConfirmation != "OK" || turnConfirmation != "NO"){

  if(turnConfirmation == "OK"){

  alert(`¡Has solicitado un turno en Peluquería!
  Muchas gracias`);

  }else if(turnConfirmation == "NO"){

  alert(`¡Que pena que no hayas decidido solicitar un turno. Hasta la próxima!`);

  }else{

    turnConfirmation = prompt(`¿Desea confirmar su turno?
    (OK) para confirmar
    (NO) para salir`);

    continue;
    
  }

  break;

}

function createTurn(hour, hour2, firstMinute, secondMinute){

  return `De ${hour}:${firstMinute} a ${hour2}:${secondMinute}`;

}