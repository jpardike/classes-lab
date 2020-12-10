/* 

Instructions

Work with a partner. We might assign you one, but if we don't, choose one that you don't normally sit next to in class.

Create a class definition for each of the real life things listed below. They are purposefully ambiguous.

Come up with properties and methods that make sense.

As you go down the list, some classes might be able to inherit from previous classes you've already written.

Instantiate each class and test it(s methods).

1. Create a class for a person
2. Create a class for a pet
3. Create a class for a boat
4. Create a class for an artist
5. Create a class for a computer
6. Create a class for a robot
7. Create a class for a dog
8. Create a class for a painter
9. Create a class for a car
10. Create a class for a laptop
11. Create a class for a humvee
12. Create a class for a smart phone
13. Create a class for a baby
14. Create a class for a fire truck
15. Create a class for a bird

*/

class Animal {
    constructor(name, age, species, fly, color) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.canFly = fly;
        this.color = color;
    }

    speak(talk) {
        return talk;
    }
}

class People {
    constructor(name, age, town) {
        this.name = name;
        this.age = age;
        this.hometown = town;
    }

    speak(talk) {
        return talk;
    }
}

class Machine {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    makeSound(sound) {
        return sound;
    }
}

////////////////////////////// 1.

class Person extends People {
    constructor(name, age, town) {
        super(name, age, town);
    }
}

const john = new Person('John', 23, 'New York, New York');
console.log(john.speak('Hello Everyone'));
console.log(john);

///////////////////////////// 2.

class Pet extends Animal {
    constructor(name, age, species, fly, color) {
        super(name, age, species, fly, color);
    }
}

const spark = new Pet('Spark', 1, 'Cat', false, 'Orange');

console.log(spark.speak('I love my caring owner!'));
console.log(spark);

///////////////////////////// 3.

class Boat extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
    }
}

const seaSlayer = new Boat('Yamaha', 'Ocean Wayer', 2000, 'Pewter');

console.log(seaSlayer);
console.log(seaSlayer.makeSound('RRRRRROOOOOOMMMMMMPPPPPPFFFFF!!!!'));

//////////////////////////// 4.

class Artist extends People {
    constructor(name, age, town) {
        super(name, age, town);
        this.occupation = 'artist';
    }
}

const samantha = new Artist('Samantha', 31, 'Omaha, Nebraska');

console.log(samantha);
console.log(samantha.speak('What happened to my favorite pencil!'));

//////////////////////////// 5.

class Computer extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
    }
}

const jamiesComputer = new Computer('Dell', 'ACS332', 1999, 'computer grey');

console.log(jamiesComputer);

//////////////////////////// 6.

class Robot extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
    }
}

const hank = new Robot('Honda', 'Hank 2000', 3000, 'transparent blue');

console.log(hank);

//////////////////////////// 7.

class Dog extends Animal {
    constructor(name, age, species, fly, color) {
        super(name, age, species, fly, color);
    }
}

const bones = new Dog('Bones', 7, 'canine', false, 'tan');

console.log(bones);

///////////////////////////// 8.

class Painter extends People {
    constructor(name, age, town) {
        super(name, age, town);
        this.occupation = 'painter';
    }
}

const ashley = new Painter('Ashley', 24, 'Reno, Nevada');

console.log(ashley);

/////////////////////////////// 9.

class Car extends Machine {
    constructor(make, model, year, color, type) {
        super(make, model, year, color);
        this.type = type;
    }
}

const georgesCar = new Car('Y', 'Tesla', 2019, 'white', 'SUV');

console.log(georgesCar);

///////////////////////////// 10.

class Laptop extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
    }
}

const jorgesLaptop = new Laptop('Apple', 'Macbook', 2020, 'aluminum');

console.log(jorgesLaptop);

///////////////////////////// 11.

class Humvee extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
        this.type = 'SUV';
    }
}

const chrissAuto = new Humvee('Jeep', 'Wrangler', 2010, 'red');

console.log(chrissAuto);

////////////////////////////// 12.

class SmartPhone extends Machine {
    constructor(make, model, year, color) {
        super(make, model, year, color);
    }
}

const smartPhone1 = new SmartPhone('LG', 'lPhone', 2016, 'pink');

console.log(smartPhone1);

//////////////////////////////// 13.

class Baby extends People {
    constructor(name, age, town) {
        super(name, age, town);
    }
}

const noah = new Baby('Noah', .5, 'Austin, Texas');
console.log(noah);

///////////////////////////////// 14.

class FireTruck extends Machine {
    constructor(make, model, year) {
        super(make, model, year, 'red');
    }
}

const seattleFireTruck = new FireTruck('Dodge', 'Ram', 2018);

console.log(seattleFireTruck);

//////////////////////////////// 15.

class Bird extends Animal {
    constructor(name, age, color) {
        super(name, age, 'bird', true, color);
    }
}

const brittanysParrot = new Bird('Echo', 3, 'green');

console.log(brittanysParrot);