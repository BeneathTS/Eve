import { memo } from "react"
import { Handle, Position  } from "@xyflow/react"

import styles from './props.module.css'

import { EditableLabel } from "../components"

export const Item = memo(({
    label,
    defaultValue = "test",
    onMount,
    onAccept,
    onEdit

}) => {


    return(
    <li className={styles.itemWrapper}>
        <EditableLabel label={label} onMount={onMount} onAccept={onAccept} onEdit={onEdit} />
        {defaultValue && <p className={styles.defaultValue}>{defaultValue}</p>}
        <Handle type="source" position={Position.Right} style={{ right: "-8px" }} id={label} />
    </li>
    )
})
