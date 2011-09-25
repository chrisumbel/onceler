

var sha1 = require('crypto/sha1');
var base32 = require('thirty-two');

function longToBytes(x) {
    var bytes = new Buffer(8);

    for(var i = 7; i >= 0; i--) {
        bytes[i] = x & 0xff;
        x = x >> 8;
    }

    return bytes.toString("ASCII");
}

function at(x) {
    var hmacString = sha1.str_hmac_sha1(this.secret, longToBytes(x));
    var hmac = new Buffer(hmacString, "binary");
    var offset = hmac[19] & 0xf;
    var code = (hmac[offset] & 0x7f) << 24 |
	(hmac[offset + 1] & 0xff) << 16 |
	(hmac[offset + 2] & 0xff) << 8 |
	(hmac[offset + 3] & 0xff)

    return code % Math.pow(10, 6);
}

function OTP(secret) {
    if(secret)
	this.secret = base32.decode(secret);
}

OTP.longToBytes = longToBytes;
OTP.prototype.at = at;

module.exports = OTP;
