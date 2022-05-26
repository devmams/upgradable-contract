const {expect} = require('chai');

describe('Box', () =>{

  let Box, box;

  beforeEach(async () =>{
    Box = await ethers.getContractFactory('Box');
    box = await Box.deploy();
    await box.deployed();
  })
  
  describe('Deployment', () => {
    it('Should be deployed', async () => {
      expect(box.address).to.not.equal('');
    })
  })

  describe('Initialize', () => {
    it('Should set value to 100', async () => {
      await box.initialize(100);
      expect((await box.value()).toString()).to.equal('100');
    })
  })

})