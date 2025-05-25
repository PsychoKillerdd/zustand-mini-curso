import { create } from "zustand";
import { persist, StateStorage } from "zustand/middleware";

interface PersonState {
    firstName:string;
    lastName:string;
}
interface Actions {
    setFirstName:(value:string) => void;
    setLastName:(value:string) => void;
}
export const usePersonStore = create<PersonState & Actions>()(
        //impieza persist
        persist(
            //set 
        (set) => ({
        firstName:'',
        lastName:'',
        //set
        setFirstName: (value:string) => set(state => ({firstName:value})),
        setLastName: (value:string) => set(state => ({lastName:value})),
        })//termina set
        ,
        {
            name:'person-storage',
        })
    //termina persist


);//fin del create