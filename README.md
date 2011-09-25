
onceler
=======

A One-Time-Password library for node.js

TOTP
----
    var TOTP = require('onceler').TOTP;
    
    // create a TOTP object for a given base-32 encoded secret.
    var totp = new TOTP('IFAUCQKCIJBEE===');
    
    // get the value at a specified time index
    console.log(totp.at(650269));
    
    // get the value for the current time
    console.log(totp.now());
    
    // verify a user supplied value
    if(totp.verify(1234567)) {
        console.log('access granted!');
    } else {
        console.log('access denied!');
    }

LICENSE
-------

Copyright (c) 2011, Chris Umbel                                                 
                                                                                
Permission is hereby granted, free of charge, to any person obtaining a copy    
of this software and associated documentation files (the "Software"), to deal   
in the Software without restriction, including without limitation the rights    
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell       
copies of the Software, and to permit persons to whom the Software is           
furnished to do so, subject to the following conditions:                        
                                                                                
The above copyright notice and this permission notice shall be included in      
all copies or substantial portions of the Software.                             
                                                                                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR      
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,        
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE     
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER          
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,   
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN       
THE SOFTWARE.   