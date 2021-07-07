import React from 'react'
import { Block } from './Block'
import {IBlockItem} from "../interfaces"
interface IProps {
    id:string;
    items:IBlockItem[];   //neden burada array isareti koyduk
    dropHandler: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Tube: React.FC<IProps> = ({items,dropHandler,id}) => {
    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const blocks = items
        .sort((s,i) => s.order - i.order)
        .map((i,index,arr) => (<Block key={i.id} blockData={i} draggable={arr.length -1 === index}/>))

    return (
        <div 
            id={`tube${id}`} 
            className="tube" 
            onDragOver={allowDrop} 
            onDrop={dropHandler}
        >
            {blocks}
        </div>
    )
}
