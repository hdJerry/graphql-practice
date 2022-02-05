const mongoose = require('mongoose');
const { db:{url} } = require('./data');


mongoose
.connect(url)
.then(() => console.log('connected'))
.catch(err => console.log(err));

mongoose.connection.once('open', () => console.log('connected!!'))