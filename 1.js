

// let cart = []
// let cartItem=[]
// // Function Display

// const Displayproducts = (products = cart) => {
//   let show = ``
//   products.forEach(pro => {
//     show += ` <div class="col-12 col-sm-6 col-md-3" >
//         <div class="card1">
//             <img src="${pro.image}" class="" alt="Cappuccino">
//              <div class="card-body1 ">
//           <h5 class="card-title1">${pro.name}</h5>
//           <p class="card-text2">${pro.description}</p>
//           <p class="card-text3" style="color: green; font-weight: bold;">Price: ${pro.price}$</p>
//           <button  type="button" onclick="AddtoCart(${pro.id})" class="btn ">Add to cart</button>
//         </div>
//         </div>
     
//     </div>  
// `

//   })
//   document.getElementById("show-product").innerHTML = show
//   Updatetocart()
 
// }
//  fetch("https://thoenthonny.github.io/Coffee-Api/data.json")
//   .then(res => res.json())
//   .then(item => {
//     cart = item
//     Displayproducts()
//   })
//   .catch(err => alert(err))

// // search

// document.getElementById("input-search").addEventListener("input", (event) => {
//   const inputSearch = event.target.value.toLowerCase();
  
//   // filter by "title" not "name"
//   const results = cart.filter(item => {
//     return item.title.toLowerCase().includes(inputSearch);
//   });

//   if (results.length > 0) {
//     Displayproducts(results);
//   } else {
//     document.getElementById("show-product").innerHTML = `
//       <div class="w-100">
//         <h1 class="text-danger text-center">Search Is Not Found...!</h1>
//       </div>
//     `;
//   }
// });

// // add to cart
// const AddtoCart =(productId)=>{
//     const product = cart.find(p=> p.id === productId)
//     const tocart = cartItem.find(i=> i.id ===productId)
//     if(tocart){
//       tocart.qty+=1;
//     }else{
//       cartItem.push({...product,qty:1})
//     }
//     Swal.fire({
//   title: `${product.name}Add Your Cart`,
//   icon: "success",
//   draggable: true
// });
//     Updatetocart()
// }

// // update item to card
// const Updatetocart = () => {
//   const count = document.getElementById("cart-count"); // your cart badge
//   const itemtocart = document.getElementById("cart-item");

//   // Update total items
//   const totalitem = cartItem.reduce((sum, i) => sum + i.qty, 0);
//   if (count) count.innerText = totalitem;

//   // If cart is empty
//   if (cartItem.length === 0) {
//     itemtocart.innerHTML = `
//       <div class=" w-100 h-auto text-center">
//          <i class="bi bi-cart-x fs-4"></i>
//         <p class="text-center mt-3 fs-5">Your Cart Is Empty</p>
        
//       </div>
//     `;
//     return;
//   }

//   // Render cart items
//   let show = "";
//   cartItem.forEach(item => {
//     show += `
//       <div class="d-flex align-items-center mb-3 border-bottom pb-2">
//         <img src="${item.image}" alt="${item.name}" class="rounded me-3" style="width:60px; height:60px; object-fit:cover;">
//         <div class="flex-grow-1 " >
//           <h6 class="mb-0">${item.name}</h6>
//           <small class="text-muted">${item.price}$</small>
//           <div class="d-flex align-items-center mt-1">
//             <button class="btn btn-sm btn-outline-secondary" onclick="UpdateQty(${item.id}, -1)">-</button>
//             <input type="text" class="form-control form-control-sm text-center mx-1" value="${item.qty}" style="width: 45px;" readonly>
//             <button class="btn btn-sm btn-outline-secondary" onclick="UpdateQty(${item.id}, 1)">+</button>
//           </div>
//         </div>
//         <div class="d-flex flex-column align-items-end ms-2">
//           <span class="fw-bold">${(item.qty * item.price).toFixed(2)}$</span>
//           <button class="btn btn-sm btn-outline-danger mt-1" onclick="RemoveFromCart(${item.id})">
//             <i class="bi bi-trash"></i>
//           </button>
//         </div>
//       </div>`;
//   });

//   // Cart summary
//   const subtotal = cartItem.reduce((sum, i) => sum + i.qty * i.price, 0);
//   const delivery = 1.5;
//   const total = subtotal + delivery;

//   show += `
//     <div class="cart-summary border-top pt-3">
//       <div class="d-flex justify-content-between mb-2">
//         <span>Subtotal</span>
//         <span class="fw-bold">$${subtotal.toFixed(2)}</span>
//       </div>
//       <div class="d-flex justify-content-between mb-3">
//         <span>Delivery</span>
//         <span class="fw-bold">$${delivery.toFixed(2)}</span>
//       </div>
//       <div class="d-flex justify-content-between fs-5 fw-bold">
//         <span>Total</span>
//         <span>$${total.toFixed(2)}</span>
//       </div>
//       <button onclick="CheckOut()" class="btn btn-warning w-100 mt-3">Proceed to Checkout</button>
//     </div>`;

//   itemtocart.innerHTML = show;
// };

// // update qty

// const UpdateQty = (productId,chang) =>{
//     const item = cartItem.find(i => i.id === productId);
//     if(item){
//       item.qty+=chang
//       if(item.qty<1){
//         RemoveFromCart(productId)
//       }else{
//         Updatetocart();
//       }
//     }
// }
// // Remove From Card
// const RemoveFromCart = (productId)=>{
//   cartItem=cartItem.filter(i =>i.id !==productId);
//   Updatetocart();
// }

// // CheckOut
// const CheckOut = ()=>{
  
//   Swal.fire({
//   title: "Thank For Order",
//   text: "Nice To Meet You!",
//   icon: "success"
// });
// cartItem=[]
//   Updatetocart()
// }











let cart = []
let cartItem=[]
// Function Display

const Displayproducts = (products = cart) => {
  let show = ``
  products.forEach(pro => {
    show += ` <div class="col-12 col-sm-6 col-md-3 boxd" >
         <div class="card1">
            <img src="${pro.image}" class="" alt="Cappuccino">
             <div class="card-body1 ">
       <h5 class="card-title1">${pro.name}</h5>
          <p class="card-text2">${pro.description}</p>
        <p class="card-text3" style=" font-weight: bold;">Price: ${pro.price}$</p>
           <button  type="button" onclick="AddtoCart(${pro.id})" class="btn ">Add to cart</button>
         </div></div>
     
     </div>  `

  })
  document.getElementById("show-product").innerHTML = show
  Updatetocart()
 
}

fetch("https://thoenthonny.github.io/Coffee-Api/data.json")
  .then(res => res.json())
  .then(item => {
    cart = item
    Displayproducts()
  })
  .catch(err => alert(err))

// search

document.getElementById("input-search").addEventListener("input", (event) => {
  const inputserach = event.target.value.toLowerCase();
  const finds = cart.filter(item => {
    return item.name.toLowerCase().includes(inputserach)
  })
  if (finds.length > 0) {
    Displayproducts(finds)
  } else {
    document.getElementById("show-product").innerHTML = `
        <div class=" w-100">
<h1  class=" text-danger text-center">Search Is Not Found...!</h1>
</div>
      `
  }
})

// add to cart
const AddtoCart =(productId)=>{
    const product = cart.find(p=> p.id === productId)
    const tocart = cartItem.find(i=> i.id ===productId)
    if(tocart){
      tocart.qty+=1;
    }else{
      cartItem.push({...product,qty:1})
    }
    Swal.fire({
  title: `${product.name} Add Your Cart🥰`,
  icon: "success",
  draggable: true
});
    Updatetocart()
}

// update item to card
const Updatetocart = () => {
  const count = document.getElementById("cart-count"); // your cart badge
  const itemtocart = document.getElementById("cart-item");

  // Update total items
  const totalitem = cartItem.reduce((sum, i) => sum + i.qty, 0);
  if (count) count.innerText = totalitem;

  // If cart is empty
  if (cartItem.length === 0) {
    itemtocart.innerHTML = `
      <div class=" w-100 h-auto text-center">
         <i class="bi bi-cart-x fs-4"></i>
        <p class="text-center mt-3 fs-5">Your Cart Is Empty</p>
        
      </div>
    `;
    return;
  }

  // Render cart items
  let show = "";
  cartItem.forEach(item => {
    show += `
      <div class="d-flex align-items-center mb-3 border-bottom pb-2">
        <img src="${item.image}" alt="${item.name}" class="rounded me-3" style="width:60px; height:60px; object-fit:cover;">
        <div class="flex-grow-1">
          <h6  class="mb-0">${item.name}</h6>
          <small  class="text-muted text-white">${item.price}$</small>
          <div class="d-flex align-items-center mt-1">
            <button class="btn btn-sm btn-outline-secondary" onclick="UpdateQty(${item.id}, -1)"  style="color: rgb(255, 255, 255); border: 1px solid white;">-</button>
            <input type="text" class="form-control form-control-sm text-center mx-1" value="${item.qty}" style="width: 45px;" readonly>
            <button class="btn btn-sm btn-outline-secondary" onclick="UpdateQty(${item.id}, 1)" style="color: rgb(255, 255, 255); border: 1px solid white;">+</button>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end ms-2">
          <span class="fw-bold">${(item.qty * item.price).toFixed(2)}$</span>
          <button style="color: rgb(255, 255, 255); border: 1px solid white;" class="btn btn-sm btn-outline-danger mt-1" onclick="RemoveFromCart(${item.id})">
            <i style="color: rgb(255, 255, 255);  " class="bi bi-trash"></i>
          </button>
        </div>
      </div>`;
  });

  // Cart summary
  const subtotal = cartItem.reduce((sum, i) => sum + i.qty * i.price, 0);
  const delivery = 1.5;
  const total = subtotal + delivery;

  show += `
    <div class="cart-summary border-top pt-3">
      <div class="d-flex justify-content-between mb-2">
        <span>Subtotal</span>
        <span class="fw-bold">$${subtotal.toFixed(2)}</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Delivery</span>
        <span class="fw-bold">$${delivery.toFixed(2)}</span>
      </div>
      <div class="d-flex justify-content-between fs-5 fw-bold">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <button onclick="CheckOut()" class="btn btn-warning w-100 mt-3">Proceed to Checkout</button>
    </div>`;

  itemtocart.innerHTML = show;
};

// update qty

const UpdateQty = (productId,chang) =>{
    const item = cartItem.find(i => i.id === productId);
    if(item){
      item.qty+=chang
      if(item.qty<1){
        RemoveFromCart(productId)
      }else{
        Updatetocart();
      }
    }
}
// Remove From Card
const RemoveFromCart = (productId)=>{
  cartItem=cartItem.filter(i =>i.id !==productId);
  Updatetocart();
}

// CheckOut
const CheckOut = ()=>{
  
  Swal.fire({
  title: "Thank For Order",
  text: "Nice To Meet You!",
  icon: "success"
});
cartItem=[]
  Updatetocart()
}



















 /* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });





/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Content Creator", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});