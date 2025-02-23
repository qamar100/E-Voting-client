import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";


export const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID as string,
});

export const chain = defineChain(sepolia);



// get a contract
const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain,
  // the contract's address
  address: process.env.CONTRACT_ADDRESS as string,
  // OPTIONAL: the contract's abi
  abi:[
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "CandidateAdded",
      "inputs": [
        {
          "type": "uint256",
          "name": "electionId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "candidateId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "name",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "photoUrl",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ElectionCreated",
      "inputs": [
        {
          "type": "uint256",
          "name": "electionId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "name",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "description",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "startTime",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "endTime",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "VoteCasted",
      "inputs": [
        {
          "type": "uint256",
          "name": "electionId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "candidateId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "VoterRegistered",
      "inputs": [
        {
          "type": "address",
          "name": "voter",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "addCandidate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_electionId",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "_name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_photoUrl",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "admin",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "createElection",
      "inputs": [
        {
          "type": "string",
          "name": "_name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_description",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "_startTime",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_endTime",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "electionCount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "elections",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "id",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "description",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "startTime",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "endTime",
          "internalType": "uint256"
        },
        {
          "type": "bool",
          "name": "ended",
          "internalType": "bool"
        },
        {
          "type": "uint256",
          "name": "candidateCount",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "endElection",
      "inputs": [
        {
          "type": "uint256",
          "name": "_electionId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getCandidate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_electionId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_candidateId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getElectionResults",
      "inputs": [
        {
          "type": "uint256",
          "name": "_electionId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256[]",
          "name": "",
          "internalType": "uint256[]"
        },
        {
          "type": "string[]",
          "name": "",
          "internalType": "string[]"
        },
        {
          "type": "string[]",
          "name": "",
          "internalType": "string[]"
        },
        {
          "type": "uint256[]",
          "name": "",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "registerVoter",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "vote",
      "inputs": [
        {
          "type": "uint256",
          "name": "_electionId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_candidateId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "voters",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "isRegistered",
          "internalType": "bool"
        },
        {
          "type": "bool",
          "name": "hasVoted",
          "internalType": "bool"
        },
        {
          "type": "uint256",
          "name": "votedCandidateId",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    }
  ]
});
