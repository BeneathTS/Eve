import { useState } from "react"

import styles from './props.module.css'

import { useCodeStore } from '../../__data__/store'
import { NodeWrapper, NodeHeading } from "../components"

import { Item } from "./item"

export const PropsNode = ({
    id,
    // data
}) => {
    const [children, setChildren] = useState([])

    const store = useCodeStore()

    const handleMount = (propName) => store.addProp(propName)
    const handleAccept = (propName) => store.addProp(propName.trim())
    const handleEdit = (propName) => store.removeProp(propName)

    const onClick = () => {
        setChildren((prev) => [
            ...prev,
            <Item
                label={`prop_${prev.length +1}`}
                onMount={handleMount}
                onAccept={handleAccept}
                onEdit={handleEdit}
            />
        ])
    }

    return (
        <NodeWrapper className={styles.nodeWrapper}>
            <NodeHeading id={id} onClick={onClick} />
            <ul>
               {children}
            </ul>
        </NodeWrapper>
    )
}
