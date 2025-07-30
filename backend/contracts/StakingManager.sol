// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StakingManager {
    mapping(address => uint256) public stake;
    uint256 public constant MIN_STAKE = 1 ether;

    event Staked(address indexed node, uint256 amount);
    event Slashed(address indexed node, uint256 penalty);

    function stakeTokens() external payable {
        require(msg.value >= MIN_STAKE, "min stake");
        stake[msg.sender] += msg.value;
        emit Staked(msg.sender, msg.value); 
    }

    function slash(address node, uint256 penalty) external {
        // only ResultVerifier - guard omitted in MVP
        uint256 bal = stake[node];
        uint256 toSlash = penalty > bal ? bal : penalty;
        stake[node] -= toSlash;
        emit Slashed(node, toSlash);
    }
}