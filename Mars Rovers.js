// Rover Object Goes Here
// ======================
const rover = {
 direction : "N",
 x : 0,
 y : 0 
}
// ======================

function turnLeft(rover){
  switch(rover.direction) {
    case "N" :
      rover.direction = "W";
      break;
    case "W" :
      rover.direction = "S";
      break;
    case "S" :
      rover.direction = "E";
      break;
    case "E" :
      rover.direction = "N"
      break;

  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction) {
    case "N" :
      rover.direction = "E";
      break;
    case "E" :
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "W";
      break;
    case "W" :
      rover.direction = "N";
      break;

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction) {
    case "N" :
      rover.y--;
      break;
    case "E" :
      rover.x++;
      break;
    case "S": 
      rover.y++ ;
      break;
    case "W" :
      rover.x-- ;
      break;
    
      }
  console.log("moveForward was called")
}

function command(theRover,orders) {
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l": 
        turnLeft(theRover);
        break;
      case "r":
        turnRight(theRover);
        break;
      case "f":
        moveForward(theRover);
        break;
    }
}

