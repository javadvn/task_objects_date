// // TASK_1
// class Student {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = junior;
//   }
//   setTechnologies(technologies) {
//     this.technologies = [
//       ...this.technologies,
//       ...technologies,
//     ];
//   }

//   setNewStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

// // TASK_3
// class CarService {
//   static DefaultWorkingHours = {
//     from:'9:00',
//     till:'20:00',
//   }
//   constructor(name, workingHours = CarService.DefaultWorkingHours){
//     this.name = name;
//     this.workingHours = workingHours;
//   }
//   repairCar (carName){
//     if (!carName){
//       console.error("You need to specify the name of the car in order to repair it")
//       return;      
//     }
//     const currentHour = new Date().getHours();
//     const serviceFromHour = Number(this.workingHours.from.split(':')[0]);
//     const serviceTillHour = Number(this.workingHours.till.split(':')[0]);

//     if (currentHour < serviceFromHour || currentHour >= serviceTillHour) {
//       console.log("Unfortunately, we are closed now. Come back tomorrow");
//     } else {
//       console.log(`Now we will repair your car ${carName}! Please wait`);
//     }
//   }
// }

// const carService = new CarService('RepairCarNow', { from: '90:00', till: '20:00' });
// carService.repairCar('BMW');


class Dictionary {
  constructor (name){
    this.name = name;
    this.words ={};

  }
  add(word, description){
    if(!this.words[word]){
    this.words[word] = {
      word: 'word',
      description:'description'
      }
    }
  }
  remove(word){
    if (this.words[word]) {
      delete this.words[word];
    }
  }
  get(word){
    if (this.words[word]) {
      return this.words[word];
    }

  }
  showAllWords(){
    for (const word in this.words) {
      console.log(`${word} - ${this.words[word].description}`);
    }
  }
}

const dictionary = new Dictionary('Explanatory Dictionary');
dictionary. add('JavaScript', 'popular programming language');
dictionary.add('Web developer', 'A person who creates new services and sites or maintains and supplements existing ones');

dictionary.remove('JavaScript');
dictionary.showAllWords();


