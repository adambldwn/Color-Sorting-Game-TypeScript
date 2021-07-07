import React from 'react'
import { IBlockItem } from '../interfaces'

interface IProps {
    blockData: IBlockItem;
    draggable: boolean;
}

export const Block: React.FC<IProps> = ({blockData,draggable}) => {

    const dragStart = (e:React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text", e.currentTarget.id)
        
    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        
    }

    return (
        <div 
            id={blockData.id.toString()} 
            draggable={draggable}
            onDragStart={dragStart}
            onDrop={dropHandler}
            className={`block box-${blockData.color} border-white`}
        >
            {blockData.id} - {blockData.order}
        </div>
    )
}
