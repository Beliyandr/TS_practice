const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
  console.log(response);

  const data = JSON.parse(response);
  console.log(data);

  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res: number = fetchCurr(currRate) * amount * commission;
    console.log(res);
    // Или запись в элемент на странице вместо консоли
  } else {
    console.log("Сейчас обмен недоступен");
  }
}

transferEurToUsd(true, 500, 1.05);
let a = fetchCurr("500");
console.log(a);
