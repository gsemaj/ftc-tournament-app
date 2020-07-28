import { MongoClient } from "mongodb";
import nc from "next-connect";
import { URL } from "url";

const url =
	"mongodb+srv://hobbyist_readonly:<password>@cluster0.v6kfj.mongodb.net/<dbname>?retryWrites=true&w=majority";

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
