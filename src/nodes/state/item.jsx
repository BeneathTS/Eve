import { useState, memo, useRef, useEffect } from "react"
import { Handle, Position  } from "@xyflow/react"

export const Item = memo(({
    label: initialLabel = 'stateeee'
}) => {
    const [label, setLabel] = useState(initialLabel)
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [editMode])

    const toggleEditMode = () => {
        setEditMode(true)
    }

    const renderLabel = () => !editMode
        ?
            <p onDoubleClick={toggleEditMode} style={{ cursor: "text", margin: 0 }}>
                {label}
            </p>
            
        : <input ref={inputRef} value={label} onChange={(event) => { setLabel(event.target.value)} } onKeyDown={(event) => { if (event.key === 'Enter') setEditMode(false)}}/>
            

    return(
    <div style={{ position: "relative", display: 'flex' }}>
            <div style={{ position: "relative" }}>
        <div style={{ position: "relative"}}>
            <p>{'update'}</p>
            <Handle type="target" position="left" style={{ left: "-8px" }} id={label+'in'} />
        </div>
        <div style={{ position: "relative"}}>
            <p>{'initial'}</p>
            <Handle type="target" position="left" style={{ left: "-8px" }} id={label+'default'}/>
        </div>
            </div>
        <div style={{ position: "relative", borderLeft: "1px solid"}}>
            {renderLabel()}
            <Handle type="source" position="right" style={{ right: "-8px" }} id={label}/>
        </div>
    </div>
    )
})
