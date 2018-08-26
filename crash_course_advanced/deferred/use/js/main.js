$(function() {
	// 待機用関数
	var wait = function() {
		var d = $.Deferred();

		// 3000msec 待つ
		setTimeout(function() {
			d.resolve(); // 処理を解決
		}, 3000);

		return d.promise();	// 処理を予約
	};

	// ajax
	$("#btnAjax").click(function() {
		// text1.txt を読み込み
		$.ajax({url: "./text1.txt"})
		.then(function(data) {
			$("<div>").text(data).appendTo("#target");
		})
		.then(wait)
		.then(function() {
			// text2.txt を読み込み
			return $.ajax({url: "./text2.txt"});
		})
		.then(function(data) {
			$("<div>").text(data).appendTo("#target");
		})
		.then(wait)
		.then(function() {
			// text3.txt を読み込み
			return $.ajax({url: "./text3.txt"});
		})
		.then(function(data) {
			$("<div>").text(data).appendTo("#target");
		});
	});
});
