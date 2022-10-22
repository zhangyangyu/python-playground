const { loadPyodide } = require("pyodide");

var pyodide: any = undefined

export default async function evaluate() {
    if (pyodide === undefined) {
        pyodide = await loadPyodide({
            indexURL: "/pyodide"
        });
    }
 
    const output = <HTMLInputElement>document.getElementById("output")!;
    const code = <HTMLInputElement>document.getElementById("code")!;
    try {
        const replaceOut = `import sys, io
out = io.StringIO()
sys.stdout = sys.stderr = out
`
        const captureOut = `
out.getvalue()
`
        let result = pyodide.runPython(replaceOut + code.value + captureOut);
        output.value = result
    } catch (err) {
        output.value = <string>err
    }
    if (output.value === "undefined" || output.value === "") {
        output.value = "Program exited."
    }
}
