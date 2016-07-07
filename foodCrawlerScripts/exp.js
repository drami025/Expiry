var cheerio = require('cheerio');
var http = require('http');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('food_items.txt')
});


lineReader.on('line', function(line){
    	var options = {
	    host: 'www.fmi.org',
	    port: 80,
	    path: '/industry-topics/consumer-affairs/food-keeper-food-storage-database/food-keeper-by-letter/' + line
	}

	http.get(options, function(res){
	    res.on('data', function(data){
		    var $ = cheerio.load(data.toString());
		    $('.sfitemTitle').each(function(){
		        console.log($(this).text().trim().replace(/\s+/g, " "));
		    });
	    
		    $('.sfitemShortTxtWrp').each(function(){
		        console.log($(this).text().trim().replace(/\s+/g, " "));
		    });
	    });
	}).on("error", function (){
        console.log("ERROR FOR ITEM " + line);
    });
});


