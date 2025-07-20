export const transpile = (data) => {
    let result = ''

    for(const [key, value] of Object.entries(data.getComponentCode())) {
        result += `// [${key}]:\n` + value + '\n'
    }

    return result
}