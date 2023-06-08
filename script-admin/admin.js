let featuredPosts = JSON.parse(localStorage.getItem('featuredPost')) ? JSON.parse(localStorage.getItem('featuredPost')) : []
let idNumber = 1
let addBtn = document.querySelector('#addBtn')
// Buttons
let titleInput = document.querySelector('#tite-input')
let descInput = document.querySelector('#desc-input')
let contentInput = document.querySelector('#content-input')
let delBtn = document.querySelector('#delBtn')
let table = document.querySelector('#table-body')
let cardBody = document.querySelector('#blog-card')


addBtn.addEventListener('click', addData)

function addData(e){
    e.preventDefault();
    featuredPosts.push({
        id: idNumber++,
        title: titleInput.value,
        description: descInput.value,
        content: contentInput.value,
        date: new Date(),
        cardImg: 'https://images.pexels.com/photos/16849804/pexels-photo-16849804/free-photo-of-people-with-snowboards-and-skis-on-ski-lift.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    })
    titleInput.value = ''
    descInput.value = ''
    contentInput.value = ''
    displayData()
    addStuff()
}

// delBtn.addEventListener('click', del)

// function del(){
    
// }



function displayData(){
    table.innerHTML = ''
    featuredPosts.forEach((content) =>{
        table.innerHTML += 
        `
                    <tr>
                      <th>${content.id}</th>
                      <td>${content.title}</td>
                      <td>${content.description}</td>
                      <td>${content.content}</td>
                      <td>${content.date}</td>
                      <td>${content.cardImg}</td>
                      <td>
                      <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="delBtn"
                    >
                      Edit
                    </button>
                        <button>Delete</button>
                      </td>
                    </tr>
        `
        localStorage.setItem('featuredPost', JSON.stringify(featuredPosts))
    })
}

function addStuff(){
    cardBody.innerHTML = ''
    featuredPosts.forEach((content) =>{
        cardBody.innerHTML += 
    `
        <div class="card" style="width: 18rem;">
        <img src="${content.cardImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${content.title}</h5>
          <p class="card-text">${content.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
    localStorage.setItem('featuredPost', JSON.stringify(featuredPosts))
    })
}

