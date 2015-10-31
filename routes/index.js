var express = require('express');
var App = express.Router();
var Lembretes = getmodule('api/lembrete');
var Viagens = getmodule('api/viagem');
var Messages = getmodule('api/messages');

/* GET home page. */
App.route('/lembretes')
	.get(Lembretes.read)
	.post(Lembretes.create);

/*GET VIAGENS*/
App.route('/viagens').get(Viagens.getViagens);


App.route('/message/:id').get(Messages.getMessages);


App.route('/lembrete/:id')
	.get(Lembretes.profile)
	.put(Lembretes.update)
	.delete(Lembretes.delete);


module.exports = App;
