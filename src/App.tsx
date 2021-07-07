import React,{useState,useRef} from 'react';
import { Demo } from './components/Demo';
import { Block } from './components/Block';
import "./styles/site.css"
import { Tube } from './components/Tube';
import { IBlockItem } from './interfaces';

const itemSet = [
  {
    id:1,
    color:"blue",
    order:3,
    tube:1
  },
  {
    id:2,
    color:"blue",
    order:2,
    tube:1
  },
  {
    id:3,
    color:"red",
    order:1,
    tube:1
  },
  {
    id:4,
    color:"red",
    order:4,
    tube:1
  },
  {
    id:5,
    color:"red",
    order:3,
    tube:2
  },
  {
    id:6,
    color:"red",
    order:2,
    tube:2
  },
  {
    id:7,
    color:"blue",
    order:1,
    tube:2
  },
  {
    id:8,
    color:"blue",
    order:4,
    tube:2
  },
]

function App() {
  const [elements, setElements] = useState<IBlockItem[]>(JSON.parse(JSON.stringify(itemSet)))
  const moves = useRef<IBlockItem[]>([])

  const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
    const tubeId = Number.parseInt(e.currentTarget.id.slice(-1));
    const blockId = Number.parseInt(e.dataTransfer.getData("text"));
    const block = elements.filter((e) => e.id === blockId)[0];
    const tube = elements.filter(b=> b.tube === tubeId).sort((s,i) => s.order - i.order)
    if(tube.length ===0 || (tube.length < 4 && tube[tube.length-1].color === block?.color)){
      moves.current.push({ ...block })
      const nElements = elements.map(e=> {
        if(e.id===blockId){
          e.tube = tubeId
          e.order = tube.length + 1;
        }
        return e;
      });
      setElements(nElements)
    }
  }

  const reset = () => {
    setElements(JSON.parse(JSON.stringify(itemSet)))
    moves.current = [];
  }

  const undo = () => {
    const lastMove = moves.current.pop();
    const nElements = elements.map(b=> {
      if(b.id === lastMove?.id){
        return lastMove
      }
      return b;
    })
    setElements(nElements)
  }

  let tubes = [];
  for(let i=1; i<=3; i++){
    tubes.push(
    <Tube 
      id={i.toString()} 
      items={elements.filter((t) => t.tube === i)} 
      dropHandler={dropHandler}
    />
    )
  }

  return (
    <div className="container">
      <div className="game-area">{tubes}</div>
      <div className="controls flex-box">
        <button onClick={reset}>sifirla</button>
        <button onClick={undo} disabled={moves.current.length < 1}>geri al</button>
      </div>
    </div>
  );
}

export default App;
