var req=new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload=function()
{
    var res=JSON.parse(req.response);
    //console.log(res);
    for(var i=0;i<res.length;i++){


    console.log(res[i].name,res[i].flag,res[i].capital,res[i].region,res[i].subregion);
    }
}
