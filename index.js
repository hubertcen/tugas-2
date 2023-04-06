// Nomor 1
let str =
  'author: "John Red Doe",' +
  '\ntitle: "Mr.RED has a red and a green car",' +
  '\nimages: { \n url: "https://dummy.com/red-image.jpg", \n}';
let newStr = str.replaceAll("red", "blue");
console.log(newStr);

// Nomor 2
function calculateTotalSalary(obj){
  let totalSalary = 0;

  if(Array.isArray(obj)){
    obj.forEach(element)=>{
      if(Array.isArray(element) || typeof element == "object"){
        totalSalary += calculateTotalSalary(element);
      }
    };
  } else if(typeof obj == "object"){
    for(const prop in obj){
      if(Array.isArray(obj[prop] || typeof obj[prop] == "object")){
        totalSalary += calculateTotalSalary(obj[prop]);
      } else if(prop == "salary"){
        totalSalary += obj[prop];
      }
    }
  }
  return totalSalary;
}

// Nomor 3
const urls = [
  "https://www.boredapi.com/api/activity",
  "https://www.boredapis.com/api/activity",
  "https://www.boredapis2.com/api/activity",
];

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .then((data) => ({ data, url }))
      .catch(() => null)
  )
).then((results) => {
  const validResult = results.find((result) => result?.data?.activity);
  console.log(validResult);
});

// Nomor 4
function example() {
  function dummy() {
    return 2;
  }
  return dummy();
  function dummy() {
    return 5;
  }
}
alert(example());

// Nomor 5
class Car {
  constructor(brand, year, country) {
    this.brand = brand;
    this.year = year;
    this.country = country;
  }
  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
  isMadeInUS() {
    return this.country === "US";
  }
}
const car1 = new Car("Audi", 2008, "Germany");
console.log(car1.brand); // Output: Audi
console.log(car1.calculateAge()); // Output: 15
console.log(car1.isMadeInUS()); // Output: false
