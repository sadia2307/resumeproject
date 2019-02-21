var param;
var paramValue;
var query=window.location.search.substring(1).split("?");
console.log(query);
query.map((item)=>{
param=item.split("=");
console.log(item);
console.log(param);
paramValue=parseInt(param[1]);
console.log(paramValue);
})
var open=indexedDB.open("Resume Builder",1);
open.onsuccess=function(e){
  var request=e.target.result;
  var transaction=request.transaction("form_data","readwrite");
  var storeDB=transaction.objectStore("form_data");
  var finalData=storeDB.get(paramValue);
  console.log(finalData);
  finalData.onsuccess=function(event){
    console.log(event.target.result);
    display(event.target.result);
    career(event.target.result);
    education(event.target.result);
  }
  }
  var parent= document.querySelector(".parent");
  var child1=document.querySelector(".leftchild")
function display(data){
  var profileIcon=document.createElement("img");
  profileIcon.src="man.svg";
  profileIcon.alt="display Picture";
child1.appendChild(profileIcon);

var name=document.createElement("h2");
name.textContent=data.name;
child1.appendChild(name);

var number=document.createElement("p");
number.textContent=data.number;
child1.appendChild(number);

var email=document.createElement("a");
email.textContent=data.email;
child1.appendChild(email);
}
var child2=document.querySelector(".rightchild");
function career(data){
  var career=document.createElement("h2");
  career.textContent="Career Objective";
child2.appendChild(career);

var hr=document.createElement("hr");
child2.appendChild(hr);

var career=document.createElement("p");
career.textContent=data.career;
child2.appendChild(career);
}
function education(pi){
var heading=document.createElement("h2");
heading.textContent="Graduation";
child2.appendChild(heading);
var hr=document.createElement("hr");
child2.appendChild(hr);
pi.education.map((item)=>{
  var ul=document.createElement("ul");
  child2.appendChild(ul);

  var li=document.createElement("li");
  li.textContent=item.degree;
  ul.appendChild(li);

  var li2=document.createElement("li");
  li2.textContent=item.branch;
  ul.appendChild(li2);

  var li3=document.createElement("li");
  li3.textContent=item.college;
  ul.appendChild(li3);

  var li4=document.createElement("li");
  li4.textContent=item.percentage;
  ul.appendChild(li4);

})
}
