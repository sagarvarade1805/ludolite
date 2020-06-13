var p1=-100;
var p2=-100;
var p3=-100;
var p4=-100;
var p5=0;
var p6=0;
var str1;
var str;
var stra;
var strb;
if(p1!=0 && p2!=0 && p3!=0 && p4!=0 ){
    $("#bl0").css({
        "background" : "blue"
    });
}
if(p1!=31 && p2!=31 && p3!=31 && p4!=31 ){
    $("#bl31").css({
        "background" : "cornflowerblue"
    });
}
if(p1!=16 && p2!=16 && p3!=16 && p4!=16 ){
    $("#bl16").css({
        "background" : "green"
    });
}
if(p1!=15 && p2!=15 && p3!=15 && p4!=15 ){
    $("#bl15").css({
        "background" : "yellowgreen"
    });
}
function spin(fla){
    str=document.getElementById("number").value;
    if(fla===1){
        str=document.getElementById("number").value;
    }
    else if(fla===0){
        str=Math.floor(Math.random()*6)+1;
        document.querySelector('#h').innerText=str;
    }
    if(p1!=0 && p2!=0 && p3!=0 && p4!=0 ){
        $("#bl0").css({
            "background" : "blue"
        });
    }
    if(p1!=31 && p2!=31 && p3!=31 && p4!=31 ){
        $("#bl31").css({
            "background" : "cornflowerblue"
        });
    }
    if(p1!=16 && p2!=16 && p3!=16 && p4!=16 ){
        $("#bl16").css({
            "background" : "green"
        });
    }
    if(p1!=15 && p2!=15 && p3!=15 && p4!=15 ){
        $("#bl15").css({
            "background" : "yellowgreen"
        });
    }
    stra= $("#token1").text();
    strb= $("#token2").text();
    str1= $("#text-turn").text();
    p1=parseInt(p1);
    p2=parseInt(p2);
    p3=parseInt(p3);
    p4=parseInt(p4);
    str=parseInt(str);
    

    
    if(stra==" " && str1=="Player-1 turn"){
        if((p1+str)==32){
            $("#bl"+p1).css({
                "background" : "white"
            });
            alert("Player 1 reached ");
            p1=-100;
            return false;
        }
        else if((p2+str)==32){
            $("#bl"+p2).css({
                "background" : "white"
            });
            alert("Player 1 reached ");
            p2=-100;
            return false;
        }
        else if((p1+str)>32 && (p2+str)>32){
            
            alert("You cant move either Pawns");
            str1="Player-2 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        else if((p1+str)<32 &&(p2+str)<32){
            $("#bl"+p1).unbind('click').click(function(){
                if((p1+str)==p2){
                    alert("You cant move this pawn You have 2nd pawn on that place\nPlease move 2nd pawn");
                    return false;
                }
                if((p1+str)==p3){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    if(strb=="⋅"){
                        strb="⋅⋅";
                    }
                    else if(strb==" "){
                        strb="⋅";
                    }
                    p3=-100;
                    p5=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                if((p1+str)==p4){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    strb="⋅";
                    p4=-100;
                    p6=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }

                $("#bl"+p1).css({
                    "background" : "white"
                });
                p1=p1+str;
                console.log("p1 clicked");
                document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            });
            $("#bl"+p2).unbind('click').click(function(){
                if((p2+str)==p1){
                    alert("You cant move this pawn You have 1st pawn on that place\nPlease move 1st pawn");
                    return false;
                }
                if((p2+str)==p3){
                    $("#bl"+p2).css({
                        "background" : "white"
                    });
                    p2=p2+str;
                    console.log("p2 clicked");
                    document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    
                    if(strb=="⋅"){
                        strb="⋅⋅";
                    }
                    else if(strb==" "){
                        strb="⋅";
                    }
                    p3=-100;
                    p5=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                if((p2+str)==p4){
                    $("#bl"+p2).css({
                        "background" : "white"
                    });
                    p2=p2+str;
                    console.log("p2 clicked");
                    document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    strb="⋅";
                    p4=-100;
                    p6=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                $("#bl"+p2).css({
                    "background" : "white"
                });
                p2=p2+str;
                console.log("p2 clicked");
                document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            });
            
        }
        else if((p1+str)>32){
            if((p2+str)==p1){
                alert("You cant move 2nd pawn also\nYou have nothing to play\nPlayer 2 turn");
                str1="Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
            $("#bl"+p1).click(function(){
                alert("You cant...");
                if((p2+str)==p1){
                    alert("You cant move 2nd pawn also\nYou have nothing to play\nPlayer 2 turn");
                    str1="Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    return false;
                }
            });

            if((p2+str)<32){
                if((p2+str)==p3){
                    $("#bl"+p2).css({
                        "background" : "white"
                    });
                    p2=p2+str;
                    console.log("p2 clicked");
                    document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    
                    if(strb=="⋅"){
                        strb="⋅⋅";
                    }
                    else if(strb==" "){
                        strb="⋅";
                    }
                    p3=-100;
                    p5=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                if((p2+str)==p4){
                    $("#bl"+p2).css({
                        "background" : "white"
                    });
                    p2=p2+str;
                    console.log("p2 clicked");
                    document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    strb="⋅";
                    p4=-100;
                    p6=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }

                $("#bl"+p2).css({
                    "background" : "white"
                });
                p2=p2+str;
                document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
            }
            str1="Player-2 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        else if((p2+str)>32){
            if((p1+str)==p2){
                alert("You cant move 2nd pawn also\nYou have nothing to play\nPlayer 2 turn");
                str1="Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
            $("#bl"+p2).click(function(){
                alert("You cant...Please move 2nd pawn");
            });
            if((p1+str)<32){
                if((p1+str)==p3){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    if(strb=="⋅"){
                        strb="⋅⋅";
                    }
                    else if(strb==" "){
                        strb="⋅";
                    }
                    p3=-100;
                    p5=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                if((p1+str)==p4){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    strb="⋅";
                    p4=-100;
                    p6=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                $("#bl"+p1).css({
                    "background" : "white"
                });
                p1=p1+str;
                document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
            }
            str1="Player-2 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }


    }
    else if(stra=="⋅" && str1=="Player-1 turn"){

        if(str==6){
            $("#player1").click(function(){
                p2=0;
                document.querySelector('#bl'+p2).style.backgroundImage="url('lodu1 - Copy.jpg')";
                stra=" ";
                document.getElementById("token1").innerHTML=stra;
                str1="Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            });
            if((p1+str)<32){

                $("#bl"+p1).click(function(){
                    if((p1+str)==p3){
                        $("#bl"+p1).css({
                            "background" : "white"
                        });
                        p1=p1+str;
                        console.log("p1 clicked");
                        document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                        str1= "Player-2 turn";
                        document.getElementById("text-turn").innerHTML=str1;
                        if(strb=="⋅"){
                            strb="⋅⋅";
                        }
                        else if(strb==" "){
                            strb="⋅";
                        }
                        p3=-100;
                        p5=0;
                        alert('pawn gone');
                        document.getElementById("token2").innerHTML=strb;
                        return false;
                    }
                    if((p1+str)==p4){
                        $("#bl"+p1).css({
                            "background" : "white"
                        });
                        p1=p1+str;
                        console.log("p1 clicked");
                        document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                        str1= "Player-2 turn";
                        document.getElementById("text-turn").innerHTML=str1;
                        strb="⋅";
                        p4=-100;
                        p6=0;
                        alert('pawn gone');
                        document.getElementById("token2").innerHTML=strb;
                        return false;
                    }
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    return false;
                });
            }
            if((p1+str)==32){
                alert("player 1.1 Reached Home");
                $("#bl"+p1).css({
                    "background" : "white"
                });
                p1=-1000;
                str1="Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
            

        }
        else {
            if((p1+str)==32){
                alert("player 1.1 Reached Home");
                $("#bl"+p1).css({
                    "background" : "white"
                });
                p1=-1000;
                str1="Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
            else if((p1+str)<32){
                if((p1+str)==p3){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    if(strb=="⋅"){
                        strb="⋅⋅";
                    }
                    else if(strb==" "){
                        strb="⋅";
                    }
                    p3=-100;
                    p5=0;
                    alert('pawn gone');
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                if((p1+str)==p4){
                    $("#bl"+p1).css({
                        "background" : "white"
                    });
                    p1=p1+str;
                    console.log("p1 clicked");
                    document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    strb="⋅";
                    alert('pawn gone');
                    p4=-100;
                    p6=0;
                    document.getElementById("token2").innerHTML=strb;
                    return false;
                }
                $("#bl"+p1).css({
                    "background" : "white"
                });
                p1=p1+str;
                document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
            else if((p1+str)>32){
                alert("You can do anything");
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            }
        }


    }
    else if(stra=="⋅⋅" && str1=="Player-1 turn"){
        if(str==6){
            p1=0;
            document.querySelector('#bl'+p1).style.backgroundImage="url('lodu1 - Copy.jpg')";
            stra="⋅";
            document.getElementById("token1").innerHTML=stra;
            str1="Player-2 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        else{
            str1="Player-2 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
    }























   
if(strb==" " && str1=="Player-2 turn"){
    if((p5+str)==32){
        $("#bl"+p3).css({
            "background" : "white"
        });
        alert("Player 2 reached ");
        p3=-1000;
        p5=-1000;
        return false;
    }
    else if((p6+str)==32){
        $("#bl"+p4).css({
            "background" : "white"
        });
        alert("Player 2 reached ");
        p4=-1000;
        p6=-1000;
        return false;
    }
    else if((p5+str)>32 && (p6+str)>32){
        str1="Player-1 turn";
        alert("You cant move either Pawns\nPlayer turn");
        document.getElementById("text-turn").innerHTML=str1;
        return false;
    }
    else if((p5+str)<32 && (p6+str)<32){
        $("#bl"+p3).unbind('click').click(function(){
            if((p5+str)==p6){
                alert("You cant move this pawn You have 2nd pawn on that place\nPlease move 2nd pawn");
                return false;
            }
            if((p3+str)>32){
                $("#bl"+p3).css({
                    "background" : "white"
                });
                p3=p3-32;
            }
            if((p3+str)==p1){
                $("#bl"+p3).css({
                    "background" : "white"
                });
                $("#bl"+p3+32).css({
                    "background" : "white"
                });
                p3=p3+str;
                p5=p5+str;
                console.log("p3 clicked");
                document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                
                if(stra=="⋅"){
                    stra="⋅⋅";
                }
                else if(stra==" "){
                    stra="⋅";
                }
                p1=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            if((p3+str)==p2){
                $("#bl"+p3).css({
                    "background" : "white"
                });
                $("#bl"+p3+32).css({
                    "background" : "white"
                });
                p3=p3+str;
                p5=p5+str;
                console.log("p3 clicked");
                document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                stra="⋅";
                p2=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }

            $("#bl"+p3).css({
                "background" : "white"
            });
            $("#bl"+p3+32).css({
                "background" : "white"
            });
            p3=p3+str;
            p5=p5+str;
            console.log("p3 clicked");
            document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        });
        $("#bl"+p4).unbind('click').click(function(){
            if((p6+str)==p5){
                alert("You cant move this pawn You have 2nd pawn on that place\nPlease move 2nd pawn");
                return false;
            }
            if((p4+str)>32){
                $("#bl"+p4).css({
                    "background" : "white"
                });
                p4=p4-32;

            }
            if((p4+str)==p1){
                $("#bl"+p4).css({
                    "background" : "white"
                });
                $("#bl"+p4+32).css({
                    "background" : "white"
                });
                p4=p4+str;
                p6=p6+str;
                console.log("p4 clicked");
                document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-1 turn";
                document.getElementById("text-turn").innerHTML=str1;
                
                if(stra=="⋅"){
                    stra="⋅⋅";
                }
                else if(stra==" "){
                    stra="⋅";
                }
                p1=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            if((p4+str)==p2){
                $("#bl"+p4).css({
                    "background" : "white"
                });
                $("#bl"+p4+32).css({
                    "background" : "white"
                });
                p4=p4+str;
                p6=p6+str;
                console.log("p4 clicked");
                document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-1 turn";
                document.getElementById("text-turn").innerHTML=str1;
                stra="⋅";
                p2=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }

            $("#bl"+p4).css({
                "background" : "white"
            });
            $("#bl"+p4+32).css({
                "background" : "white"
            });
            p4=p4+str;
            p6=p6+str;
            console.log("p4 clicked");
            document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        });
    }
    else if((p5+str)>32){
        if((p6+str)==p5){
            alert("You cant move 2nd pawn also\nYou have nothing to play\nPlayer 1 turn");
            str1="Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        $("#bl"+p3).unbind().click(function(){
            alert("You cant move this...\nMoving other pawn");
        });
        if((p6+str)<32){
            if((p4+str)>32){
                p4=p4-32;
            }
            if((p4+str)==p1){
                $("#bl"+p4).css({
                    "background" : "white"
                });
                $("#bl"+p4+32).css({
                    "background" : "white"
                });
                p4=p4+str;
                p6=p6+str;
                console.log("p4 clicked");
                document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-1 turn";
                document.getElementById("text-turn").innerHTML=str1;
                
                if(stra=="⋅"){
                    stra="⋅⋅";
                }
                else if(stra==" "){
                    stra="⋅";
                }
                p1=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            if((p4+str)==p2){
                $("#bl"+p4).css({
                    "background" : "white"
                });
                $("#bl"+p4+32).css({
                    "background" : "white"
                });
                p4=p4+str;
                p6=p6+str;
                console.log("p4 clicked");
                document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-1 turn";
                document.getElementById("text-turn").innerHTML=str1;
                stra="⋅";
                p2=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            $("#bl"+p4).css({
                "background" : "white"
            });
            $("#bl"+p4+32).css({
                "background" : "white"
            });
            p4=p4+str;
            
            p6=p6+str;
            document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
        }
        str1= "Player-1 turn"
        document.getElementById("text-turn").innerHTML=str1;
        return false;
    }
    else if((p6+str)>32){
        if((p5+str)==p6){
            alert("You cant move 2nd pawn also\nYou have nothing to play\nPlayer 1 turn");
            str1="Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        $("#bl"+p4).click(function(){
            alert("You cant...");
        });
        if((p5+str)<32){
            if((p3+str)>32){
                p3=p3-32;
            }
            if((p3+str)==p1){
                $("#bl"+p3).css({
                    "background" : "white"
                });
                $("#bl"+p3+32).css({
                    "background" : "white"
                });
                p3=p3+str;
                p5=p5+str;
                console.log("p3 clicked");
                document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                
                if(stra=="⋅"){
                    stra="⋅⋅";
                }
                else if(stra==" "){
                    stra="⋅";
                }
                p1=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            if((p3+str)==p2){
                $("#bl"+p3).css({
                    "background" : "white"
                });
                $("#bl"+p3+32).css({
                    "background" : "white"
                });
                p3=p3+str;
                p5=p5+str;
                console.log("p3 clicked");
                document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-2 turn";
                document.getElementById("text-turn").innerHTML=str1;
                stra="⋅";
                p2=-100;
                alert('pawn gone');
                document.getElementById("token1").innerHTML=stra;
                return false;
            }
            $("#bl"+p3).css({
                "background" : "white"
            });
            $("#bl"+p3+32).css({
                "background" : "white"
            });
            p3=p3+str;
            p5=p5+str;
            document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
        }
        str1= "Player-1 turn";
        document.getElementById("text-turn").innerHTML=str1;
        return false;
    }


}
else if(strb=="⋅" && str1=="Player-2 turn"){
    if(str==6){

        $("#player2").click(function(){
            p4=16;
            p6=0;
            document.querySelector('#bl'+p4).style.backgroundImage="url('lodu2 - Copy.jpg')";
            strb=" ";
            document.getElementById("token2").innerHTML=strb;
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;

        });
        if((p5+str)<32){
            $("#bl+p3").click(function(){
                if((p3+str)>32){
                    p3=p3-32;
                }
                if((p3+str)==p1){
                    $("#bl"+p3).css({
                        "background" : "white"
                    });
                    $("#bl"+p3+32).css({
                        "background" : "white"
                    });
                    p3=p3+str;
                    p5=p5+str;
                    console.log("p3 clicked");
                    document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    
                    if(stra=="⋅"){
                        stra="⋅⋅";
                    }
                    else if(stra==" "){
                        stra="⋅";
                    }
                    p1=-100;
                    alert('pawn gone');
                    document.getElementById("token1").innerHTML=stra;
                    return false;
                }
                if((p3+str)==p2){
                    $("#bl"+p3).css({
                        "background" : "white"
                    });
                    $("#bl"+p3+32).css({
                        "background" : "white"
                    });
                    p3=p3+str;
                    p5=p5+str;
                    console.log("p3 clicked");
                    document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                    str1= "Player-2 turn";
                    document.getElementById("text-turn").innerHTML=str1;
                    stra="⋅";
                    p2=-100;
                    alert('pawn gone');
                    document.getElementById("token1").innerHTML=stra;
                    return false;
                }
                $("#bl"+p3).css({
                    "background" : "white"
                });
                $("#bl"+p3+32).css({
                    "background" : "white"
                });
                p3=p3+str;
                p5=p5+str;
                console.log("kagaagg");
                document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
                str1= "Player-1 turn";
                document.getElementById("text-turn").innerHTML=str1;
                return false;
            });

        }
        if((p5+str)==32){
            $("#bl"+p3).css({
                "background" : "white"
            });
            alert("Player 2.1 reached ");
            p3=-1000;
            p5=-1000;
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }

    }
    else{
        if((p5+str)==32){
            $("#bl"+p3).css({
                "background" : "white"
            });
            alert("Player 2.1 reached ");
            p3=-1000;
            p5=-1000;
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
        else if((p5+str)<32){
            $("#bl"+p3).css({
                "background" : "white"
            });
            if((p3+str)>32){
                p3=p3-32;
            }

            $("#bl"+p3+32).css({
                "background" : "white"
            });
            p3=p3+str;
            p5=p5+str;
            document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }

        else if((p5+str)>32){
            alert("You can do anything");
            str1= "Player-1 turn";
            document.getElementById("text-turn").innerHTML=str1;
            return false;
        }
    }
}
else if(strb=="⋅⋅" && str1=="Player-2 turn"){
    if(str==6){
        p3=16;
        p5=0;
        document.querySelector('#bl'+p3).style.backgroundImage="url('lodu2 - Copy.jpg')";
        strb="⋅";
        document.getElementById("token2").innerHTML=strb;
        str1= "Player-1 turn";
        document.getElementById("text-turn").innerHTML=str1;
    }
    else{
        str1= "Player-1 turn";
        document.getElementById("text-turn").innerHTML=str1;
        return false;
    }
}
}
