//所有要共用的變數都放在最外層
var winW;
var winH;
var pageNow;

var playerArr = ["RF","CF","LF","SS","3B","2B","1B","C","P"];
var playerNo;
var playerNameArr = [];

$(document).ready(function(){
	winW = $(window).width();
	winH = $(window).height();

	getNames();
	
	$('body').on('click',function(e){
		if(playerNo < playerNameArr.length){
			showPlayer(playerNo);
			playerNo++;
		}
	});
});

$(window).resize(function(){
	winW = $(window).width();
	winH = $(window).height();
});

function getNames(){
	$.ajax({
		url: "player.json",
		cache: false
	})
	.done(function(data){
		playerNameArr = data["players"];
		playerNo = 0;
	});
}

function showPlayer(playerNo){
	if(playerNameArr[playerNo] != ""){
		var target = $('.player-'+playerArr[playerNo]);
		target.find('.player-name').html(playerNameArr[playerNo]);
		target.addClass('show');
	} else {
		var target = $('.player-'+playerArr[playerNo]);
		target.find('.player-name').html("");
		target.removeClass('show');
	}
}
