/*
 * 加速度センサーの値を取得する
 */
 
/*
 * 定数
 */
const SCREEN_WIDTH = 480;		// キャンバス幅
const SCREEN_HEIGHT = 480;	// キャンバス高さ

/*
 * グローバル変数
 */
var canvas = null;		// キャンバス
var g = null;				// コンテキスト

/*
 * 起動処理
 */
window.onload = function(){
	// キャンバス情報取得
	canvas = document.getElementById("canvas");
	g = canvas.getContext("2d");

	// キャンバスサイズ設定
	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;
	
	// 加速度センサーイベント処理
	window.addEventListener("deviceorientation", function(e){
		// キャンバスをクリア
		g.fillStyle = "#ddd";
		g.fillRect(0, 0, canvas.width, canvas.height);

		// キャンバスに加速度センサーの各プロパティを表示
		g.font = "24px system";
		g.fillStyle = "#555";
		g.textBaseline = "top";	// 文字のベースラインを上に
		
		g.fillText("alpha: " + e.alpha, 20, 20);			// z軸
		g.fillText("beta: " + e.beta, 20, 60);			// x軸
		g.fillText("gamma: " + e.gamma, 20, 100);	// y軸

		g.fillText("absolute: " + e.absolute, 20, 180);	// 相対値: true 絶対値: false
	}, false);
};
