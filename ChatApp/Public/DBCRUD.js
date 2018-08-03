var sqlInstance = require('mssql');
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

                        for (var i = 0; i < dbData.length; i++) {
                            //let table = document.getElementById("table");
                           // let newRow = table.insertRow(table.rows.length);
                           // cell1 = newRow.insertCell(0),
                             //   cell2 = newRow.insertCell(1),
                              //  cell3 = newRow.insertCell(2),
                               // SId = dbData[i].ID,
                               // SName = dbData[i].Name,
                               // SDept = dbData[i].Dept;

                           // cell1.innerHTML = SId;
                           // cell2.innerHTML = SName;
                           // cell3.innerHTML = SDept;
                            var Sname = dbData[i].Name;
                            //console.dir(SId);
                            console.dir(SName);
                           // console.dir(SDept);
                        }
                    })
                    .catch(function (error) {
                        console.dir(error);
                    });
            }).catch(function (error) {
                console.dir(error);
            });
    } catch (error) {
        console.dir(error);
    }
}
executeDatabaseActions();