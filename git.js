let btn = document.getElementById("button")
btn.onclick = () =>{

    console.log("hii");
    getdata()
}



async function getdata() {

    let user = document.getElementById("input").value 
    let res = await fetch(`https://api.github.com/users/${user}`)
    let data = await res.json()
    console.log(data);

    let img = document.getElementById("img")
    img.src = data.avatar_url

}