import React from 'react'

interface IProps {
    id: number;
    color: string
}

export const Block: React.FC<IProps> = ({id,color}) => {

    const dragStart = (e:React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text", e.currentTarget.id)
    }

    return (
        <div 
            id={id.toString()} 
            draggable 
            onDragStart={dragStart} 
            className={`block box-${color} border-white`}
        ></div>
    )
}
