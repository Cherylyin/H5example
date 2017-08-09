$(function(){
	QrcodeTest.init();

});
 function utf16to8(str) {  
            var out, i, len, c;  
            out = "";  
            len = str.length;  
            for (i = 0; i < len; i++) {  
                c = str.charCodeAt(i);  
                if ((c >= 0x0001) && (c <= 0x007F)) {  
                    out += str.charAt(i);  
                } else if (c > 0x07FF) {  
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                } else {  
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                }  
            }  
            return out;  
        }  
var QrcodeTest = function(){
    
    function init(){
    	var trs = $("#qrcode_container_id").qrcode({ 
		    render: "table", 
		    width: 490,  
		    height:490, 
		    image:'portrait.png',
		    text: "http://www.baidu.com/",
		    background:"#ffffff",
		    foreground:'red' 
		}).find("tr"); 
		var trLen = trs.size();
		var tdLen = $(trs[0]).find("td").size();
		var colors = ['#ff0000', '#0100e2','#00ed01', '#9f4d95']
		for(var  i = 0;i<trLen;i++){
			var tr = trs[i];
			var tds = $(tr).find("td");
			for(var j=0;j<tdLen;j++){
                  var td = tds[j];
                  var idx = Math.floor(parseInt(Math.random()*4,10));
                  	
                  	if(td.style.backgroundColor=='red'){
                  		 $(td).css("background-color",colors[idx]);
                  	}
                 
			}
		}
    }
    return {
    	init:function(){
    		init();
    	}
    }
   
}();