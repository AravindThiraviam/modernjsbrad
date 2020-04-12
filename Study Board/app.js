class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${firstName} ${lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
}
const maggie = new Person("Maggie", "Murugan", "3-4-1996");
maggie.getsMarried("Aravind");

console.log(maggie);
