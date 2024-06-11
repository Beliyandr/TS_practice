// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

type Animal = "cat" | "dog" | "bird";

enum AvailableStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
  status: AvailableStatus.Available;
  data: AnimalAvailableData;
}
interface AnimalNotAvailableResponse {
  status: AvailableStatus.NotAvailable;
  data: AnimalNotAvailableData;
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

function isAvailable(
  res: AnimalAvailableResponse | AnimalNotAvailableResponse
): res is AnimalAvailableResponse {
  if (res.status === AvailableStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(
  animal: AnimalAvailableResponse | AnimalNotAvailableResponse
): AnimalData | string {
  if (animal.status === AvailableStatus.Available) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
