// Load Data

const loadData = () => {

    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then(data => {

            if(data.status){
                showCategories(data.data)
            }
            else{
                alert("Error")
            }

        })

}

const showCategories = data => {

    const categoriesContainer = document.getElementById("categories-container")

    data.news_category.forEach(singleCategory => {
        
        const linkContainer = document.createElement("p")

        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>`;

        categoriesContainer.appendChild(linkContainer);

    });

}

loadData()