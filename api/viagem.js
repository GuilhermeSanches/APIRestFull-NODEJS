exports.getViagens = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM viagens',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}