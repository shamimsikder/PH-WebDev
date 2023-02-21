class Developer {
    constructor(name, location) {
      this.name = name;
      this.position = "Front-end Web Developer";
      this.team = "Development Team";
      this.location = location;
    }
  
    officeTime(time) {
      console.log(`Office time from ${time}`);
    }
  
    createQuiz(module) {
      console.log(`Create quiz for module ${module}`);
    }
  }
  

class TeamMember extends Developer {
    tech = "HTML5, CSS3, React.js";

    constructor(name, location) {
        super(name, location);
    }

    developeFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }

    release(version) {
        console.log(`Release the software version ${version}`);
    }
}

const abc = new TeamMember("abc", "Dhaka");

console.log(abc)

abc.officeTime("9:00 AM")
abc.createQuiz(32)
abc.developeFeature("abcd")
abc.release(3.0)
