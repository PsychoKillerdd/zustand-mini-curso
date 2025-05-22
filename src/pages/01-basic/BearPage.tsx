import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {
  const bears = useBearStore(useShallow(state => state.bears));
  const blackBear = useBearStore(state => state.blackBears);
  const polarBear = useBearStore(state => state.polarBears);
  const pandaBear = useBearStore(state => state.pandaBears);
  const increaseBlackBear = useBearStore(state => state.increaseBlackBear);
  const increasePolarBear = useBearStore(state => state.increasePolarBear);
  const increasePandaBear = useBearStore(state => state.increasePandaBear);
  const doNothing = useBearStore(state => state.doNothing);
  const addBear = useBearStore(state => state.addBear);
  const clearBears = useBearStore(state => state.clearBears);

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <WhiteCard centered>
       
 
    <h2>Osos Negros</h2>
    <div className="flex flex-col md:flex-row">
      <button onClick={() => increaseBlackBear(+1)}> +1</button>
      <span className="text-3xl mx-2 lg:mx-10"> {blackBear} </span>
      <button onClick={() => increaseBlackBear(-1)}>-1</button>
    </div>


        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePolarBear(+1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {polarBear} </span>
            <button onClick={() => increasePolarBear(-1)}>-1</button>

          </div>

        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePandaBear(+1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {pandaBear} </span>
            <button onClick={() => increasePandaBear(-1)}>-1</button>
          </div>

        </WhiteCard>

        <WhiteCard centered>

          <h2>Osos</h2>
          <button onClick={doNothing}>Do Nothing</button>
          <pre>
            { JSON.stringify(bears, null, 2) }
          </pre>
          <button className='mt-2' onClick={() => addBear()}>Add Bear</button>
          <button className='mt-2' onClick={clearBears}>Clear Bears</button>
          
        </WhiteCard>





      </div>
      

    </>
  );
};


