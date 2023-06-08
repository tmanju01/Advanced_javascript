
//login data

logindata = document.querySelector('#btn-login');
logindata.addEventListener('click',function(){
    // alert('btn called');
    let uname=document.getElementById('name').value;
    let pass=document.getElementById('pwd').value;

    // console.log(uname+ ""+pass);
    fetch('http://localhost/api/login_get_method?username='+uname+'&password='+pass)
    .then((res)=>res.json()).then((RES)=>{
        console.log(RES);
        if(RES.Code == 1)
        {
            window.location.href='dashbord.html';
            
        }
        else{
            alert("Invalid Data");
        }
    })
})




//register data

function RegAPI(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let pwd=document.getElementById('pwd').value;
    let mobile=document.getElementById('mobile').value;

    let data={username:name,email:email,password:pwd,mobile:mobile}
    console.log(data);


    

    fetch('http://localhost/api/registration_api',{method:'POST',headers:{'Content-Type':'application/json'}
,body:JSON.stringify({allData:data})}).then((res)=>res.json()).then((Response)=>{
    console.log(Response);

    if(Response.Code==1){
        window.location.href='login.html'
    }
})
}









// fetch('http://localhost/api/registration_api',{method:'POST',headers:{'Content-Type':'application/json'}
// ,body:JSON.stringify({allData:data})}).then((res)=>res.json()).then((Response)=>{
//     console.log(Response);
//     if(Response.Code==1){
//         window.location.href='login.html';
//     }

// })
// }













