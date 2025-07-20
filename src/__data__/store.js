import { create } from 'zustand'

export const useCodeStore  = create((set, get) => ({
    imports: "import React, { memo, useState } from 'react'\n",
    name: "export const Component = memo(({",
    props: {},
    begin: '}) => {',
    state: '',
    logic: '',
    renderStart: 'return (',
    renderBody: '',
    renderEnd: ')',
    end: '})',
    setProps: (newProp) => {
        const { props } = get()

        if (props[newProp]) {
            return 
        }

        set((state) => ({
            props: { ...state.props, [newProp]: void '' }
        }))
    },
    deleteProps: (newProp) => {
        const prevProps = get().props
            
        delete prevProps[newProp]

        set({ props: prevProps })
    },

    getComponentCode: () => {
        const {
            imports,
            name,
            props,
            begin,
            state,
            logic,
            renderStart,
            renderBody,
            renderEnd,
            end,
        } = get()

        return ({
            imports,
            name,
            props: Object.keys(props).join(',\n'),
            begin,
            state,
            logic,
            renderStart,
            renderBody,
            renderEnd,
            end,
        })
    },
    
    // removeAllBears: () => set({ bears: 0 }),
}))