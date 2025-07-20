import { importResolver } from "./import-resolver"
import { getBaseTemplate } from "./get-base-template"

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