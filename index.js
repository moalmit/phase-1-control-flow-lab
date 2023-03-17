function scuberGreetingForFeet(ride){
  // Write your code here!

  let message;
  if (ride <= 400){
    message = "This one is on me!";
  }

  else if (ride > 400 && ride < 2000){
    message = 'That will be twenty bucks.';
  }

  else if (ride >= 2000 && ride <= 2500){
    message = "I will gladly take your thirty bucks.";
  }

  else 
    message = "No can do.";

  return message
  }


  scuberGreetingForFeet(2501);




  

function ternaryCheckCity(city){
  // Write your code here!

return city === 'NYC' ? "Ok, sounds good." : 'No go.';

}

ternaryCheckCity('NYC');



function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;

  switch (tip) {

    case 'generous':
      message = "Thank you so much."
        break;

    case  'not as generous':
      message = "Thank you."
        break;

    case 'thanks for everything':
       message = "Bye."
        break; 
  } 
return message
}

switchOnCharmFromTip('generous');