var pg = require('pg');
var _client;
module.exports = {
    connect: function(cb){
        if(_client)
            cb(_client);
        var client = new pg.Client(process.env.CONN);
        client.connect(function(err){
            if(err)
                throw 'error connecting';
            _client = client;
            cb(_client);
        });
    }
};