/**
 * Douglas College CSIS 3380-002 
 * Copyright (c) 2023
 *
 * This js file enables pagination for the included HTML. 
 * Pagination was created manually without using jQuery or the native paginate() function
 *
 * @summary manual pagination
 * @author Viet Anh Nguyen <https://github.com/bill071194>
 *
 * Created at     : 2023-05-22 22:35:42
 * Last modified  : 2023-05-23 10:59:25
 */

// Importing data from data js file. Tried using modules import and export to get data from data.js but could not get it to work in browser without installing RequireJS
const users = [
    {
        "name" : "iboya vat",
        "image" : "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "aapo niskanen",
        "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "zilda moreira",
        "image" : "https://randomuser.me/api/portraits/thumb/women/38.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lilou le gall",
        "image" : "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lucy hall",
        "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "sara alves",
        "image" : "https://randomuser.me/api/portraits/thumb/women/14.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "ramon macrae",
        "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "connor taylor",
        "image" : "https://randomuser.me/api/portraits/thumb/men/15.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "aymeric morel",
        "image" : "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "lorenz otto",
        "image" : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "karl williamson",
        "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "ouassim heering",
        "image" : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "joined" : "07/15/15"
    },
    {
        "name" : "roberto molina",
        "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "joined" : "06/03/15"
    },
    {
        "name" : "jordan hubert",
        "image" : "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        "joined" : "06/03/15"
    },
    {
        "name" : "melvin baker",
        "image" : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "joined" : "09/18/14"
    },
    {
        "name" : "everett gordon",
        "image" : "https://randomuser.me/api/portraits/thumb/men/26.jpg",
        "joined" : "06/17/15"
    },
    {
        "name" : "aiden ma",
        "image" : "https://randomuser.me/api/portraits/thumb/men/82.jpg",
        "joined" : "07/18/12"
    },
    {
        "name" : "florent gerard",
        "image" : "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        "joined" : "02/12/13"
    },
    {
        "name" : "amber chen",
        "image" : "https://randomuser.me/api/portraits/thumb/women/96.jpg",
        "joined" : "07/12/12"
    },
    {
        "name" : "alexandra davies",
        "image" : "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        "joined" : "05/11/13"
    },
    {
        "name" : "sergio cole",
        "image" : "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "joined" : "02/17/15"
    },
    {
        "name" : "edgar dixon",
        "image" : "https://randomuser.me/api/portraits/thumb/men/98.jpg",
        "joined" : "06/17/11"
    },
    {
        "name" : "kirk myers",
        "image" : "https://randomuser.me/api/portraits/thumb/men/94.jpg",
        "joined" : "09/17/15"
    },
    {
        "name" : "ani hesseling",
        "image" : "https://randomuser.me/api/portraits/thumb/women/28.jpg",
        "joined" : "08/14/16"
    },
    {
        "name" : "victoire bonnet",
        "image" : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "joined" : "05/13/16"
    },
    {
        "name" : "marcos morales",
        "image" : "https://randomuser.me/api/portraits/thumb/men/44.jpg",
        "joined" : "01/12/12"
    },
    {
        "name" : "nils neumann",
        "image" : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "joined" : "03/11/12"
    },
    {
        "name" : "emily harrison",
        "image" : "https://randomuser.me/api/portraits/thumb/women/86.jpg",
        "joined" : "07/18/15"
    },
    {
        "name" : "matthew fortin",
        "image" : "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        "joined" : "03/18/15"
    },
    {
        "name" : "charlotte steward",
        "image" : "https://randomuser.me/api/portraits/thumb/women/32.jpg",
        "joined" : "02/18/11"
    },
    {
        "name" : "marceau rodriguez",
        "image" : "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        "joined" : "07/13/14"
    },
    {
        "name" : "hudson anderson",
        "image" : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "joined" : "09/12/15"
    },
    {
        "name": "Lily Bélanger",
        "image": "https://randomuser.me/api/portraits/thumb/women/30.jpg",
        "joined":"16/09/15"
    },
    {
        "name": "Lavrin Baievskiy",
        "image": "https://randomuser.me/api/portraits/thumb/men/42.jpg",
        "joined": "26/05/13"
    },
    {
        "name": "Caleb Anderson",
        "image": "https://randomuser.me/api/portraits/thumb/men/74.jpg",
        "joined": "19/08/03"
    },
    {
        "name": "Warinder Nayak",
        "image": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
        "joined": "29/05/11"
    },
    {
        "name": "Óliver Hernádez",
        "image": "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        "joined": "16/07/21"
    },
    {
        "name": "Louise Foster",
        "image": "https://randomuser.me/api/portraits/thumb/women/92.jpg",
        "joined": "02/01/22"
    },
    {
        "name": "Likeriya Shulezhko",
        "image": "https://randomuser.me/api/portraits/thumb/women/27.jpg",
        "joined": "03/07/14"
    },
    {
        "name": "Melania Jeremić",
        "image": "https://randomuser.me/api/portraits/thumb/women/81.jpg",
        "joined": "23/12/12"
    },
    {
        "name": "Harrison Davies",
        "image": "https://randomuser.me/api/portraits/thumb/men/53.jpg",
        "joined": "22/01/15"
    },
    {
        "name": "Jane Doe",
        "image": "https://randomuser.me/api/portraits/thumb/women/17.jpg",
        "joined": "12/10/13"
    },
    {
        "name": "Kristin Jensen",
        "image": "https://randomuser.me/api/portraits/thumb/women/72.jpg",
        "joined": "15/09/10"
    },
    {
        "name": "Soncelika Paskevich",
        "image": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        "joined": "31/07/11"
    },
    {
        "name": "Arlete Melo",
        "image": "https://randomuser.me/api/portraits/thumb/women/52.jpg",
        "joined": "02/09/08"
    },
    {
        "name": "Emilia Saarela",
        "image": "https://randomuser.me/api/portraits/thumb/women/74.jpg",
        "joined": "24/07/13"
    },
    {
        "name": "Slavolyuba Biliy",
        "image": "https://randomuser.me/api/portraits/thumb/women/15.jpg",
        "joined": "07/06/16"
    },
    {
        "name": "Hudson Martin",
        "image": "https://randomuser.me/api/portraits/thumb/men/44.jpg",
        "joined": "04/10/13"
    },
    {
        "name": "Claudia Solorzano",
        "image": "https://randomuser.me/api/portraits/thumb/women/33.jpg",
        "joined": "30/06/08"
    },
    {
        "name": "Kiyan Sohanivskiy",
        "image": "https://randomuser.me/api/portraits/thumb/men/48.jpg",
        "joined": "16/02/20"
    },
    {
        "name": "Lin De Reuver",
        "image": "https://randomuser.me/api/portraits/thumb/men/89.jpg",
        "joined": "14/01/08"
    },
    {
        "name": "Ava Lacroix",
        "image": "https://randomuser.me/api/portraits/thumb/women/52.jpg",
        "joined": "22/06/16"
    },
    {
        "name": "Lena Pena",
        "image": "https://randomuser.me/api/portraits/thumb/women/59.jpg",
        "joined": "17/03/08"
    },
    {
        "name": "Clifford Rose",
        "image": "https://randomuser.me/api/portraits/thumb/men/92.jpg",
        "joined": "01/10/14"
    }
];

// Updating Total counter using querySelector() and counting users in users array
const userCount = users.length;
const h3 = document.querySelector(`h3`);
h3.innerText = `Total: ${userCount}`;

// Creating pagination buttons

// Ternary conditional to populate the right amount of pages
const pageCount = userCount%10 == 0 ? userCount/10 : Math.floor(userCount / 10) + 1;

const pagination = document.querySelector(`.pagination`);

for(let i=1; i<= pageCount; i++) {
    pagination.insertAdjacentHTML(`beforeend`, `<button type="button" class="paginate-button" id=${i}>${i}</button>`);
}


// Displaying 10 users initially

const contactList = document.querySelector(`.contact-list`);

// Functions to display 10 users at a time
function displayUsers(i) {
    // Extracting names from users.name to generate email addresses
    let names = users[Object.keys(users)[i]].name.split(" ");

    contactList.insertAdjacentHTML(`beforeend`, `<li class="contact-item cf">
                                                    <div class="contact-details">
                                                        <img class="avatar" src=${users[Object.keys(users)[i]].image}>
                                                        <h3>${users[Object.keys(users)[i]].name}</h3>
                                                        <span class="email">${names[0]}.${names[1]}@example.com</span>
                                                    </div>
                                                    <div class="joined-details">
                                                        <span class="date">Joined ${users[Object.keys(users)[i]].joined}</span>
                                                    </div>
                                                </li>`);
}

// Loop the function 10 times to display the first 10 users
for(let i=0; i<10; i++) {
    displayUsers(i);
}

// Create paginate function and add onClickListener to paginate buttons using map()

const paginateButtons = Array.from(document.querySelectorAll('div.pagination button'));

paginateButtons.map( button => button.addEventListener('click', paginate));

function paginate() {
    // Remove displayed users from previous page
    contactList.innerHTML = "";

    // Fetch page id for loop logic
    let pageId = this.id;

    // Loop to display the right users for each page
    for (let i = pageId*10-10; i< pageId*10; i++) {
        displayUsers(i);
    }
}
