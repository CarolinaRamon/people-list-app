console.log('People List App');

const persons =  [
    new Person('John', 'Smith'),
    new Person('Jane', 'Doe'),
];

function showPeople(){
    console.log('Showing people...');
    let texto = '';
    for(let person of persons){
        console.log(person);
        texto += `<li>${person.name} ${person.surname}</li>`
    }
    document.getElementById('persons').innerHTML = texto;
}

function addPerson(){
    const form = document.forms['form'];
    const name = form['name'];
    const surname = form['surname'];
    if(name.value != '' && surname.value != ''){
        const person = new Person(name.value, surname.value);
        console.log(person);
        persons.push(person);
        showPeople();
    } else{
        console.log('No information to be added.')
    }
}