let instructor = {
        
    name: "Jhankar Mahbub",
    entrepreneur: true,
        
    additionalData: {
        
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        
        moreDetails: {

            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                
                city: "ABC",
                state: "VW"
            
            },
    
            countriesLivedIn: ["Bangladesh", "New York"]

        }

    }

};

console.log(instructor.additionalData.books[1])
console.log(instructor.additionalData.moreDetails.hometown.state)
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0])