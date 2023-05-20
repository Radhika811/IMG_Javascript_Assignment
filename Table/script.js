async function members(){
    const response = await fetch("https://reqres.in/api/users");
    const member = await response.json();
    const members = member.data;
    createTable(members);
}   
function createContainer(classname){
    let container = document.createElement("div");
    container.className = classname;
    return container;
}
function createTable(obj){
    const credentials = document.querySelector("section");
    const entries = obj;
    for(let entry of entries){
        const container = createContainer("member");
        const id = document.createElement("div");
        const avatar = document.createElement("div")
        const img = document.createElement("img");
        const firstname = document.createElement("div")
        const email = document.createElement("div")

        id.textContent= "ID : " + entry.id;
        firstname.textContent=entry.first_name + " "+ entry.last_name
        email.textContent=entry.email
        img.src = entry.avatar;

        avatar.appendChild(img)

        container.appendChild(id)
        container.appendChild(avatar)
        container.appendChild(firstname)
        container.appendChild(email)

        credentials.appendChild(container)
    }
}

members();