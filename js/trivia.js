var count = 0;

/* Q1 */
function maru1(){
	document.getElementById("answer1").innerHTML = "◯ (「１」を4つ組み合わせると折り紙の形になるため)";
    document.getElementById("t1").style.backgroundColor = '#fbb';
    document.getElementById("t2").style.backgroundColor = '#aaa';
    document.getElementById("t3").style.backgroundColor = '#aaa';
    count += 1;
}
function batu1_1(){
	document.getElementById("answer1").innerHTML = "✖ (A.11月11日：「１」を4つ組み合わせると折り紙の形になるため)";
    document.getElementById("t1").style.backgroundColor = '#aaa';
    document.getElementById("t2").style.backgroundColor = '#99CCFF';
    document.getElementById("t3").style.backgroundColor = '#aaa';
}
function batu1_2(){
	document.getElementById("answer1").innerHTML = "✖ (A.11月11日：「１」を4つ組み合わせると折り紙の形になるため)";
    document.getElementById("t1").style.backgroundColor = '#aaa';
    document.getElementById("t2").style.backgroundColor = '#aaa';
    document.getElementById("t3").style.backgroundColor = '#99CCFF';
}

/* Q2 */
function maru2(){
	document.getElementById("answer2").innerHTML = "〇 (鶴は縁起の良いものとされているため)";
    document.getElementById("t4").style.backgroundColor = '#aaa';
    document.getElementById("t5").style.backgroundColor = '#aaa';
    document.getElementById("t6").style.backgroundColor = '#fbb';
    count += 1;
}
function batu2_1(){
	document.getElementById("answer2").innerHTML = "✖ (A.千羽鶴：鶴は縁起の良いものとされているため)";
    document.getElementById("t4").style.backgroundColor = '#99CCFF';
    document.getElementById("t5").style.backgroundColor = '#aaa';
    document.getElementById("t6").style.backgroundColor = '#aaa';
}
function batu2_2(){
	document.getElementById("answer2").innerHTML = "✖ (A.千羽鶴：鶴は縁起の良いものとされているため)";
    document.getElementById("t4").style.backgroundColor = '#aaa';
    document.getElementById("t5").style.backgroundColor = '#99CCFF';
    document.getElementById("t6").style.backgroundColor = '#aaa';
}

/* Q3 */
function maru3(){
	document.getElementById("answer3").innerHTML = "◯";
    document.getElementById("t7").style.backgroundColor = '#fbb';
    document.getElementById("t8").style.backgroundColor = '#aaa';
    document.getElementById("t9").style.backgroundColor = '#aaa';
    count += 1;
}
function batu3_1(){
	document.getElementById("answer3").innerHTML = "✖ (A.寿命が延びる)";
    document.getElementById("t7").style.backgroundColor = '#aaa';
    document.getElementById("t8").style.backgroundColor = '#99CCFF';
    document.getElementById("t9").style.backgroundColor = '#aaa';
}
function batu3_2(){
	document.getElementById("answer3").innerHTML = "✖ (A.寿命が延びる)";
    document.getElementById("t7").style.backgroundColor = '#aaa';
    document.getElementById("t8").style.backgroundColor = '#aaa';
    document.getElementById("t9").style.backgroundColor = '#99CCFF';
}

/* Q4 */
function maru4(){
	document.getElementById("answer4").innerHTML = "◯ (「折り紙付き」は良い意味でしか使わない)";
    document.getElementById("t10").style.backgroundColor = '#aaa';
    document.getElementById("t11").style.backgroundColor = '#fbb';
    count += 1;
}
function batu4(){
	document.getElementById("answer4").innerHTML = "✖ (A.「折り紙付き」の秀才：「折り紙付き」は良い意味でしか使わない)";
    document.getElementById("t10").style.backgroundColor = '#99CCFF';
    document.getElementById("t11").style.backgroundColor = '#aaa';
}

/* Q5 */
function maru5(){
	document.getElementById("answer5").innerHTML = "◯ (紙を折るのは様々な形をつくりだすことなので、切ったりしても良い)";
    document.getElementById("t12").style.backgroundColor = '#aaa';
    document.getElementById("t13").style.backgroundColor = '#fbb';
    count += 1;
}
function batu5(){
	document.getElementById("answer5").innerHTML = "✖ (A.切ったりしても良い：紙を折るのは様々な形をつくりだすことなので、切ったりしても良い)";
    document.getElementById("t12").style.backgroundColor = '#99CCFF';
    document.getElementById("t13").style.backgroundColor = '#aaa';
}

function button(){
    if(count == 0){
        document.getElementById("re1").innerHTML = "お疲れ様！次頑張ろう！";
        document.getElementById("te1").innerHTML = "・赤メダル";
        document.getElementById("image").src = "images/trivia/red_medal.jpg";
        document.getElementById("link").href = "./how_to/red_medal.html"
    }
    else if(count == 1){
        document.getElementById("re1").innerHTML = "お疲れ様！1問正解！";
        document.getElementById("te1").innerHTML = "・赤メダル";
        document.getElementById("image").src = "images/trivia/red_medal.jpg";
        document.getElementById("link").href = "./how_to/red_medal.html"
    }
    else if(count == 2){
        document.getElementById("re1").innerHTML = "お疲れ様！2問正解！";
        document.getElementById("te1").innerHTML = "・赤メダル";
        document.getElementById("image").src = "images/trivia/red_medal.jpg";
        document.getElementById("link").href = "./how_to/red_medal.html"
    }
    else if(count == 3){
        document.getElementById("re1").innerHTML = "惜しい！3問正解！";
        document.getElementById("te1").innerHTML = "・銀メダル";
        document.getElementById("image").src = "images/trivia/silver_medal.jpg";
        document.getElementById("link").href = "./how_to/silver_medal.html"
    }
    else if(count == 4){
        document.getElementById("re1").innerHTML = "もう少し！4問正解！";
        document.getElementById("te1").innerHTML = "・銀メダル";
        document.getElementById("image").src = "images/trivia/silver_medal.jpg";
        document.getElementById("link").href = "./how_to/silver_medal.html"
    }
    else if(count == 5){
        document.getElementById("re1").innerHTML = "すごい！全問正解！";
        document.getElementById("te1").innerHTML = "・金メダル";
        document.getElementById("image").src = "images/trivia/gold_medal.jpg";
        document.getElementById("link").href = "./how_to/gold_medal.html"
    }
}

function check(){
    result = confirm("送信してよろしいですか？");
    if(result){
        return true;
    }
	else{
		alert('キャンセルされました');
		return false; // 送信を中止

	}
}


