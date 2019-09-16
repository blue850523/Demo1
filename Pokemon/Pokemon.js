var btn = document.getElementById("btn");

var handler = function () {
    var PlayerChoise = parseInt(prompt("請選擇出戰的神奇寶貝0 妙蛙種子,1 小火龍,2 傑尼龜", 0));
    var ComputerChoise = Math.floor(Math.random() * 3);
    if(PlayerChoise===0){
        alert("你派出妙蛙種子!");
        document.getElementById("PPokemon").src="001.png";
        document.getElementById("PPokemon").style.transform="scaleX(-1)"; //反轉圖片
        if(ComputerChoise===0){
            alert("對方也派出了妙蛙種子!平分秋色!");
            document.CPokemon.src="001.png";
        }
        else if(ComputerChoise===1){
            alert("對方派出了小火龍!屬性相剋,你輸了!");
            document.CPokemon.src="004.png";
        }
        else if(ComputerChoise===2){
            alert("對方派出了傑尼龜!你贏了!");
            document.CPokemon.src="007.png";
        }
    }
    else if(PlayerChoise===1){
        alert("你派出小火龍!");
        document.getElementById("PPokemon").src="004.png";
        document.getElementById("PPokemon").style.transform="scaleX(-1)";
        if(ComputerChoise===0){
            alert("對方派出了妙蛙種子!你贏了!");
            document.CPokemon.src="001.png";
        }
        else if(ComputerChoise===1){
            alert("對方也派出了小火龍!平分秋色!");
            document.CPokemon.src="004.png";
        }
        else if(ComputerChoise===2){
            alert("對方派出了傑尼龜!屬性相剋,你輸了!");
            document.CPokemon.src="007.png";
        }
    }
    else if(PlayerChoise===2){
        alert("你派出傑尼龜!");
        document.getElementById("PPokemon").src="007.png";
        document.getElementById("PPokemon").style.transform="scaleX(-1)";
        if(ComputerChoise===0){
            alert("對方派出了妙蛙種子!屬性相剋,你輸了!");
            document.CPokemon.src="001.png";
        }
        else if(ComputerChoise===1){
            alert("對方派出了小火龍!你贏了!");
            document.CPokemon.src="004.png";
        }
        else if(ComputerChoise===2){
            alert("對方也派出了傑尼龜!平分秋色");
            document.CPokemon.src="007.png";
        }
    }
    else if(PlayerChoise===150){
        alert("你派出超夢!");
        document.getElementById("PPokemon").src="150.png";
        document.getElementById("PPokemon").style.transform="scaleX(-1)";
        if(ComputerChoise===0){
            alert("對方派出了妙蛙種子!你的超夢秒殺了對手!");
            document.CPokemon.src="001.png";
        }
        else if(ComputerChoise===1){
            alert("對方派出了小火龍!你的超夢秒殺了對手!");
            document.CPokemon.src="004.png";
        }
        else if(ComputerChoise===2){
            alert("對方派出了傑尼龜!你的超夢秒殺了對手!");
            document.CPokemon.src="007.png";
        }
    }
    else{
        alert("請選擇你要派的神奇寶貝!");
    }
};
btn.addEventListener("click", handler);