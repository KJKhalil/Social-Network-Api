const {connect, connection} = require('mongoose');

const connectionUrl =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialNet';

connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = connection;