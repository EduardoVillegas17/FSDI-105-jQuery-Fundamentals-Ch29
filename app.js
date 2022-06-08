//object constructor
function User(email,password,firstName,lastName,age,address,pnumber,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.address=address;
    this.pnumber=pnumber;
    this.payment=payment;
    this.color=color;


}
function isValid(user){
    let valid=true;
    if(user.email.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.firstName.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.lastName.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.age.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.address.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.pnumber.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    if(user.payment.length==0){
        valid=false;
        alert("please complete all fields");
        $("input").addClass("input-error");
    }
    return valid;
}
//register function
function register(){

    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhoneNumber = $("#txtPhoneNumber").val();
    let userPayment = $("#txtPayment").val();
    let userColor = $("#txtColor").val();

    console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    //creatig the obj
    let newUser = new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);
    if(isValid(newUser)==true){
        //console.log(newUser);
        saveUser(newUser);//this function  is in the StoreManager
    //clear the inputs
    $("input").val("");
    }
}
function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    })

}
window.onload=init;