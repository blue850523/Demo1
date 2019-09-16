function Player(name,hp){  //建構物件的函式
  //this 代表新建的空白物件
    this.Name=name;
    this.HP=hp;
    this.fight=function(){
        if(this.HP<=0)
        {
            alert(this.Name+"已經死亡無法進行戰鬥");
        }
        else
        {
            this.HP=this.HP-20;
            alert(this.Name+"因為戰鬥扣了20HP");
        }
    };
    this.rest=function(){
        if(this.HP>=100)
        {
            alert(this.Name+"生命已達100!!");
        }
        else
        {
            if(this.HP<=0)
            {
                alert(this.Name+"已經死亡");
            }
            else
            {
                this.HP=this.HP+10;
                alert(this.Name+"休息回復了10Hp");
            }
        }
    };
    this.report=function(){
        if(this.HP<=0)
        {
            alert(this.Name+"已經死亡");
        }
        else
        {
            alert(this.Name+": "+this.HP+"HP");
           // var spanObj=document.getElementById("reportspan");
           // spanObj.innerHTML=this.Name+":"+this.HP+"HP";
        }
    };
}
// var player1=new Player("Jay",100);
// player1.report();
// var player2=new Player("Faker",40);
// player2.report();
var btn = document.getElementById("new");
var handler = function () {
    var newplayername = prompt("請設定角色名稱","小智");
    var newplayerhp = parseInt(prompt("請設定角色血量(不得超過100)",100)); //paresInt將字串轉換成整數
    if(newplayerhp<=100){
        var player1=new Player(newplayername,newplayerhp);
    }
    else{
        alert("血量不得超過100!");
    }
    var btn = document.getElementById("report");
    var handler2 = function () {
        player1.report();
    }
    btn.addEventListener("click", handler2);

    var btn = document.getElementById("fight");
    var handler3 = function () {
        player1.fight();
    }
    btn.addEventListener("click", handler3);

    var btn = document.getElementById("rest");
    var handler4 = function () {
        player1.rest();
    }
    btn.addEventListener("click", handler4);
}
btn.addEventListener("click", handler);
