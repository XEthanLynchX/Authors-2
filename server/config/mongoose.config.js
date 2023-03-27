const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/favorite_authors`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to favorite_authors database!`))
.catch((err)=>console.log(err));