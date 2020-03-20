
const data=[
    {name :'John Doe',
    age:'32',
    gender:'male',
    lookingfor:'female',
    location:'Boston',  
    image:'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {name :'Jen Smith',
    age:'26',
    gender:'female',
    location:'Miami',  
    image:'https://randomuser.me/api/portraits/women/82.jpg'
    },
 {name :'William Johnson',
    age:'30',
    gender:'male',
    location:'Lynn',  
    image:'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {name :'James Warner',
    age:'28',
    gender:'male',
    location:'London',  
    image:'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {name :'Maria Lammer',
    age:'28',
    gender:'female',
    location:'California',  
    image:'https://randomuser.me/api/portraits/women/84.jpg'
    }

]

const profiles=profileiterator(data);

nextprofile();

//Next Event
document.getElementById('next').addEventListener('click',nextprofile);
    //Next Profile Display
        function nextprofile(){
        const currentprofile=profiles.next().value;
        if(currentprofile!==undefined){
        document.getElementById('profiledisplay').innerHTML=`
        <ul class="list-group">
        <li class="list-group-item">Name:${currentprofile.name}</li>
        <li class="list-group-item">Age:${currentprofile.age}</li>
        <li class="list-group-item">Location:${currentprofile.location}</li>
        <li class="list-group-item">Gender:${currentprofile.gender} </li>
        </ul>
        `;
        document.getElementById('imagedisplay').innerHTML=`<img src="${currentprofile.image}">`
        }
        else{
            //No more Profiles
            window.location.reload();
        }
    }
