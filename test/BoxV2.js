const {expect} = require('chai');

describe('BoxV2', () =>{

  let BoxV2, boxV2;

  beforeEach(async () =>{
    BoxV2 = await ethers.getContractFactory('BoxV2');
    boxV2 = await BoxV2.deploy();
    await boxV2.deployed();
  })
  
  describe('Deployment', () => {
    it('Should be deployed', async () => {
      expect(boxV2.address).to.not.equal('');
    })
  })

  describe('Increment', () => {
    it('Should increment value from 0 to 1', async () => {
      expect((await boxV2.value()).toString()).to.equal('0');
      await boxV2.increment();
      expect((await boxV2.value()).toString()).to.equal('1');
    })
  })

})