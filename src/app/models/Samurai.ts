import { Clan } from "./Clan";
import { War } from "./War";
import { Armour } from "./Armour";
import { Horse } from "./Horse";
import { Weapon } from "./Weapon";
export class Samurai {
    samuraiId?: number = 0;
    samuraiName?: string = "";
    description?: string = "";
    age?: number = 0;
    clan?: Clan; // Representing the Clan relationship
    war?: War[]; // Representing the Wars relationship
    armour?: Armour[]; // Representing the Armour relationship
    horse?: Horse[]; // Representing the Horse relationship
    weapon?: Weapon[]; // Representing the Weapon relationship
    
}
