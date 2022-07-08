const {MongoClient} = require('mongodb');

async function main() {
    //mongodb+srv://ment4LAdm1N:<password>@cluster0.htbmj.mongodb.net/?retryWrites=true&w=majority
    const uri = "mongodb+srv://ment4LAdm1N:ment4LAdm1N@cluster0.htbmj.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);