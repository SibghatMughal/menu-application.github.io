let menu = [
  {
    Id: 1,
    product: "breakfast",
    Image:
      "images/image1.jpeg",
    title: "Buttermilk Pancakes",
    price: 15.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 2,
    product: "lunch",
    Image:
      "images/image3.jpeg",
    title: "Oreo Dream ",
    price: 50.09,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 3,
    product: "lunch",
    Image:
      "images/image4.jpeg",
    title: "Godzilla Milkshake",
    price: 22.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 4,
    product: "lunch",
    Image:
      "images/image6.jpeg",
    title: "Country Delight",
    price: 18.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 5,
    product: "shakes",
    Image:
      "images/image5.jpeg",
    title: "Egg Attack",
    price: 30.90,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 6,
    product: "dinner",
    Image:
      "images/image7.jpeg",
    title: "Diner Double",
    price: 30.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 7,
    product: "breakfast",
    Image:
      "images/image9.jpeg",
    title: "Bacon Overflow",
    price: 18.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 8,
    product: "dinner",
    Image:
      "images/image10.jpeg",
    title: "Steak Dinner",
    price: 12.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 9,
    product: "dinner",
    Image:
      "images/image8.jpeg",
    title: "Quarantine Buddy",
    price: 11.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    Id: 10,
    product: "breakfast",
    Image:
      "images/image2.jpeg",
    title: "American Classic ",
    price: 20.99,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
];

let products = document.querySelector(".products");
let btns = document.querySelectorAll("button");
// console.log(btns);

// button selection for filter
btns.forEach(function (e) {
  e.addEventListener("click", function (btn) {
    // console.log(btn.currentTarget.textContent);
    const itemtype = btn.currentTarget.textContent;
    // console.log(itemtype);
    const mytype = menu.filter(function (fillteritem) {
      if (fillteritem.product === itemtype) {
        return fillteritem;
      }
    });
    // console.log(mytype);
    if (itemtype === "all") {
      displaymenuitems(menu);
    } else {
      displaymenuitems(mytype);
    }
  });
});

// function for dispaly item in DOM
function displaymenuitems(menuitems) {
  let items = menuitems.map(function (item) {
    return `
        <div class="product breakfast">
        <div class="image">
            <img src="${item.Image}" alt="">
        </div>
        <div class="details">
            <div class="title">
                <h2>${item.title}</h2>
                <p class="pricee">$${item.price}</p>
            </div>
            <h3></h3>
            <p>
               ${item.description}
            </p>
        
            </div>
            </div>
            `;
  });
  items = items.join("");
  // console.log(items);
  products.innerHTML = items;
}

// result at page load
window.addEventListener("DOMContentLoaded", function () {
  displaymenuitems(menu);
});
