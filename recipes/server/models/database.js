const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Connection Failed'));
db.once('Success', function(){
    console.log('Connected')
});