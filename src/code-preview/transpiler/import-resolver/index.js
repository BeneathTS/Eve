export class ImportResolver {
    constructor() {
        this.importsDepsTree = {}

        this.pushImport = this.pushImport.bind(this)
        this.resolve = this.resolve.bind(this)
    }
    
    pushImport(target, source, type) {
        if (!this.importsDepsTree?.[source]) {
            Object.defineProperty(
                this.importsDepsTree,
                source,
                {
                    value: {},
                    writable: true,
                    enumerable: true
                }
            )
        }

        if(!this.importsDepsTree?.[source]?.[type]) {
            Object.defineProperty(
                this.importsDepsTree[source],
                type,
                {
                    value: new Set([target]),
                    writable: true,
                     enumerable: true
                }
            )
        }
        else {
            this.importsDepsTree[source][type].add(target)
        }
    }

    resolve() {
        let importsList = []
        let temp

        for(let [lib, imports] of Object.entries(this.importsDepsTree)) {
            temp = 'import '

            for(const [importType, targets] of Object.entries(imports)) {
                if (importType === 'default') {
                    temp += Array.from(targets).join(', ')
                }

                if (importType === 'named') {
                    temp += '{ ' + Array.from(targets).join(', ') + ' }'
                }
            }

            temp += ` from "${lib}"`

            importsList.push(temp)
        }

        return importsList.join('\n')
    }
}
