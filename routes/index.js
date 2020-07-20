const client = require('redis').createClient();
const random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const starterString = "jj.";
const location = 'Location';
const httpStatusCodes = require('http-status-codes');

function isBadFormatted(req) {
  return req.body === undefined || req.body === null;
}

function getrandom() {
  var text = starterString;
  for (var i = 0; i < 6; i++) text += random.charAt(Math.floor(Math.random() * random.length));
  return text;
}

exports.urlShorter = (req, res) => {
  if (isBadFormatted(req)) {
    sendErrorMessage(res);
  } else {
    const urlToShort = req.body.url;
    const shorter = getrandom();
    client.set(shorter, urlToShort);
    res.send(shorter);
  }
}

exports.searchUrl = (req, res) => {
  if (isBadFormatted(req)) {
    sendErrorMessage(res);
  } else {
    const id = req.params.id
    client.get(id, function (err, reply) {
      if (reply) {
        res.status(httpStatusCodes.PERMANENT_REDIRECT);
        res.set(location, reply);
        res.send();
      } else {
        res.status(httpStatusCodes.NOT_FOUND);
        res.send()
      }
    });


  }
}
