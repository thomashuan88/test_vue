// define a interface, for person object, use <export> 
export interface PersonInter {
    id: string
    name: string
    age: number
    x?: number  // optional
}

// self define type
export type Persons = Array<PersonInter>