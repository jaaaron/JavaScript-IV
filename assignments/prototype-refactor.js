/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  class GameObject {
    constructor(createdAt, name, dimensions) {
        this.createdAt = createdAt;
        this.name = name;
        this.dimensions = dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
      }
  }
 /*
   === CharacterStats ===
   * healthPoints
   * takeDamage() // prototype method -> returns the string '<object name> took damage.'
   * should inherit destroy() from GameObject's prototype
 */
  class CharacterStats extends GameObject {
      constructor(sign) {
          super(sign)
          this.healthPoints = sign.healthPoints
      }
      takeDamage() {
          return `${this.name} took damage.`
      }
  }
  
 /*
   === Humanoid (Having an appearance or character resembling that of a human.) ===
   * team
   * weapons
   * language
   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
   * should inherit destroy() from GameObject through CharacterStats
   * should inherit takeDamage() from CharacterStats
 */
class Humanoid extends CharacterStats {
    constructor(sign) {
        super(sign);
        this.team = sign.team;
        this.weapons = sign.weapons;
        this.language = sign.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}
 //  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   // * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   // * Instances of CharacterStats should have all of the same properties as GameObject.
 
 
 // Test you work by un-commenting these 3 objects and the list of console logs below:
 
 
   const mage = new Humanoid({
     createdAt: new Date(),
     dimensions: {
       length: 2,
       width: 1,
       height: 1,
     },
     healthPoints: 5,
     name: 'Bruce',
     team: 'Mage Guild',
     weapons: [
       'Staff of Shamalama',
     ],
     language: 'Common Tongue',
   });
 
   const swordsman = new Humanoid({
     createdAt: new Date(),
     dimensions: {
       length: 2,
       width: 2,
       height: 2,
     },
     healthPoints: 15,
     name: 'Sir Mustachio',
     team: 'The Round Table',
     weapons: [
       'Giant Sword',
       'Shield',
     ],
     language: 'Common Tongue',
   });
 
   const archer = new Humanoid({
     createdAt: new Date(),
     dimensions: {
       length: 1,
       width: 2,
       height: 4,
     },
     healthPoints: 10,
     name: 'Lilith',
     team: 'Forest Kingdom',
     weapons: [
       'Bow',
       'Dagger',
     ],
     language: 'Elvish',
   });
 
   console.log(mage.createdAt); // Today's date
   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
   console.log(swordsman.healthPoints); // 15
   console.log(mage.name); // Bruce
   console.log(swordsman.team); // The Round Table
   console.log(mage.weapons); // Staff of Shamalama
   console.log(archer.language); // Elvish
   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
   console.log(mage.takeDamage()); // Bruce took damage.
   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
 
 
   // Stretch task: 
   // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
   // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
   // * Create two new objects, one a villain and one a hero and fight it out with methods!
const villain = new Humanoid(1)
const hero = new Humanoid(1)

const Villain = new Humanoid ({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 3,
  },
  healthPoints: 125,
  name: 'Dr Evil',
  team: 'Axis',
  weapons: [
    'Double End Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const Hero = new Humanoid ({
  createdAt: new Date(),
  dimensions: {
    length: 2.5,
    width: 2.5,
    height: 2.9,
  },
  healthPoints: 100,
  name: 'Hero',
  team: 'Allies',
  weapons: [
    'Hero Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

GameObject.prototype.attack1 = function() {
  return `${this.name} has started to attacked.`;
}
GameObject.prototype.defend1 = function() {
  return `${this.name} has defended an attack.`;
}

/* Simulated Fight between Villain & Hero */
console.log(Villain.attack1())
console.log(Hero.defend1())
console.log(Villain.healthPoints)
console.log(Hero.healthPoints)