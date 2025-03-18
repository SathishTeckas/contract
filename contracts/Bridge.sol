// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Bridge {
    address public admin;
    IERC20 public token;

    event BridgeDeposit(address indexed sender, uint256 amount);

    constructor(address _token) {
        admin = msg.sender;
        token = IERC20(_token);
    }

    function deposit(uint256 amount) external {
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit BridgeDeposit(msg.sender, amount);
    }
}
