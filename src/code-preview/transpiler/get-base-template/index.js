import { importResolver } from "../import-resolver"

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
    }

    template.push("({")

    for(const [prop, defaultValue] of Object.entries(props)) {
        template.push(`\n\t${prop}${defaultValue ? " = \"" + defaultValue + "\"" : ''},`)
    }

    template.push("\n}) => {\n")

    anchors.body = template.length
    template.push("//\t[body anchor]\n")

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
