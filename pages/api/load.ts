import mysql from './mysql'

export default async function load(req: any, res: any) {
    let result = await mysql.query('SELECT code from snippet where id = ?', [req.body.id])
    const code = result.length == 0 ? "" : result[0]["code"]
    res.status(200).send({"code": code})
}
