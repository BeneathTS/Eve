import { useState, memo, useRef, useEffect } from "react"

import styles from './editable-label.module.css'

export const EditableLabel = memo(({
    label: initialLabel,
    onEdit,
    onAccept,
    onMount,
}) => {
    const [label, setLabel] = useState(initialLabel)
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef(null)
    let prevLabel

    useEffect(() => {
        onMount(initialLabel)
    }, [])

    useEffect(() => {
        inputRef.current?.focus()
    }, [editMode])

    const handleDoubleClick = () => {
        setEditMode(true)
    }

    const onKeyDown = (event) => {
        switch (event.key) {
            case "Enter":
                setEditMode(false)
                onAccept(label)
                break

            case "Escape":
                setEditMode(false)
                setLabel(prevLabel)
        }
    }

    const handleFocus = () => {
        prevLabel = label
        onEdit(label)
    }

    const handleBlur = () => {
        setEditMode(false)
        onAccept(label)
    }

    const handleChange = ({ target }) => {
        setLabel(target.value)
    } 

    if (editMode) {
        return (
            <input
                size=''
                ref={inputRef}
                value={label}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={onKeyDown}
                className={styles.input}
            />
        )
    }

    return (
        <p
            onDoubleClick={handleDoubleClick}
            className={styles.label}
        >
            {label}
        </p>
    )
})
