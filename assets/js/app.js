const products = [
    {
      id: 1,
      title: 'Compresora XAS 186',
      type: 'Compresora',
      image: 'https://i.ibb.co/M1J4254/compresora-xas.jpg',
    },
    {
        id: 2,
        title: 'Compresora',
        type: 'Compresora',
        image: 'https://i.ibb.co/pQJM7YT/comprensora.jpg',
    },
    {
        id: 3,
        title: 'Filtros Perkins',
        type: 'Filtro',
        image: 'https://i.ibb.co/bzV4PKF/filtros-perkins.jpg',
    },
    {
        id: 4,
        title: 'Motor Cummis 6BTAA5.9',
        type: 'Motor',
        image: 'https://i.ibb.co/cxYG8cV/motor-cummis.jpg',
    },
    {
        id: 5,
        title: 'Motor DEUTZ BF4M2012 y BF4L914',
        type: 'Motor',
        image: 'https://i.ibb.co/YZ9qTWw/motor-deutz.jpg',
    },
    {
        id: 6,
        title: 'Perkins 3 CC',
        type: 'Filtro',
        image: 'https://i.ibb.co/mDR670q/perkins-CC.jpg',
    },
    {
        id: 6,
        title: 'XSS 186 Compresoras',
        type: 'Compresora',
        image: 'https://i.ibb.co/SdGJf6r/xss-compresoras.jpg',
    },
  ];
  
let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
    if (filteredProducts.length < 1) {
      productsContainer.innerHTML = `<h4 class="products-empty" data-aos="slide-up">Lo siento, ningún producto coincide con su búsqueda.

      </h4>`;
      return;
    }
  
    productsContainer.innerHTML = filteredProducts
      .map((product) => {
        const { id, title, type, image } = product;
        return `
          <figure class="product-card" data-id="${id}" data-aos="zoom-in">
                <div class="product-img-container">
                    <img class="products-img" src="${image}" alt="${title}"/>
                </div>    
                <figcaption class="product-description" data-aos="slide-up">
                    <p>${title}</p>
                    <span>${type}</span>
                </figcaption>
            </figure>
        `;
      })
      .join('');
  };
  
displayProducts();

const form = document.querySelector('.products-form');
const searchInput = document.querySelector('.products-input');
  
form.addEventListener('keyup',()=>{
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product)=>
        product.title.toUpperCase().includes(inputValue)
    );
    displayProducts();
});

const typesDOM = document.querySelector('.products-types');
const displayButtons = () => {
const buttons = [
    'Todos',
    ...new Set(products.map((product)=>product.type)),
];
typesDOM.innerHTML = buttons.map((type)=>{
    return `<button class="products-btns" data-id=${type}>${type}</button>`;
})
    .join('');
};

displayButtons();
typesDOM.addEventListener('click',(e)=>{
    const el = e.target;
    if(el.classList.contains('products-btns')){
        if(el.dataset.id==='Todos'){
            filteredProducts = [...products];
        }else{
            filteredProducts = products.filter((product)=>{
                return product.type === el.dataset.id;
            });
        };
        searchInput.value='';
        displayProducts();
    };
});

