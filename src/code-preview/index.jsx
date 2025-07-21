// import { useRef, useEffect, useState } from 'react'
import { useAstTree } from '../__data__/store'
import Editor from '@monaco-editor/react'
import { parse } from "@babel/parser"
import { prettyPrint as render } from "recast";

export const CodePreview = () => {
    const ast = useAstTree()
    // const handleChange = (value) => setCode(value)

    const handleDrop = (event) => {
        event.preventDefault()

        Array.from(event.dataTransfer.items).forEach(async(item) => {
            if (item.kind === "file") {
                const file = item.getAsFile()

                if (/\.(js|jsx)$/.test(file.name)) {
                   const astTree = parse(await file.text(), {
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

                    ast.set(astTree)
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
                    readOnly: true,
                    minimap: { enabled: false }
                }}
                value={render(ast.tree, { tabWidth: 4, range: true }).code}
            />
        </div>
    )
}

