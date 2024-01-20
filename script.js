const form = document.querySelector("form");
//     const fullName = document.getElementById("name");
//   const Email = document.getElementById("Email");
//   const phone = document.getElementById("phone");
//    const subject = document.getElementById("subject");
//  const mess = document.getElementById("message");

function sendEmail(){
    // const bodyMessage = `Full Name: ${fullName.value}<br> Email:$
    // {Email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value} `;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "projectsolvingman@gmail.com",
        Password : "DCD9AF2894EB857F24711EA889034DF60318",
        To : 'projectsolvingman@gmail.com',
        From : "projectsolvingman@gmail.com",
         Subject : subject.value ,
      
        
         Body : "And this is the body"
    }).then(Message => alert(Message)
        
    //    message => {
    //    if (message=="ok") {
    //         Swal.fire({
    //             title: "Success!",
    //             text: "Message sent successfully!",
    //              icon: "success"
    //            });
    //     }
    //    }
    );
}

// function cheakInputs(){
//     const items = document.querySelectorAll(".item");
    
//     for(const item of items){
//         if(item.value ==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//         item.addEventListener("keyup", () => {
//     if(item.value !=""){
       
//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");
//     }

//     else{
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//     }
//         });
//     }
// }
 form.addEventListener("submit",(e) => {
    e.preventDefault();
   sendEmail();
});