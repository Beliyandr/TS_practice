interface Car {
  name: "car";
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  name: "ship";
  engine: string;
  sail: string;
}

interface Airplane {
  name: "airplane";
  engine: string;
  wings: string;
}

interface SuperAirplane {
  name: "smth";
  engine: string;
  wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

// function repairVehicle(vehicle: Vehicle): void {
//   if (isCar(vehicle)) {
//     console.log(vehicle.wheels);
//   } else if (isShip(vehicle)) {
//     console.log(vehicle.sail);
//   } else {
//     vehicle.wings;
//   }
// }

function repairVehicle(vehicle: Vehicle): void {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels);
      break;

    case "ship":
      console.log(vehicle.sail);
      break;

    case "airplane":
      console.log(vehicle.wings);
      break;

    case "smth":
      console.log(vehicle.wings);
      break;

    default:
      const smth: never = vehicle;
      console.log("Ouuuuups");
  }
}

function isCar(car: Vehicle): car is Car {
  return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}
