// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStakingManager {
    function slash(address node, uint256 penalty) external; 
}

contract ResultVerifier {
    struct Record {
        bytes32 hash;
        bytes output;
        address prover; 
    }

    IStakingManager public staking;
    mapping(bytes32 => Record) public records;
    uint256 public constant SLASH_PENALTY = 0.2 ether;

    constructor(address staking_) {
        staking = IStakingManager(staking_);
    }

    function submitResult(bytes32 reqHash, bytes calldata output) external {
        records[reqHash] = Record(reqHash, output, msg.sender); 
    }

    function submitFraudProof(
        bytes32 reqHash,
        bytes calldata correctOutput
    ) external {
        Record memory rec = records[reqHash];
        require(rec.hash != 0x0, "no record");
        require(
            keccak256(rec.output) != keccak256(correctOutput),
            "not fraudulent" 
        );
        // slash prover
        staking.slash(rec.prover, SLASH_PENALTY);
        // reward hunter
        payable(msg.sender).transfer(SLASH_PENALTY);
    }
    receive() external payable {} 
}