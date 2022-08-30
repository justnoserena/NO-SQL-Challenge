const { connect, connection } = require('mongoose');

connect('mongodb://localhost/ThoughtsandReactions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
