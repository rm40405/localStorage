const addsavePerson = () =>{
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const personName = name.value
    const personAge = age.value
    name.value = '';
    age.value = '';
    console.log(personName, personAge);
    displayAddPerson(personName, personAge);
    savePersonLocalStorage(personName, personAge);

}
const displayAddPerson = (p,a) => {
    const addPersonContainer = document.getElementById('person-container');
    const personList = document.createElement('li');
    personList.innerText=`Name: ${p} , Age: ${a}`;
    addPersonContainer.appendChild(personList);
}

const getPersonsFromLocalStorage = () => {
    const personSaved = localStorage.getItem('persons');
    let persons = {};
    if(personSaved){
        persons = JSON.parse(personSaved)
    }
    return persons;
}

const savePersonLocalStorage =(p,a) => {
   
    const persons = getPersonsFromLocalStorage();
    persons[p] = a;
    const personStringified = JSON.stringify(persons);
    localStorage.setItem('persons', personStringified);

}

const displaySavePersonToLocalStorage = () =>{
    const persons = getPersonsFromLocalStorage();
    for (const person in persons){
        const Age = persons[person]
        displayAddPerson (person,Age);
    }
}
displaySavePersonToLocalStorage();