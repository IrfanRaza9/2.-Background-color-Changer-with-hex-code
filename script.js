function changecolors(){
    var hex_num =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    //  var hex_num=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hex_code = '';
    for(var i=0;i<6;i++){
        var random_index = Math.floor(Math.random()*hex_num.length);
        // console.log(random_index);
        
        hex_code+=hex_num[random_index];

        // console.log(hex_code);
    }

    document.getElementById("hex-code").innerHTML=hex_code;
    document.getElementsByTagName("body")[0].style.background="#"+hex_code;
}