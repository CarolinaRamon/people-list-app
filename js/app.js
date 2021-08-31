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