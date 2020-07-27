module.exports = {

	user:(app, req, res)=>{
		req.assert('_name', 'O nome obrigatorio').notEmpty();
		req.assert('_email', 'É obrigatorio').notEmpty().isEmail();

		let errors = req.validationErrors();

		if (errors){
			app.utils.error.send(errors, req, res);
			return false;
		} else {
			return true;
		}
	}
};