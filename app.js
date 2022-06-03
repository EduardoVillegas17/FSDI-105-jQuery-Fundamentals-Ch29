//object constructor
function User(email,password,fname,lname,age,address,pnumber,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.address=address;
    this.pnumber=pnumber;
    this.payment=payment;
    this.color=color;


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
    let newUser = User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);
    //clear the inputs
    $(`input`).val("");
    console.log(newUser);
}
function init(){
    console.log("register");
    //hook events
    $("#btnRegister").click(register);

}
window.onload=init;