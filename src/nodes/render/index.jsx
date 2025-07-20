import { useState } from "react"
import { Handle, Position  } from "@xyflow/react"

import { Item} from '../props/item'

import {NodeWrapper} from '../components'

export const RenderNode = ({
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
                <div style={{ position: "relative" }}>
                    <p>{'children'}</p>
                    <Handle type="target" position="left" style={{ left: "-8px" }} id={id+'in'} />
                </div>
            </ul>
        </NodeWrapper>
    )
}
