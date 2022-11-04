let  w=window.location.search;
        url_1=new URLSearchParams(w);
        url=url_1.get('id')

    $(document).ready(function(){
        // to view resume
      $.ajax({
        type:"get",
        url:"http://karka.academy/api/action.php",
        data:{
          request:"get_resume_by_id",
          user:"benish",
          id:url,
          },
        success:function(data){
             
             all_data=JSON.parse(data)
             console.log(all_data)
             id_details=all_data.data
             resume_details=id_details.data
             resume_show=JSON.parse(resume_details)
             console .log(resume_details)

            //  let main=''
            //  main=`<p width>NAME${resume_show.name}</p><p>E-MAIL${resume_show.email}</p><p>PHONE${resume_show.phone}</p><p>ROLE${resume_show.role}</p>`
            //   $("#main_details").append(main)
            //   let main_obj=`<p>${resume_show.objective}</P>`
            //     $("#objective").append(main_obj)

             $("#nameT").html(resume_show.name);
             $("#emailT").html(resume_show.email);
             $("#phoneT").html(resume_show.phone)
             $("#roleT").html(resume_show.role)
             $("#objT").html(resume_show.objective)
              
            //  skill
             let skill=resume_show.skills;
             let new_skill;
            for(let i=0; i<skill.length; i++){
                
                new_skill=`<p class='card-text'>${parseInt(i+1)}.${skill[i]}</p>`
                console.log(skill[i])
                $("#skill_place").append(new_skill)
            }
            
           

        //    intrest
           let intrests=resume_show.intrest;
           let int=''
           for( let i=0; i<intrests.length; i++){
              int=`<p class='card-text'>${parseInt(i+1)}.${intrests[i]}</p>`
              $("#intrest_place").append(int)
          }
          

        // hobbiies
          let hobbie=resume_show.hobbies;
          let hob=''
          for( let i=0; i<hobbie.length; i++){
            hob=`<p class='card-text'>${parseInt(i+1)}.${hobbie[i]}</p>`
            $("#hob_place").append(hob)
          }
        //  language
        let language=resume_show.language
        let lan=''
        for(let i=0; i<language.length; i++){
          lan=`<p class='card-text'>${parseInt(i+1)}.${language[i]}</p>`
          $("#lang_place").append(lan)
        }
        // personal details
        personal=resume_show.personal_details
        console.log(personal)
        let per_detail=''
        per_detail=`<p card-text>Age:${personal.age}</p><p>Martial status:${personal.martial_status}</P><p>Gender:${personal.gender}</p><p>Father Name:${personal.father_name}</p><p>Address:${personal.address}</p>`
        $("#personal_place").html(per_detail)
      
         // education
          let edu=resume_show.education;
          let ele=''
         for( let i=0; i<edu.length; i++){
            ele=ele+"<tr>"+"<td>"+parseInt(i+1)+"</td>"+"<td>"+edu[i].course+"</td>"+"<td>"+edu[i].year+"</td>"+"<td>"+edu[i].institute+"</td>"+"<td>"+edu[i].percentage+"</td>"+"</tr>"
            }
         $("#tab_body").html(ele)

         //  certification
          let cer=resume_show.certification;
          let cert_new=''
          for(let i=0; i<cer.length; i++){
          cert_new=cert_new+"<p>"+'Course:'+"<span>"+cer[i].course+"</span>"+"</P>"+"<p>"+'Institute:'+"<span>"+cer[i].institute+"</span>"+"</P>"+"<p>"+'Duration:'+"<span>"+cer[i].duration+"</span>"+"</P>"+"<hr/>"
          }
         $("#cer_place").html(cert_new)
         
        //  experience
        let exp=resume_show.experience;
        let exp_detail=''
       for(let i=0; i<exp.length; i++){
         exp_detail=`<p>Organization:${exp[i].org}</P><p>Role:${exp[i].role}</p><p>Work_year:${exp[i].work_year}</p><p>Contact:${exp[i].contact_info}</p><hr/>`
         $("#exp_place").append(exp_detail)
       }
        // project
        let pro=resume_show.project;
        let project=''
        for(let i=0; i<pro.length; i++){
          project=`<p>Title:${pro[i].project_title}</p><p>Abstract:${pro[i].abstract}</p><hr/>`
          $("#project_place").append(project)
        }

      }

    })
  })