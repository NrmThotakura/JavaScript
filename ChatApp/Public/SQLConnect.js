const sql = require('mssql')
var sqlConfig = {
    user: 'sa',
    password: 'sa@1234',
    server: '192.168.1.126',  
    database: 'SampleTest'
  };
  
  (async function () {
    try {
      let pool = await sql.connect(sqlConfig)
      let result = await pool.request()
      //.query("CREATE TABLE clientInfo(ClientId INT(5), Name NVarChar(25))")
   //  .query("CREATE TABLE UserInfo(Name nvarChar(25), Dept nvarChar(5))")
    // .query("INSERT INTO clientInfo VALUES('Test2', 'CSE2')")
      .query("SELECT * FROM STUDENT")
    //  .query("SELECT * FROM STUDENT WHERE ID = '5'")
    //.query("UPDATE STUDENT SET Name= 'Hyderabad' WHERE ID = '5'")
    //.query("DELETE FROM STUDENT WHERE ID='6'")
  console.log(result);
  
    }
     catch (err) {
      console.log(err);
    }

  })()
