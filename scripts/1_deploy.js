

async function main() {
  //Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")

  //Deploy contracts  
 const token = await Token.deploy()
 await token.deployed
 console.log(`Token deployed to: ${token.address}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
