
var sqlInstance = require("mssql");
var setUp = {
    server: '192.168.1.126',
    database: 'SampleTest',
    user: 'sa',
    password: 'sa@1234'
};

function executeDatabaseActions() {
    try {
        sqlInstance.connect(setUp)
            .then(function () {

                new sqlInstance.Request()
                    .query("select * from STUDENT")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                           return;
                           //console.log(dbData[0].Name)
                          // console.log(dbData.Name)
                        console.dir(dbData);
                    })
                    .catch(function (error) {
                        console.dir(error);
                    });

               
                // var value = 2;
                // new sqlInstance.Request()
                //     .input("param", sqlInstance.Int, value)
                //     .query("select * from STUDENT where ID = @param")
                //     .then(function (dbData) {
                //         if (dbData == null || dbData.length === 0)
                //             return;
                //         console.dir('STUDENT with ID = 2');
                //         console.dir(dbData);
                //     })
                //     .catch(function (error) {
                //         console.dir(error);
                //     });
               
                // var dbConn = new sqlInstance.Connection(setUp,
                //     function (err) {
                //         var myTransaction = new sqlInstance.Transaction(dbConn);
                //         myTransaction.begin(function (error) {
                //             var rollBack = false;
                //             myTransaction.on('rollback',
                //                 function (aborted) {
                //                     rollBack = true;
                //                 });
                //             new sqlInstance.Request(myTransaction)
                //                 .query("INSERT INTO STUDENT VALUES ('0', 'Sample', 'Sample1')",
                //                 function (err, recordset) {
                //                     if (err) {
                //                         if (!rollBack) {
                //                             myTransaction.rollback(function (err) {
                //                                 console.dir(err);
                //                             });
                //                         }
                //                     } else {
                //                         myTransaction.commit().then(function (recordset) {
                //                             console.dir('Data is inserted successfully!');
                //                         }).catch(function (err) {
                //                             console.dir('Error in transaction commit ' + err);
                //                         });
                //                     }
                //                 });
                //         });
                //     });
                // var delValue = 'Sample';
                // var dbConn = new sqlInstance.Connection(setUp,
                //     function (err) {
                //         var myTransaction = new sqlInstance.Transaction(dbConn);
                //         myTransaction.begin(function (error) {
                //             var rollBack = false;
                //             myTransaction.on('rollback',
                //                 function (aborted) {
                //                     rollBack = true;
                //                 });
                //             new sqlInstance.Request(myTransaction)
                //                 .query("DELETE FROM STUDENT WHERE Name=" + delValue,
                //                 function (err, recordset) {
                //                     if (err) {
                //                         if (!rollBack) {
                //                             myTransaction.rollback(function (err) {
                //                                 console.dir(err);
                //                             });
                //                         }
                //                     } else {
                //                         myTransaction.commit().then(function (recordset) {
                //                             console.dir('Data is deleted successfully!');
                //                         }).catch(function (err) {
                //                             console.dir('Error in transaction commit ' + err);
                //                         });
                //                     }
                //                 });
                //         });
                //     });
    
                // var updValue = 5;
                // var dbConn = new sqlInstance.Connection(setUp,
                //     function (err) {
                //         var myTransaction = new sqlInstance.Transaction(dbConn);
                //         myTransaction.begin(function (error) {
                //             var rollBack = false;
                //             myTransaction.on('rollback',
                //                 function (aborted) {
                //                     rollBack = true;
                //                 });
                //             new sqlInstance.Request(myTransaction)
                //                 .query("UPDATE STUDENT SET Name = 'Updated' WHERE ID=" + updValue,
                //                 function (err, recordset) {
                //                     if (err) {
                //                         if (!rollBack) {
                //                             myTransaction.rollback(function (err) {
                //                                 console.dir(err);
                //                             });
                //                         }
                //                     } else {
                //                         myTransaction.commit().then(function (recordset) {
                //                             console.dir('Data is updated successfully!');
                //                         }).catch(function (err) {
                //                             console.dir('Error in transaction commit ' + err);
                //                         });
                //                     }
                //                 });
                //         });
                //     });
            


            }).catch(function (error) {
                console.dir(error);
            });
    } catch (error) {
        console.dir(error);
    }
}
executeDatabaseActions();