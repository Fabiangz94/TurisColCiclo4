let PORT = process.env.PORT || 8000;
let connectionString = "mongodb+srv://admin:admin123@cluster0.jzy1ase.mongodb.net/?retryWrites=true&w=majority";
let dbName = "dbturiscol";
let fullUrl = "mongodb+srv://admin:admin123@cluster0.jzy1ase.mongodb.net/"+ dbName +"?retryWrites=true&w=majority";


module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl
};