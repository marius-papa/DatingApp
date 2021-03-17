import { Photo } from "./Photo";

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    created: Date;
    lastActive: Date;
    knownAs: string;
    gender: string;
    introduction: string;
    lookingFor: string;
    interest: string;
    city: string;
    country: string;
    photo: Photo[];
}

