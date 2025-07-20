import { ImportResolver } from "./import-resolver"

const importResolver = new ImportResolver()

export const getBaseTemplate = ({
    exported,
    name,
    memoized,
    props
}) => {
    const template = ['[imports anchor]\n\n']
    const anchors = {
        imports: 0
    }

    if (exported) {
        template.push('export ')
    }

    template.push(`const ${name} = `)

    if (memoized) {
        template.push('memo(')
        importResolver.pushImport('memo', 'react', 'named')
        importResolver.pushImport('test', 'test', 'named')
    }

    template.push("({\n")

    //mb useless
    anchors.props = template.length
    template.push('    [props anchor]')

    template.push("\n}) => {\n")

    anchors.body = template.length
    template.push("    [body anchor]\n")

    template.push("}")

        if (memoized) {
        template.push(')')
    }

    template.push('\n')

    return {
        anchors,
        template
    }
}

export const transpile = ({
    meta,
    body
}) => {
    const {
        anchors,
        template
    } = getBaseTemplate(meta)

    template.splice(anchors.imports, 1, importResolver.resolve(), '\n\n')

    return template.join('')
}