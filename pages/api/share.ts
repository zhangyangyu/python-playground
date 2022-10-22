import mysql from './mysql'

export default async function share(req: any, res: any) {
    await mysql.connect()
    await mysql.transaction().query('INSERT INTO snippet (id, code) VALUES (?, ?)', [req.body.id, req.body.code])
        .rollback((e: any) => {console.log(e)})
        .commit()
    await mysql.end()
    res.status(200).json({})
}
