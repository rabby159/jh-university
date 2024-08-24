import { Types } from "mongoose"

export type TPreRequisiteCourses = {
    course : Types.ObjectId;
    isDeleted : boolean;

}

export type TCourse = {
    tittle : string;
    prefix : string;
    code : number;
    credits : number;
    // isDeleted : boolean,
    c : [];
}