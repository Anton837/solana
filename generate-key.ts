import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(keypair.publicKey);
console.log(keypair.secretKey);
