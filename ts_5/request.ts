// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

type Animal = "cat" | "dog" | "bird";

interface Request {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface Response1 {
  status: "available";
  data: {
    animal: Animal;
    breed: string;
    sterilized?: string;
    location: string;
    age?: number;
  };
}

interface Response2 {
  status: "not available";
  data: {
    message: string;
    nextUpdateIn: Date;
  };
}

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

function checkAnimalData(animal: Response1 | Response2) {
  if (animal.status === "available") {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

const anim = {
  status: "available",
  data: {
    animal: "cat",
    breed: "sdf",
    sterilized: "sdf",
    location: "UK",
    age: 15,
  },
};

checkAnimalData(anim);
