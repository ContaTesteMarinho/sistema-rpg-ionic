import { Attributes } from "../utils/Attributes";
import { SkillDTO } from "./skill.dto";

export interface RacesDTO {
    id: string;
    name: string;
    attributes: Attributes;
    bonus: string;
    commonClasses: string;
    raceSkill: SkillDTO;
}