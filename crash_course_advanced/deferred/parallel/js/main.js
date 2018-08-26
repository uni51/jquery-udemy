$(function() {
	// ajax
	$("#btnAjax").click(function() {
		var arr = [
			$.ajax({url: "./text1.txt"}),	// text1を読み込むpromise
			$.ajax({url: "./text2.txt"}),	// text2を読み込むpromise
			$.ajax({url: "./text3.txt"})	// text3を読み込むpromise
		];

		// $.when(~, ~, ...)全ての処理が解決or棄却
		$.when.apply($, arr)
		.done(function() {
			// 全ての処理が解決した時の処理
			// 引数を1つずつ取り出し、順番は保証されている
			for (var i = 0; i < arguments.length; i++) {
				var data = arguments[i][0];

				// 時間差で処理するので、値をfunctionでローカル化
				// して保持可能にする
				(function(i, data) {
					setTimeout(function() {
						// 1つずつ時間差で表示
						$("<div>").text(data).appendTo("#target");
					}, i * 3000);
				})(i, data);
			}
		});
	});
});
