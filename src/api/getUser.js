import Chance from "chance";
const chance = new Chance();
const getUser =() =>{
    return chance.name({ middle: true });

}
export {getUser};