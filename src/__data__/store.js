import { create } from 'zustand'

export const useCodeStore  = create((set, get) => ({
    meta: {
        exported: true,
        name: "Component",
        memoized: true,
        // imports: [
        // ],
        props: {
            propNameId: void 0,
            anotherPropName: "default Value"
        },
    },
    body: {
        state: {
            stateName: {
                initialValue: {
                    src: 'test'
                }
            },
            anotherStateName: {
                initialValue: {
                    srcAnchor: "anotherPropName",
                }
            }
        },
        // logicBlocks: {}
    },
    // content: {},
    // elements: [],
}))