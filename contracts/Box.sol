// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Box {

  uint public value;

  function initialize(uint _value) external {
    value = _value;
  }
  
}