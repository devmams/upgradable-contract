const {expect} = require('chai');
const {upgrades} = require('hardhat');

describe('Deploy and Update', () =>{

  let Box, BoxV2, proxy;

  beforeEach(async () =>{
    Box = await ethers.getContractFactory('Box');
    proxy = await upgrades.deployProxy(Box, [5], {initializer:'initialize'});
    await proxy.deployed();
  })

  describe('Proxy Deployment', () => {
    it('Should be deployed', async () => {
      expect(proxy.address).to.not.equal('');
    })
  })  

  describe('Upgrade', () => {
    it('Should upgrade proxy implementation', async () => {
      BoxV2 = await ethers.getContractFactory('BoxV2');
      upgraded = await upgrades.upgradeProxy(proxy.address, BoxV2);
      await upgraded.deployed()
      expect((await upgraded.value()).toString()).to.equal('5');
      await upgraded.increment();
      expect((await upgraded.value()).toString()).to.equal('6');
    })
  })

})