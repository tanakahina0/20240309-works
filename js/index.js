// すべての問題の回答・選択肢を入れることで書き換えずに問題が変わる
const question_list = [
    { //オブジェクト
        //問題1
        quizId: '01',
        sentence: '名前の由来は何？',
        answers: ['宇宙', '星', '月'],
        correct: '月',
        close: '宇宙',
        correct_comment: '会った日の夜、月が綺麗だったので。',
        close_comment: '候補にはありました。',
        incorrect_comment:  '候補に入ってなかった！',
    },
    {
        //問題2
        quizId: '02',
        sentence: 'この中で出来ないことは何？',
        answers: ['お座り', '伏せ', '待て'],
        correct: '伏せ',
        close: '待て',
        correct_comment: 'できません！',
        close_comment: 'ときどき、できない。。',
        incorrect_comment:  'できます！',
    },
    {
        //問題3
        quizId: '03',
        sentence: 'この中で嫌いな食べ物は何？',
        answers: ['イチゴ','ない',  '缶詰'],
        correct: 'ない',
        close: 'イチゴ',
        correct_comment: '何でも食べます！',
        close_comment: '美味しくはなさそうだけど、おかわりはする。',
        incorrect_comment:  '飛びつくくらい大好き！',
    },
    {
        //問題4
        quizId: '04',
        sentence: '夜、いつも寝る位置はどこ？',
        answers: ['飼い主の頭の上', '飼い主の顔の横', 'ベッドには乗らない'],
        correct: '飼い主の頭の上',
        close: '飼い主の顔の横',
        correct_comment: 'ときどき顔の上に足が乗る。',
        close_comment: '生後8ヶ月くらいまでは、横でした。',
        incorrect_comment:  'シーツ好きなので乗ります！',
    },
    {
        //問題5
        quizId: '05',
        sentence: '最近お気に入りのおもちゃはどれ？',
        answers: ['羽根付き猫じゃらし', 'ねずみ付き猫じゃらし','ちゅ～る型の起き上がりこぼし' ],
        correct: 'ねずみ付き猫じゃらし',
        close: '羽根付き猫じゃらし',
        correct_comment: '最近はずっとこれで遊んでます。',
        close_comment: '少し前のお気に入り。',
        incorrect_comment:  'あまり好きじゃないみたい...。',
    },
    {
        //問題6
        quizId: '06',
        sentence: '飼い主に抱っこされたらどうなる？',
        answers: ['ゴロゴロ', '寝る', '噛みつく'],
        correct: 'ゴロゴロ',
        close: '寝る',
        correct_comment: '抱っこした瞬間、ゴロゴロ...。',
        close_comment: '膝に乗せると寝る。',
        incorrect_comment:  '噛みつかない！',
    },
    {
        //問題7
        quizId: '07',
        sentence: 'インターフォンが鳴るとどうなる？',
        answers: [ '急いで逃げる', '気にしない','シャー！(威嚇)'],
        correct: '急いで逃げる',
        close: 'シャー！(威嚇)',
        correct_comment: '一瞬で目の前からいなくなる',
        close_comment: '人が入ってくると、シャー！',
        incorrect_comment:  '気にしなくなってほしい！',
    },
    {
        //問題8
        quizId: '08',
        sentence: '触ると怒る場所はどこ？',
        answers: ['お腹', 'おしり', 'しっぽ'],
        correct: 'お腹',
        close: 'おしり',
        correct_comment: 'でも実は、歩いてるときなら大丈夫。',
        close_comment: 'あまり好きではないけど、許される。',
        incorrect_comment:  'まったく気にしない！',
    },
    {
        //問題9
        quizId: '09',
        sentence: '朝起きたとき、していたイタズラは？',
        answers: ['布団をビリビリに破いていた', 'おもちゃ箱を壊してお気に入りのおもちゃで遊んでいた', '観葉植物を床に散らばしていた'],
        correct: '観葉植物を床に散らばしていた',
        close: 'おもちゃ箱を壊してお気に入りのおもちゃで遊んでいた',
        correct_comment: '3年かけて育てた植物たちが全滅でした。',
        close_comment: '数か月かけてやったイタズラ。',
        incorrect_comment:  'ベッド周りはお気に入りなので、イタズラしません！',
    },
    {
        //問題10
        quizId: '10',
        sentence: '誕生月(推定)はいつ？',
        answers: ['5月', '6月','7月'],
        correct: '5月',
        close: '6月',
        correct_comment: '5月初旬！',
        close_comment: '6月にお家に来ました。',
        incorrect_comment:  'もう少し前です！',
    }
];

//質問をランダムにする
function shuffleQuiz(array) {
    for (let i = (array.length - 1); 0 < i; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let selected = array[i];
      array[i] = array[random];
      array[random] = selected;
    }
    return array;
  }
  let quizId = ["01", "02", "03", "04", "05","06","07","08","09","10"];
  shuffleQuiz(quizId);

let question_count = 0; // 何問答えたのか
const question_all = 10; // question_list.length; // 問題の総数

const question_display = () => {
    document.getElementById('question_sentence').innerText = question_list[question_count].sentence;
    let answer_count = 0;
    // 問題文1の選択肢の数を取得
    while (answer_count < question_list[question_count].answers.length) {
        // buttonタグのvalue
        // 問題1の選択肢をいれる
        document.getElementsByTagName('button')[answer_count].value = question_list[question_count].answers[answer_count];
        // buttonタグの中のclass(answer_text)の中の選択肢を入れる
        document.getElementsByClassName('answer_text')[answer_count].innerText = question_list[question_count].answers[answer_count];
        answer_count++; //処理の最後にanswer_countに1追加する
    }
}

question_display(); // 1問目用の呼び出し

let answer_button = document.getElementsByTagName('button');
let score = 0; // 正解数

// answer_button.length ボタンタグの数 
// ループ分を使うことで、配列0~4を使って正誤判定が一括で出来る
for (let i = 0; i < answer_button.length; i++) {
    answer_button[i].addEventListener('click', () => {
        // 正誤判定
        // 値がquestion_listの'correct'になっているanswer_buttonに'正解'を表示させる
        if (answer_button[i].value == question_list[question_count].correct) {
            document.getElementById('result_message').innerHTML = '正解！！<br>'+ question_list[question_count].correct_comment;
            document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
            document.getElementById('btn_audio').play();
            score += 10; //score += 1;1を代入して、プラスしていく。10にすると+10。
        } else if (answer_button[i].value == question_list[question_count].close) {
            document.getElementById('result_message').innerHTML = '惜しい！<br>'+ question_list[question_count].close_comment;
            document.getElementById('btn_audio3').currentTime = 0; //連続クリックに対応
            document.getElementById('btn_audio3').play();
            score += 5;
        } else {
            document.getElementById('result_message').innerHTML = '不正解...<br>'+ question_list[question_count].incorrect_comment;
            document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
            document.getElementById('btn_audio2').play();
        }
        setTimeout(function(){
            // 「正解」「不正解」のところを空欄にする
            document.getElementById('result_message').innerHTML = '';
        },1000);
        question_count++; // 正誤判定の後に答えた問題数に+1

        // 答えたら問題の切り替え
        if (question_count < question_all) {
            setTimeout(function(){
                question_display(); // 2問目以降
            },1000);
        }  else if (score >= 100) {
            setTimeout(function(){
                document.getElementById('result_message').innerHTML = '問題が解き終わりました！<br>100点満点中、'+ score + '点です！全問正解！すごい';
            },1000);
        }  else if (60 <= score && score < 100) {
            setTimeout(function(){
                document.getElementById('result_message').innerHTML = '問題が解き終わりました！<br>100点満点中、'+ score + '点です！もう少しで、うちの子マニア！';
            },1000);
        }  else if (10 <= score && score < 60) {
            setTimeout(function(){
                document.getElementById('result_message').innerHTML = '問題が解き終わりました！<br>100点満点中、'+ score + '点です！まだまだできるはず 。。。';
            },1000);
        }   else if (score == 0) {
            setTimeout(function(){
                document.getElementById('result_message').innerHTML = '問題が解き終わりました！<br>100点満点中、'+ score + '点です...。全問不正解。次はがんばろう...。';
            },1000);
        }
    });   
}
