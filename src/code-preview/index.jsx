import { useRef, useEffect, useState } from 'react'
// import { useCodeStore } from '../__data__/store'
import Editor from '@monaco-editor/react'
import { parse } from "@babel/parser"

export const CodePreview = () => {
    const [code, setCode] = useState('')
    // const store = useCodeStore()
    // const handleChange = (value) => setCode(value)

    useEffect(() => {
        parse(code, {
            createImportExpressions: true,
            allowImportExportEverywhere: true,
            sourceType: "module",
            plugins: [
                "jsx",
                // "typescript",
                "throwExpressions",
            ],
            errorRecovery: true,
        })
    }, [code])

    const handleDrop = (event) => {
        event.preventDefault()

        Array.from(event.dataTransfer.items).forEach(async(item) => {
            if (item.kind === "file") {
                const file = item.getAsFile()

                if (/\.(js|jsx)$/.test(file.name)) {
                    setCode(await file.text())
                }
            }
        })
    }

    return (
        <div
        onDrop={handleDrop}
        style={{ width: "1000px" }}
        >
            <Editor
                width="100%"
                height="100vh"
                language="javascript"
                theme="vs-dark"
                // onChange={handleChange}
                options={{
                    // readOnly: true,
                    minimap: { enabled: false }
                }}
                value={code}
            />
        </div>
    )
}
