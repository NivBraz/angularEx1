import {Actor} from "./actor";

export class Movie {
    public name: string;
    public genres: string;
    public type: string;
    public date: string;
    public year: number;
    public actor: [Actor];
}
