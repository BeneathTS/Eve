import { create } from 'zustand'
import { parse } from "@babel/parser"

export const useAstTree = create((set, get) => ({
    tree: parse(''),
    set: (ast) => set({ tree: ast }),
    update: () => {},
}))

export const useCodeStore  = create((set, get) => ({
    meta: {
        exported: true,
        name: "Component",
        memoized: true,
        props: {
            // propNameId: void 0,
            // anotherPropName: "default Value"
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

    // addProp: (newProp) => set((state) => {
    //     state.meta.props[newProp] = void ''

    //     return ({ meta: {...state.meta } })

    // }),
    // removeProp: (removedProp) => set((state) => {
    //     delete state.meta.props[removedProp]

    //     return ({ meta: {...state.meta } })
    // })
    // content: {},
    // elements: [],
}))