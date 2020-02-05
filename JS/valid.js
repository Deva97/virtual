function validform(){

    var x=document.getElementById("1").value;
    var y=document.getElementById("2").value;
    var z=document.getElementById("3").value;
    if(x==""||y==""||z=="")
    window.alert("enter Subject marks");
else{
 document.getElementById("res1").value=Number(x)+Number(y)+Number(x);
 document.getElementById("res2").value=((Number(x)+Number(y))+Number(x))/3;
 document.getElementById("res3").value=Math.max(x,y,z);
}}
function onmouse()
{
    document.getElementById("head1").style.color="red";
}
function outmouse()
{
    document.getElementById("head1").style.color="black";
}
function pre(x)
{  

    if(document.getElementById(x).value=="")
        { document.getElementById(x).focus();
         
         document.getElementById(x).style.borderColor="green";}

}
function move()
{
    document.getElementById("1").focus();
    window.alert("ONLY FOR ADMIN PURPOSE");
    document.getElementById("0").style.borderColor="red";
}
function regis()
{        document.getElementById("0").value=Math.floor(Math.random()*100000);

}