import { useRef, useEffect } from 'react'
import { useCodeStore } from '../__data__/store'
import Editor from '@monaco-editor/react'

import { transpile } from './transpiler'

export const CodePreview = () => {
    const store = useCodeStore()
    
    return (
        <Editor
            width="1000px"
            height="100vh"
            language="javascript"
            theme="vs-dark"
            options={{
                readOnly: true,
                minimap: { enabled: false }
            }}
            value={transpile(store)}
        />
    )
}
