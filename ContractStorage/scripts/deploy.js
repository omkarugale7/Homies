const hre = require("hardhat");

async function main() {
  const StorageFactory = await ethers.getContractFactory("Storage")
  console.log("Deploying contract...")
  const Storage = await StorageFactory.deploy()
  await Storage.deployed()
  console.log(Storage);
  console.log(`Deployed contract to: ${Storage.address}`)

  const currentValue = await Storage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  const transactionResponse = await Storage.AddtoArray(
    "Nilay","Omkar","255","15:20:00 16-03-2022","12df43"
  )

  
  await transactionResponse.wait(1)

  const transactionResponse1 = await Storage.AddtoArray(
    "Omkar","Nilay","255","15:20:00 16-03-2022","12df43"
  )
  await transactionResponse1.wait(1)
  const updatedValue = await Storage.retrieve()
  console.log(`Updated Value is: ${updatedValue[1]}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
