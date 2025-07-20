import { useReactFlow, Panel } from '@xyflow/react';
import styles from './nodes-list.module.css'

import { nodeTypes } from '../nodes'

export const NodesList = () => {
    const reactFlow = useReactFlow()

    const handleClick = (id) => () => {
        reactFlow.addNodes({
            id: id,
            type: id,
            position: {x: 0, y: 0},
            data: {}
        })
    }

    return (
        <Panel position="top-left" className={styles.wrapper}>
            <ul>
                {Object.keys(nodeTypes).map((nodeName) => (
                    <li className={styles.item} onClick={handleClick(nodeName)}>{nodeName}</li>
                ))}
            </ul>
        </Panel>
    )
}
