const products = [
  {
    p_img: "https://i.pinimg.com/736x/97/73/85/9773859533f9e8c45fc1153793cdd1eb.jpg",
    p_name: "iPhone 14 Pro",
    p_brand: "Apple",
    p_description: "6.1-inch Super Retina XDR display with A16 Bionic chip.",
    p_price: 119999
  },
  {
    p_img: "https://i.pinimg.com/736x/b0/80/74/b08074865fd7933b7d5939aa45d85518.jpg",
    p_name: "Galaxy S23",
    p_brand: "Samsung",
    p_description: "Flagship Android smartphone with AMOLED display.",
    p_price: 99999
  },
  {
    p_img: "https://i.pinimg.com/736x/d3/24/e0/d324e00fd65f11c4f6cde0b01748af87.jpg",
    p_name: "MacBook Pro M2",
    p_brand: "Apple",
    p_description: "Powerful laptop with Apple M2 chip and Retina display.",
    p_price: 179999
  },
  {
    p_img: "https://i.pinimg.com/736x/a2/9b/2d/a29b2d74f3ffb3efe7c455bfcbef5b64.jpg",
    p_name: "Dell XPS 13",
    p_brand: "Dell",
    p_description: "Ultra-thin premium laptop for professionals.",
    p_price: 124999
  },
  {
    p_img: "https://i.pinimg.com/1200x/e9/05/c5/e905c536c865d8b9c93d184aef1e45ec.jpg",
    p_name: "Sony WH-1000XM5",
    p_brand: "Sony",
    p_description: "Noise-cancelling wireless headphones.",
    p_price: 29999
  },
  {
    p_img: "https://i.pinimg.com/736x/99/7e/7f/997e7f46ad4abb7ea90e9f56f5fe7cf1.jpg",
    p_name: "Nike Air Max",
    p_brand: "Nike",
    p_description: "Comfortable and stylish sports shoes.",
    p_price: 8999
  },
  {
    p_img: "https://i.pinimg.com/736x/d2/91/58/d29158c2bb8c2a5d89b885eef79092f1.jpg",
    p_name: "Canon EOS 1500D",
    p_brand: "Canon",
    p_description: "DSLR camera for photography beginners.",
    p_price: 34999
  },
  {
    p_img: "https://i.pinimg.com/736x/89/5a/63/895a638c9294555fb9ea046c0cea2783.jpg",
    p_name: "Apple Watch Series 9",
    p_brand: "Apple",
    p_description: "Smartwatch with fitness and health tracking.",
    p_price: 45999
  },
  {
    p_img: "https://i.pinimg.com/1200x/43/b5/ac/43b5ac5f45d17751cb105688c709ea1f.jpg",
    p_name: "PlayStation 5",
    p_brand: "Sony",
    p_description: "Next-gen gaming console with ultra-fast SSD.",
    p_price: 54999
  },
  {
    p_img: "https://i.pinimg.com/1200x/84/43/14/844314281138e2c79ed5e000f2968e45.jpg",
    p_name: "JBL Bluetooth Speaker",
    p_brand: "JBL",
    p_description: "Portable wireless speaker with deep bass.",
    p_price: 6999
  }
];

let clutter = ''
products.forEach((elem) => {
    clutter += `
          <div class="card">
            <img src="${elem.p_img}" alt="">
             <h3>${elem.p_brand }</h3>
             <div class="pgroup">
                <p>${elem.p_name}</p>
                <p class='price'>₹${elem.p_price}</p>
             </div>
             <p>${elem.p_description}</p>
        </div>
    `
})

document.querySelector('main').innerHTML = clutter;