let inp=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>
{
    let ul=document.querySelector("ul");

    ul.innerText="";
let c=document.querySelector("input").value;
let r= await getData(c);

for(coun of r)
{
let li=document.createElement("li");
li.innerText=coun.name;
ul.appendChild(li);
}
})

async function getData(country)
{

    try{
    let url="http://universities.hipolabs.com/search?country=";
    let d=await axios.get(url+country);
    return d.data;
    }
    catch{
        return [];
    }
}
