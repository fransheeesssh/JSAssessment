/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_userName, _level, _gender, _type, _guild, _rank) {
    const NFT = {
        "userName":_userName,
        "level":_level,
        "gender":_gender,
        "type":_type,
        "guild":_guild,
        "rank":_rank,

    }
    NFTs.push(NFT);
    console.log("Player: "+_userName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i = 0; i < NFTs.length; i++){
    console.log("\nContract: \t\t" + (i + 1));
    console.log("User Name: \t\t" + NFTs[i].userName);
    console.log("Level: \t\t\t" + NFTs[i].level);
    console.log("Gender: \t\t" + NFTs[i].gender);
    console.log("Type: " + NFTs[i].type);
    console.log("Guild: \t" + NFTs[i].guild);
    console.log("Rank: \t" + NFTs[i].rank);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Bonakid99", "15", "Male", "Assassin", "Legends Guild", "87");
mintNFT("Marker", "65", "Male", "Fighter", "Hunters Guild", "56");
mintNFT("Killer64", "34", "Male", "Healer", "Hunters Guild", "76");
mintNFT("HunterSung", "11", "Male", "Assassin", "Legends Guild", "98");
mintNFT("MonggoLloyd", "60", "Male", "Sheilder", "Legends Guild", "59");
mintNFT("Sunkisser", "99", "Male", "Healer", "Hunters Guild", "6");
mintNFT("FEETliccer69", "69", "Male", "Fighter", "Degens Guild", "50");
listNFTs();
getTotalSupply();
