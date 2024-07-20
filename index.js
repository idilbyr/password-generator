let characters =["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c"
    ,"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"
    ,"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!"
    ,"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":"
    ,";","<",">",".","?","/"];




let password1 = document.getElementById("pswrd1");
let password2 = document.getElementById("pswrd2");

function create_password(){
    let pass="";
    for(let i=0;i<set_values();i++){
        pass += characters[Math.floor(Math.random()*characters.length)];
    }
    return pass;
}

function generate(){
    password1.textContent = create_password();
    password2.textContent = create_password();
    console.log(password1);
    

}

function set_values(){
    let length = document.getElementById('length').value;
    
    return length;
}

function copy1(){
    let cpy= document.getElementById("pswrd1");
    
    navigator.clipboard.writeText(cpy.textContent);
    alert("Password Copied");
}

function copy2(){
    let cpy= document.getElementById("pswrd2");
    
    navigator.clipboard.writeText(cpy.textContent);
    alert("Password Copied");
}