let mongoose = require("mongoose");
//cargamos la clase de schema
let Schema = mongoose.Schema;
// definir al configuración del schema
let schemaConfig = {
    id: String,
    username: String,
    password: String,
    email: String,
    firstName: String,
};
// ceacion del esquema
const userSchema = new Schema(schemaConfig);
// creacion del modelo
let UserModel = mongoose.model("usuario",userSchema);

async function createUser(UsernewUser){
    try{
        let newUser = new UserModel();
        newUser.id = UsernewUser.id;
        newUser.firstName = UsernewUser.firstName;
        newUser.email = UsernewUser.email;
        newUser.password = UsernewUser.password;
        newUser.username = UsernewUser.username;
        let result = await newUser.save();
        return result;
    }catch (ex) {
        console.log(ex);
        return{};
    }
}


async function deleteUser(id){
    try{
        let result = await UserModel.findByIdAndRemove(id).exec();
        return result;
    }catch (ex){
        console.log(ex);
        return {};
    }
}
async function getAllUser(){
    try{
        let filter = {};
        let cursor = UserModel.find(filter).cursor();
        let result = [];
        let currentUser = await cursor.next();
        while (currentUser != null) {
            result.push(currentUser);
            currentUser = await cursor.next();
        }
    return result;
    } catch (ex){
        console.log(ex);
        return{};
    }
}
async function findUserById(id){
    try{
        let cursor = UserModel.findById(id).cursor();
        let user = await cursor.next();
        return user;
    }catch (ex){
        console.log(ex);
        return{};
    }

}

async function updateUserById(idUser, newUser){
    try{
        let userNewUser = new UserModel();
        userNewUser.firstName = newUser.firstName;
        userNewUser.email = newUser.email;
        userNewUser.password = newUser.password;
        userNewUser.username = newUser.username;
        let result = await UserModel.updateOne({_id: idUser},
            {
                $set:{
                    firstName: userNewUser.firstName,
                    email: userNewUser.email,
                    password: userNewUser.password,
                    username: userNewUser.username
                }
            });
            
        return result;
    }catch (ex) {
        console.log(ex);
        return{};
    }
}

module.exports = {
    userSchema,
    createUser,
    deleteUser,
    getAllUser,
    findUserById,
    updateUserById,
};