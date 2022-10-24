const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
		useUnifiedTopology: true,
    }
    try {
        await mongoose.connect("mongodb+srv://Arjun:Arjun009@cluster0.gqpkhpa.mongodb.net/safepro?retryWrites=true&w=majority", connectionParams);
        console.log("Connected to database successfully")
    } catch (error) {
        console.log("Could not connect to database!")
    }
}