let div = document.createElement("div");
div.setAttribute("class","main");

let frmgrp = document.createElement("div");
frmgrp.setAttribute("class","form-group");

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("placeholder","Enter country name");
input.setAttribute("id","main1");
input.style.width="500px";

let butt = document.createElement("button");
butt.setAttribute("type","button");
butt.classList.add("btn","btn-primary");
butt.innerHTML="Search";
butt.style.marginLeft="200px";
butt.style.marginTop="10px";
butt.addEventListener("click",search);

let active = document.createElement("div");
active.setAttribute("id","active");
let death = document.createElement("div");
death.setAttribute("id","death");
let recover = document.createElement("div");
recover.setAttribute("id","recover");

div.append(frmgrp);
frmgrp.append(input,butt,active,death,recover);
document.body.append(div);

async function search(){
    let cname = document.getElementById("main1").value;
    let data = await fetch(`https://api.covid19api.com/dayone/country/${cname}`);
    let data1 = await data.json();
    console.log(data1);
    var index = data1.length-1;
    active.innerHTML=`Total Active Cases: ${data1[index].Active}`;
    death.innerHTML=`Total Death: ${data1[index].Deaths}`;
    recover.innerHTML=`Total Recovered: ${data1[index].Recovered}`;
}