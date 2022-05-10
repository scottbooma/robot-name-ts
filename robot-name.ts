interface IRobot {
  name: string;
  resetName: () => void;
}

export class Robot implements IRobot {
  name: string;
  static usedNames = new Set<string>();
  static releaseNames() {
    this.usedNames.clear();
  }

  resetName() {
    this.name = this.uniqueRandomName;
  }

  constructor() {
    this.name = this.uniqueRandomName;
  }

  private get uniqueRandomName() {
    let newName;
    do {
      newName = this.randomName;
    } while (Robot.usedNames.has(newName));
    Robot.usedNames.add(newName);
    return newName;
  }

  private get randomName() {
    return `${this.twoRandomLetters}${this.threeRandomDigits}`;
  }

  private get twoRandomLetters() {
    const letter1 = this.randomLetter;
    const letter2 = this.randomLetter;
    return `${letter1}${letter2}`;
  }

  private get randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNumber = Math.floor(Math.random() * 26);
    return letters[randomNumber];
  }

  private get threeRandomDigits() {
    return `${this.randomNumber0To9}${this.randomNumber0To9}${this.randomNumber0To9}`;
  }

  private get randomNumber0To9() {
    return Math.floor(Math.random() * 10);
  }
}
