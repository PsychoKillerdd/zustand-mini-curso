import { create } from 'zustand'
interface Bear {
  name: string,
  id:number,

}
interface BearState {
    blackBears: number,
    polarBears: number,
    pandaBears: number,

    bears: Bear[],

    computed: {
        totalBears:number,
    },

    increaseBlackBear: (by: number) => void,
    increasePolarBear: (by: number) => void,
    increasePandaBear: (by: number) => void,

    doNothing: () => void,
    addBear: (bear: Bear) => void,
    clearBears: () => void,
}




export const useBearStore = create<BearState>((set,get) => ({
// Initial state
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    bears: [{id:1,name:'Oso #1'}],
// Actions
  computed:{
    get totalBears():number{
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
    }
  },
  doNothing: () => set(state => ({bears:[...state.bears]})),
  increaseBlackBear: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBear: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBear: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
  clearBears: () => set(state => ({ bears: [] })),
  addBear: () => set((state) => ({ bears: [...state.bears,{id:state.bears.length+1,name:`Oso #${state.bears.length+1}`}] })),
}))