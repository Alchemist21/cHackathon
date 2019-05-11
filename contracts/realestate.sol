pragma solidity ^0.4.8;

contract SimpleStorage {
    uint x;

    function set(uint newValue) {
        x = newValue;
    }
    
    
    function get() returns (uint) {
        return x;
    }
}