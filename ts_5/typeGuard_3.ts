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

interface ComplexVehicle {
  name: "car" | "ship" | "airplane";
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

const car: ComplexVehicle = {
  name: "car",
  engine: "V8",
};

type Vehicle = Car | Ship | Airplane;

function repairVehicle(vehicle: ComplexVehicle): void {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels! * 2);
      break;

    case "ship":
      console.log(vehicle.sail);
      break;

    case "airplane":
      console.log(vehicle.wings);
      break;

    default:
      // const smth: never = vehicle;
      console.log("Ouuuuups");
  }
}

function isCar(car: Vehicle): car is Car {
  return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}

repairVehicle(car);
