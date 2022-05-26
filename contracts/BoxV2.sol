// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract BoxV2 {

  uint public value;

  function increment() external {
    value += 1;
  }

}