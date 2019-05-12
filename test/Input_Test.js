var real = artifacts.require("./Real.sol");

contract('Real Contract', function(accounts) { 
    const account_1 = accounts[0];
  
    it("should input dept of building data", async () => {
   
//         var fs =require('fs');
//         var parse = require('csv-parse');

//         try {
//             // read rows from csv file.
//             var inputFile='../data.csv';
//             console.log("Processing data file");
//             const results = [];

//             // var parser = parse({delimiter: ','}, function (err, data) {
//             //     // when all countries are available,then process them
//             //     // note: array element at index 0 contains the row of headers that we should skip
//             //     data.forEach(function(line) {
//             //       // create country object out of parsed fields
//             //       var building = { "Longitude" : line[0]
//             //                     , "Latitude" : line[1]
//             //                     , "BIN" : line[2]
//             //                     , "ZipCode" : line[4]
//             //                     , "Street" : line[5]
//             //                     , "Borough" : line[6]
//             //                     };
//             //      console.log(JSON.stringify(building));
//             //     });    
//             // });

//             // read the inputFile, feed the contents to the parser
//             //fs.createReadStream(inputFile).pipe(parser);
//             csv({separator: ','});
             
//             fs.createReadStream('../data.csv')
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 console.log(results);
//   // [
//   //   { NAME: 'Daffy Duck', AGE: '24' },
//   //   { NAME: 'Bugs Bunny', AGE: '22' }
//   // ]
//             });


//             // ingest rows to quorum

//             // verify data

//             //const instance = await real.deployed();

             
//         } catch (err) {
//             console.log(err)
//         }  
  });  
});