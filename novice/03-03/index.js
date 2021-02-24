
//const {Client} = require('pg')
const Client=require('pg').Client
const pclient = new Client({
    database: 'kulyah',
    user:'postgres',
    password: 'unanganteng',

})

pclient.connect()

.then(() =>console.log("terkonek"))
//.then(() =>pclient.query("select *from tb_mhs where nama='akhmad haunan'"))
//.then(result=>console.table(result.rows))

pclient
.query('select now() as sekarang')
.then(res=>console.log(res.rows[0]))



.catch(e =>console.log(e))
.finally(()=> pclient.end)
