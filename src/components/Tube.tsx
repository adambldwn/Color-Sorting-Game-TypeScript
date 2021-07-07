import React from 'react'
import { Block } from './Block'

interface IProps {
    items:[]
}

export const Tube = () => {
    return (
        <div className="tube">
            <Block id={13} color="red"/>
            <Block id={14} color="blue"/>
            <Block id={15} color="blue"/>
            <Block id={16} color="red"/>
        </div>
    )
}
