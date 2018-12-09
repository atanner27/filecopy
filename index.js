/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
var shell = require('shelljs');

exports.helloWorld = (req, res) => {

  let message = req.query.message || req.body.message || 'Hello World!';

  shell.ls('*.js').forEach(function (file) {
    console.log(file);
  });

  res.status(200).send(message);


  let ex = 0;
};
