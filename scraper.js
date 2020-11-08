function listHub(unit){
 arr = [];
 unit.children().toArray().forEach((v)=>{arr.push(v.innerHTML)});
 return arr;
}

totalJSON = {"course":[]}

$(".coursearch-results").children().toArray().forEach((v)=>{
str = "{\"id\":";
str += "\""+$(v)[0].id+"\", \"hub\":[";
units = listHub($(v).find('.coursearch-result-hub-list'));
units.forEach((v, i)=>{
 str += "\""+v+"\"";
 if(i != units.length-1){
  str+=","
 }
});
str += "]}"
obj = JSON.parse(str);
totalJSON["course"].push(obj);
});
console.log(JSON.stringify(totalJSON))
