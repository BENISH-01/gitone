
function generatecv(){
  let a=JSON.parse(localStorage.getItem("resume"))
  c=window.location.search
  d=new URLSearchParams(c)
  url=d.get('name')
  

  for (let i=0; i<a.length; i++){
    if(url==a[i].name){
    document.getElementById("nameT").innerHTML=a[i].name;
    document.getElementById("emailT").innerHTML=a[i].email;
    document.getElementById("phoneT").innerHTML=a[i].phone;
    document.getElementById("roleT").innerHTML=a[i].role;
    document.getElementById("objT").innerHTML=a[i].objective;

    // skills
    let skill=a[i].skills;
        for( let i=0; i<skill.length; i++){
            document.getElementById("skill"+i).innerHTML=skill[i];
        }
    // intrest
    let intrests=a[i].intrest;
        for( let i=0; i<intrests.length; i++){
            document.getElementById("int"+i).innerHTML=intrests[i];
        }
    // language
    let lan=a[i].language;
    for( let i=0; i<lan.length; i++){
        document.getElementById("lang"+i).innerHTML=lan[i];
    }

    // hobbiies
    let hobbie=a[i].hobbies;
    for( let i=0; i<hobbie.length; i++){
        document.getElementById("hob"+i).innerHTML=hobbie[i];
    }



    // education
    let edu=a[i].education;
       for( let i=0; i<edu.length; i++){
        document.getElementById("course"+i).innerHTML=edu[i].course;
        document.getElementById("year"+i).innerHTML=edu[i].year;
        document.getElementById("institute"+i).innerHTML=edu[i].institute;
        document.getElementById("percentage"+i).innerHTML=edu[i].percentage;
       }

    //    personal_details
    
    document.getElementById("age").innerHTML=a[i].personal_details.age;
    document.getElementById("martial").innerHTML=a[i].personal_details.martial_status;
    document.getElementById("gender").innerHTML=a[i].personal_details.gender;
    document.getElementById("father").innerHTML=a[i].personal_details.father_name
    document.getElementById("address").innerHTML=a[i].personal_details.address
    




    // experience
    let exp=a[i].experience;
     for(let i=0; i<exp.length; i++){
        document.getElementById("orgexp"+i).innerHTML=exp[i].org;
        document.getElementById("roleexp"+i).innerHTML=exp[i].role;
        document.getElementById("workyearexp"+i).innerHTML=exp[i].work_year;
        document.getElementById("contactexp"+i).innerHTML=exp[i].contact_info;
     }

    //  certification
    let cer=a[i].certification;
    for(let i=0; i<exp.length; i++){
       document.getElementById("course_cert"+i).innerHTML=cer[i].course;
       document.getElementById("inst_cert"+i).innerHTML=cer[i].institute;
       document.getElementById("dur_cert"+i).innerHTML=cer[i].duration;
       
    }
    // project
    let pro=a[i].project;
    for(let i=0; i<pro.length; i++){
       document.getElementById("prot"+i).innerHTML=pro[i].project_title;
       document.getElementById("abs"+i).innerHTML=pro[i].abstract;
       
       
    }



    
   
  }



 }
}

 
