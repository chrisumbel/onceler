
var OTP = require('lib/onceler/otp');

describe('otp', function() {
    it('should convert long to byte buffs', function() {
	expect(OTP.longToBytes(32000)[6]).toBe('}');
    });

    it('should make an OTP object with a base32 key', function() {
	var otp = new OTP('IFAUCQI=');
	expect(otp.secret).toBe('AAAA');
    });

    it('should get value at an index', function() {
	var otp = new OTP('IFAUCQI=');
	expect(otp.at(32000)).toBe(927526);
    });    
});
