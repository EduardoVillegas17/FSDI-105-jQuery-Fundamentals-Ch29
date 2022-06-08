const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers();//geting localStorage info
    oldData.push(user);//appending the new element
    let val = JSON.stringify(oldData);//creating the string
    //console.log(users);
    //console.log(val);
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    //get the values from the local storage
    let data = localStorage.getItem(STORE_KEY);
    console.log(data);// <-- JSON
    if(!data){//Is not data?
        return [];//creating the array
    }else{//we have data
        let list = JSON.parse(data);//parsing JSON to obj
        console.log(list);
        return list;
    }
    
}