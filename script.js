// let firstName = "ikram"
// let lastName = "jundulloh"

// let age  = "19"

// function getData (day, year ){
//     console.log(firstName)
//     console.log(lastName)
//     console.log(age)
//     console.log(day)
//     console.log(year)
// }
// getData("jumat",2021)

// function perjumlahan (angka1,angka2){
//     return angka1 + angka2
    
// }
// console.log(perjumlahan(10,6.32));

// function sum (bil1, bil2){
//     let result = bil1 * bil2
//     console.log(result)
// }

// sum(21,89)

function submitData(){
    alert("hallo gaes b30")
    // console.log("hallo B30");
}

function submitData(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('number').value
    let subject = document.getElementById('input-select').value
    let pesan = document.getElementById('input-mesage').value
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(pesan);
    if (document.getElementById("js").checked & document.getElementById("python").checked & document.getElementById("css").checked){
        console.log(document.getElementById('js').value + document.getElementById('python').value + document.getElementById('css').value);
    }else if (document.getElementById('js').checked){
        console.log(document.getElementById('js').value);

    }else if (document.getElementById('python').checked){
        console.log(document.getElementById('python').value);

    }else if (document.getElementById('css'.checked)){
        console.log(document.getElementById('css').value);
    }


    if (name == ''){
        alert('enter your name')
    }else if (email == ''){
        alert('enter your email')
    }else if(phone == ''){
        alert('enter your phone number')
    }else if(subject == ''){
        alert('enter your subject')
    }else if (pesan == ''){
        alert('enter your message')
    }
    
let emailReceiver = 'ikramjundullah@gmail.com'

let a = document.createElement('a')

a.href =`mailto:${emailReceiver}?subject=${subject}&body=Hallo my name Is ${name}, ${pesan}, Contactme${phone} email=${email}.com`


let dataObject ={
    Nama: name,
    email: email,
    phone: phone,
    subject: subject,
    message: pesan,
}

console.log(dataObject);
a.click()


}









