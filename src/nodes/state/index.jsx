import { useState } from "react"
import { Handle, Position  } from "@xyflow/react"

import { Item} from './item'

import {NodeWrapper} from '../components'

export const StateNode = ({
    id,
    data
}) => {
    const [children, setChildren] = useState([])

    const onClick = () => {
        setChildren((prev) => [...prev, <Item />])
    }
    return (
        <NodeWrapper>
            {id}
            <button onClick={onClick}>{'+'}</button>
            <ul>
                <Item />
               {children}
            </ul>
        </NodeWrapper>
    )
}
