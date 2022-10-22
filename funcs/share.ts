function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default async function share() {
    const code = <HTMLInputElement>document.getElementById("code")!;
    let id = makeid(15)
    await fetch('/api/share', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            code: code.value
        }),
    })
    navigator.clipboard.writeText(process.env.VERCEL_URL!)
    
}
