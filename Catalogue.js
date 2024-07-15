const catalogue1= {
    Title:'TITLE: The Sign of the Four',
    Description:'DESCRIPTION: Mistery',
    Author:'AUTHOR: Arthur Conan Doyle',
    Pages: 'TOTAL PAGES: 117'

}
//To show the value of each element of the array one by one
console.log(catalogue1.Title)
console.log(catalogue1.Description)
console.log(catalogue1.Author)
console.log(catalogue1.Pages) 


const catalogue2= { 
    Title:'TITLE: The Attic Murder',
    Description:'DESCRIPTION: Thriller',
    Author:'AUTHOR: Fowler Right',
    Pages:'TOTAL PAGES: 212'
    }
//To show the value of each element of the array one by one
console.log(catalogue2.Title)
console.log(catalogue2.Description)
console.log(catalogue2.Author)
console.log(catalogue2.Pages)

//To findout if there are keys as per expected for the array
if (Object.keys(catalogue1).includes('Title', 'Decsription', 'Author', 'Pages')) {
    console.log('true');
} else {
    console.log('false');
}

if (Object.keys(catalogue2).includes('Title', 'Decsription', 'Author', 'Pages')) {
    console.log('true');
} else {
    console.log('false');
}
    