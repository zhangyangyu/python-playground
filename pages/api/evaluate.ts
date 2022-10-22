export default async function evaluate() {
    const output = document.getElementById("output");
    const code = document.getElementById("code");
    let pyodide = await loadPyodide();
    try {
        const replaceOut = `import sys, io
out = io.StringIO()
sys.stdout = sys.stderr = out
`
        const captureOut = `
out.getvalue()
`
        console.log(replaceOut + code.value + captureOut)
        let result = pyodide.runPython(replaceOut + code.value + captureOut);
        output.value = result
    } catch (err) {
        output.value = err
    }
    if (output.value === "undefined" || output.value === "") {
        output.value = "Program exited."
    }
}
