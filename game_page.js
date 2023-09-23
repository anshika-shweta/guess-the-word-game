p1n=localStorage.getItem("p1name");
p2n=localStorage.getItem("p2name");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1n+" : ";
document.getElementById("p2name").innerHTML=p2n+" : ";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="question turn - "+p1n;
document.getElementById("player_answer").innerHTML="answer turn - "+p2n;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    c1=word.charAt(1);
    ld2=Math.floor(word.length/2);
    c2=word.charAt(ld2);
    lm1=word.length-1;
    c3=word.charAt(lm1);
    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    console.log(r3);
    qw="<h4 id='word_display'>Q. "+r3+"</h4>";
    ibox="<br>Answer : <input type='text' id='input_check_box'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=qw+ibox+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
qt="p1";
at="p2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word)
    {
        if(at=="p1")
        {
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
        }
        else{
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    if(qt=="p1")
    {
        qt="p2";
        document.getElementById("player_question").innerHTML="question turn - "+p2n;
    }
    else{
        qt="p1";
        document.getElementById("player_question").innerHTML="question turn - "+p1n;
    }
    if(at=="p1")
    {
        at="p2";
        document.getElementById("player_answer").innerHTML="answer turn - "+p2n;
    }
    else{
        at="p1";
        document.getElementById("player_answer").innerHTML="answer turn - "+p1n;
    }
    document.getElementById("output").innerHTML="";
}