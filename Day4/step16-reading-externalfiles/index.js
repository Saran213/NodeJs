let fs = require('node:fs');
let fetch = require('fetch');

fetch.fetchUrl('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=16061625635422257268&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299772&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1',
    function(error, meta, data){
        fs.writeFile('temp.html', data, 'utf-8', function(error){
            if (error) {
                console.log('Error ', error);
            } else {
                console.log('writing to temp.html file');
            }
        })
    }
)