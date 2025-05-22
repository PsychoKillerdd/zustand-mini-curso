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
    addBear: () => void,
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
  increaseBlackBear: (by: number) => set((state: BearState) => ({ blackBears: state.blackBears + by })),
  increasePolarBear: (by: number) => set((state: BearState) => ({ polarBears: state.polarBears + by })),
  increasePandaBear: (by: number) => set((state: BearState) => ({ pandaBears: state.pandaBears + by })),
  clearBears: () => set({ bears: [] }),
  addBear: () => set((state: BearState) => ({ bears: [...state.bears,{id:state.bears.length+1,name:`Oso #${state.bears.length+1}`}] })),
}))