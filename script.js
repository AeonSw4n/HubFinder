let J = require('./course.json');

console.log(J.course.length);

function contains(course, unit){
  query = false;
  course["hub"].forEach((v)=>{
    if(v == unit)
      query = true;
  });
  return query;
}

// console.log(contains(J["course"][0], 'Aesthetic Exploration'));
// console.log(J["course"][0].id);
// list = [];
// J["course"].forEach((v)=>{
//   if(contains(v, "Philosophical Inquiry and Life's Meanings")){
//     if(contains(v, "Aesthetic Exploration")){
//       console.log(v.id);
//       list.push(v);
//     }
//   }
// });
// console.log(list.length);

function queryHub(courses, unit){
  list = [];
  courses.forEach((v)=>{
    if(contains(v, unit)){
      list.push(v);
    }
  })
  return list;
}

function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

//console.log(perm([1,2,3]));

//console.log(queryHub(J["course"], "Philosophical Inquiry and Life's Meanings").length);


options = ["Philosophical Inquiry and Life's Meanings",
            "Aesthetic Exploration",
            "Historical Consciousness",
            "Social Inquiry II",
            "Global Citizenship and Intercultural Literacy",
            "Ethical Reasoning",
            // "Writing, Research, and Inquiry",
            "Writing-Intensive Course",
            "Writing-Intensive Course"
            // "Research and Information Literacy"
          ];

hub_division = perm(options);
hub_division.forEach((v, i)=>{
  sec_a = [v[0], v[1], v[2]];
  sec_b = [v[3], v[4], v[5]];
  sec_c = [v[6], v[7]];
    list_a = queryHub(J["course"], sec_a[0]);
    list_a = queryHub(list_a, sec_a[1]);
    list_a = queryHub(list_a, sec_a[2]);

    list_b = queryHub(J["course"], sec_b[0]);
    list_b = queryHub(list_b, sec_b[1]);
    list_b = queryHub(list_b, sec_b[2]);

    list_c = queryHub(J["course"], sec_c[0]);
    list_c = queryHub(list_c, sec_c[1]);
    if(list_a.length != 0 && list_b.length != 0 && list_c.length !=0){
      console.log(list_a.length, list_b.length, list_c.length);
      console.log("-------\n");
      console.log("A");
      list_a.forEach((v)=>{console.log(v["id"])});
      console.log("B")
      list_b.forEach((v)=>{console.log(v["id"])});
      console.log("C");
      list_c.forEach((v)=>{console.log(v["id"])});
      // console.log(list_a, list_b, list_c);
    }
    //console.log(sec_a, sec_b, sec_c);
  if(i%1000 == 0){
    console.log(i, "/", hub_division.length);
  }
});

//console.log(queryHub(queryHub(J["course"], "Philosophical Inquiry and Life's Meanings"), "Aesthetic Exploration"));

options.forEach((v)=>{
  console.log(queryHub(J["course"], v).length);
})
