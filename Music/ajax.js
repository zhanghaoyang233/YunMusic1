
var inputBox=document.getElementById('search');
    inputBox.onclick=function(){
         var text=document.getElementById('searchbox').value;
        console.log(text);
   var xhr=new XMLHttpRequest();
   xhr.open('GET','http://musicapi.leanapp.cn/search?keywords='+text);
        xhr.onreadystatechange=function(){
            // readyState == 4说明请求已完成
            if(xhr.readyState==4){
                if(xhr.status==200 || xhr.status==304){
                   var json=JSON.parse(xhr.responseText);
                   document.getElementById("content1").style.display="none";
                   document.getElementById("content2").style.display="block";
                   var text1=document.getElementById("content2");
                   console.log(json.result);
                   for(var i=0;i<=30;i++){
                   text1.childNodes[i].nodeValue= json.result.songs[i].name;
                   }
                }
            }
        }
        xhr.send();
    }
    var back1=document.getElementById("back");
    back1.onclick=function(){
        document.getElementById("content1").style.display="block";
        document.getElementById("content2").style.display="none";
    }