pragma solidity >=0.4.24 <0.6.0;

contract Real {

    struct Building {
        string Longitude;
        string Latitude; 
        uint BIN; 
        string ZipCode;
        string Street;
        string Borough; 
    }

    mapping(string => Building[]) boroughs;  // e.g. 'Queens' 
    mapping(uint => Building) buildingTable;   // key: BIN
     
    constructor() public {

    }

    function setBuilding(string memory _longitude,
            string memory _latitude,
            uint  _bin,
            string memory _zipcode,
            string memory _street,
            string memory _borough) public {
       
        Building memory b = Building({
            Longitude: _longitude,
            Latitude: _latitude,
            BIN: _bin,
            ZipCode: _zipcode,
            Street: _street,
            Borough: _borough});

        boroughs[_borough].push(b);
        buildingTable[_bin] = b;
    }

    function getBins(string memory _borough) public view returns (uint[] memory) {
          
        Building[] memory b = boroughs[_borough];
        uint[] memory _bins = new uint[](b.length);
        for (uint i=0; i < b.length; i++) {            
            _bins[i] = b[i].BIN;
        }
        return _bins;

    }

    function getBuilding(uint _bin) public view returns (
        string memory,
        string memory,
        uint,
        string memory,
        string memory,
        string memory
    ) {
        
        return (
            buildingTable[_bin].Longitude,
            buildingTable[_bin].Latitude,
            buildingTable[_bin].BIN,
            buildingTable[_bin].ZipCode,
            buildingTable[_bin].Street,
            buildingTable[_bin].Borough
        ); 
    }
    
    // function getBuildings(string memory _borough) public view returns (
    //     string memory,
    //     string memory,
    //     string memory,
    //     string memory,
    //     string memory,
    //     string memory) {

    //     string[] memory _longitudes;
    //     string[] memory _latitudes;
    //     string[] memory _bins;
    //     string[] memory _zipCodes;
    //     string[] memory _streets;
    //     string[] memory _boroughs;

    //     return  (
    //        _longitudes,
    //        _latitudes,
    //        _bins,
    //        _zipCodes,
    //        _streets,
    //        _boroughs);
    // }
}