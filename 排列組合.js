<script>
function com(){
    var s = eval(document.getElementById('s').value);
    var n = document.getElementById('n').value;
    var r = document.getElementById('r');
    r.innerHTML = "";
    for (var i=0;i<Math.pow(2, s.length);i++){
        var a = 0;
        var b = "";
        for (var j=0;j<s.length;j++){
            if (i>>j&1){
                a++;
                b += s[j] + " ";
            }
        }
        if (a==n){
            r.innerHTML += (b+"<br/>");
        }
    }
}
</script>
数据:<input id="s" name="s" size="30" value="[1,2,3,4,5,6]">
取值量:<input id="n" name="n" size="2" value="4"/>
<button onclick="com()">计算组合</button>
<div id="r"></div>
