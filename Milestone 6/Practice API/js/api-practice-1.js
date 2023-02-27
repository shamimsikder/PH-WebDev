// Convert Object to JSON
/*const fs = require('fs')

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
  
  const json = JSON.stringify(person);

  fs.writeFile('person.json', json, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File saved!');
    }
  });
*/
  // Problem-1

const loadData = async() => {

    const res = await fetch('person.json');
    const data = await res.json()
    showAllData(data);

}

const showAllData = (datas) => {
    
    const listTitle = document.getElementById('list');
    const container = document.getElementById('data');
  
    listTitle.innerText = datas.message;
  
    datas.result.forEach((data) => {
        
        const div = document.createElement('div');
        div.classList.add('bg-slate-100',  'shadow-xl');
  
        div.innerHTML = `
            
            <p class="border-2 border-slate-300 px-3 py-3 mb-5">Name: ${data.name.common}</p>
            <p class="px-3 py-3">Age: ${data.age}</p>
            <p class="px-3 py-3">Address: ${data.address.street}, House ${data.address.house}</p>
      
        `;
  
      container.appendChild(div);
    
    });

}
  
  

loadData()