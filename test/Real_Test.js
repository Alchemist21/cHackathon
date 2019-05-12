//import { AssertionError } from "assert";

var real = artifacts.require("./Real.sol");

contract('Real Contract', function(accounts) { 
    const account_1 = accounts[0];
  
    it("should save and access buildings by borough", async () => {
        let name;
        try {
            const instance = await real.deployed();
 /*
Longitude,Latitude,BIN(Building Information Number),Zip Code,street,Borough
-73.957771,40.673447,3029288,11238,sterling,Brooklyn
-73.979975,40.779623,1030037,11045,west 74th street,Manhattan
-73.994506,40.769802,4023450,11369,98th street,Queens
-73.919382,40.744436,4001896,11104,Hunters Point,Queens
-73.946786,40.818629,1060638,10030,Edgecombe avenue,Manhattan
-73.994506,40.71837,1005627,10002,Grand Street,Manhattan

 */
            var longitude = "-73.957771";
            var latitude = "40.673447";
            var bin = 3029288;
            var zipCode = "11238";
            var street = "sterling";
            var borough = "Brooklyn";

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );
      
 
            longitude = "-73.979975";
            latitude = "40.779623";
            bin = 1030037;
            zipCode = "11045";
            street = "west 74th street";
            borough = "Manhattan"; 

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );
 
 
            longitude = "-73.994506";
            latitude = "40.769802";
            bin = 4023450;
            zipCode = "11369";
            street = "98th street";
            borough = "Queens"; 

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );


            //-73.919382,40.744436,4001896,11104,Hunters Point,Queens

            longitude = "-73.919382";
            latitude = "40.744436";
            bin = 4001896;
            zipCode = "11104";
            street = "Hunters Point";
            borough = "Queens"; 

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );



            // // -73.946786,40.818629,1060638,10030,Edgecombe avenue,Manhattan

            longitude = "--73.946786";
            latitude = "40.818629";
            bin = 1060638;
            zipCode = "10030";
            street = "Edgecombe avenue";
            borough = "Manhattan"; 

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );


            // //-73.994506,40.71837,1005627,10002,Grand Street,Manhattan

            longitude = "-73.994506";
            latitude = "40.71837";
            bin = 1005627;
            zipCode = "10002";
            street = "Grand Street";
            borough = "Manhattan"; 

            await instance.setBuilding(
                longitude,
                latitude,
                bin,
                zipCode,
                street,
                borough
            );



            bins = await instance.getBins("Queens")
            console.log(bins.length);
 
            for (let i = 0; i < bins.length; i++) {
                var building = await instance.getBuilding(bins[i].toNumber());
                console.log("--------------");
                console.log(building[0]);
                console.log(building[1]);
                console.log(building[2].toNumber());
                console.log(building[3]);
                console.log(building[4]);
                console.log(building[5]);
             
            }    
  
    } catch (err) {
        console.log(err)
    }  
  });  
});