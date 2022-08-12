let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
    if (filteredProducts.length < 1) {
      productsContainer.innerHTML = `<h4 class="products-empty">Lo siento, ningún producto coincide con su búsqueda.

      </h4>`;
      return;
    }
  
    productsContainer.innerHTML = filteredProducts
      .map((product) => {
        const { id, title, type, image } = product;
        return `
          <figure class="product-card" data-id="${id}">
                <div class="product-img-container">
                    <img class="products-img" src="${image}" alt="${title}"/>
                </div>    
                <figcaption class="product-description">
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

