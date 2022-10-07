let Resume={
    name:"Benish",
    email:"tbenish15@gmail.com",
    phone:8056425001,
    role:"Full Stack Devoloper",
    objective:"To acheive a good position in a company where i can build my carrer and help the organization ",

    educational_qualification:[
        {
            degree:"B.E",
            institute:"S.X.C.C.E",
            branch:"mechanical engineering",
            percentage:81,
            year_of_passing:2022,
        },
        {
            degree:"H.S.C",
            institute:"st.josheph's H.S.S,thirithuvapuram",
            branch:"maths biology",
            percentage:88.58,
            year_of_passing:2017,
        },
        {
            degree:"S.S.L.C",
            institute:"R.C.High school palliyadi",
            percentage:96.60,
            year_of_passing:2015,
        },
    ],
    skills:["HTML","CSS","Java Script","python"],
    projects:[
        {
            title:"project_title",
            abstract:"project-abstract",
            description:"desc"
        }
    ],
    certifications:[
        {
            course:"course-name",
            institute:"ins-name"
        },
       

    ],
    personal_details:{
        age:22,
        martial_status:"unmarried",
        gender:"male",
        father_name:"father name",
        address:"place",
        languages_known:["tamil","english"]

    },
    experience:[
        {
            organization:"",
            role:"",
            working_years: 2,
            contact_information:""

        }, 
    ],
    intrests:["programming","designing"],
    hobbies:["playing cricket",""],

    
}
let resume1={
    
    
}

function add(key,value,index=null,indexKey=null){
    if(index==null){
        resume1[key]=value;
    }
    else if(key=="education" || key=="certification" || key=="experience" ||key=="project"){
        if(!resume1[key]){
            resume1[key]=[];
        }
        if(!resume1[key][index]){
            resume1[key][index]={}

        } 
        
        resume1[key][index][indexKey]=value
    }
    else if(key=="personal_details"){
        if(!resume1[key]){
            resume1[key]={}
            if(indexKey=='lang'){
                resume1[indexKey]=[]
                resume1[key][index][indexKey]=value
               
                
            }

        }
        resume1[key][indexKey]=value;
    }
  

    else if(key=="intrest" || key=="hobbies" || key=="skills"){
        if(!resume1[key]){
            resume1[key]=[]
        }
        resume1[key][index]=value
    }

    

    else{
        resume1[key][index]=value;
    }
    
    
    display()

}
 function display(){
    document.getElementById("code").innerHTML=JSON.stringify(resume1)
}
function sub(){

    if(!localStorage.getItem("resume")){
        localStorage.setItem("resume",JSON.stringify([]))
    }
    let b=JSON.parse(localStorage.getItem("resume"))
    b.push(resume1)
    localStorage.setItem("resume",JSON.stringify(b))


}
function resume_list(){
    let my_resume=JSON.parse(localStorage.getItem("resume"))
    
    let ele=' '
    for(let i=0; i<my_resume.length;i++){
        
        ele=ele+"<li><a href='view.html?name="+my_resume[i].name+"'>"+my_resume[i].name+"</a></li>"
     }
     document.getElementById("new_resume").innerHTML=ele
}
