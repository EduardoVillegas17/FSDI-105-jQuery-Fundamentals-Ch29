    //this fn needs an array
function displayUser(usersArray){
    let row;
    //travel the array(for)
    for(let i=0;i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        //create the row = `<>${}<>`
        row=`
        <tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.pnumber}</td>
            <td>${user.payment}</td>
            <td style="background-color:${user.color};">${user.color}</td>

        </tr>`
    }
    //append the row to the table
    $("#users").append(row);
}

function init(){
    console.log("listing users");
    let users = readUsers(); //getting the array

    //<-------is an array------->
    displayUser(users);
}
window.onload = init;