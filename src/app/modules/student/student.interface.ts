import { } from 'mongoose';

export type Guardians = {
    fatherName : string;
    fatherOccupation : string;
    motherName : string;
    motherOccupation : string;
}

export type UserName = {
    firstName : string;
    middleName : string;
    lastName : string;
}


export type Student = {
    id : string;
    name: UserName;
    gender : 'male' | 'female';
    dateOfBirth? : string;
    email: string;
    contactNo : string;
    bloodGroup? : "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress : string;
    permanentAddress : string;
    guardians : Guardians;
    profileImg? : string;
    isActive : 'active' | 'irregular';
  }