const {upgrades} = require('hardhat');

async function main() {

  const Box = await ethers.getContractFactory('Box');
  const proxy = await upgrades.deployProxy(Box, [10], {initializer:'initialize'});
  await proxy.deployed();

  console.log(`proxy address ${proxy.address}`);
  console.log(`value : ${await proxy.value()}`)

  const BoxV2 = await ethers.getContractFactory('BoxV2');
  const upgraded = await upgrades.upgradeProxy(proxy.address, BoxV2);
  await upgraded.deployed()

  console.log(`upgraded address ${upgraded.address}`);
  await upgraded.increment();
  console.log(`value ${await upgraded.value()}`)
}


main()
.then(() => process.exit(0))
.catch((error) =>{
  console.error(error);
  process.exit(1);
});