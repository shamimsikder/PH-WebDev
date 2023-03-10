
//------------- handle search button-----------
const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // ----------load data----------
 
  if(searchText === ''){
    document.getElementById('text').innerHTML = `<small>search field can not be empty</small>`
    return
  }

  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data));

};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  const searchResult = document.getElementById("search-data");
  searchResult.innerText = "";
 
  document.getElementById('text').innerHTML = `Total books found ${myBooks.numFound}`
  
  const books = myBooks.docs;
   
  books.forEach((book) => {
    
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name ? book.author_name[0] : book.author_name}</h6>
              <p>Publisher: <small> ${book.publisher[0]} </small></p>
              <small> First Published Year: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
