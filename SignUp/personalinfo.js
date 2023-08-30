export default class Info{

    postInfo(){

    const name = document.querySelector(".name");
    const birthdate = document.querySelector(".birthdate");
    const gender = document.querySelector(".gender");
    const study = document.querySelector(".study"); 
    const email = document.querySelector(".email");

    const info = {
        name: name.value,
        birthdate: birthdate.value,
        gender: gender.value,
        study: study.value,
        email: email.value
    };
    fetch('https://i-spot-api.onrender.com/ap/v2/userinfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);


        })

    }


    sendInfo(){
        const btn = document.querySelector(".btn");
        btn.addEventListener("click", function(e){
            e.preventDefault();
            this.postInfo();
            // go to instructions page
            window.location.href = "instructions.html";
            console.log("clicked");

        }.bind(this));
    


    
    }
}