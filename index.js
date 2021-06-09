const Eris = require("eris");
const mongoose = require("mongoose");
const config = require("./config.json");
const client = new Eris(config.token);
client.config = config;

mongoose.connect(client.config.mongoDB,{useNewUrlParser:true,useUnifiedTopology:true})
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'))
db.once('open', () => {
	console.log("[SYSTEM]: Connected database")
})
client.on("ready",async () => {
	client.editStatus("dnd",{name:"Eris Development",type:3})
	console.log("[SYSTEM]: Bot logged in discord")
})



client.connect()

c
