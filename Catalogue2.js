let data1 = {
    Title:'The Sign of the Four',
    Description:'Mistery',
    Author:'Arthur Conan Doyle',
    Pages:117
    }

let data2 = {
    Title:'The Attic Murder',
    Description:'Thriller',
    Author:'Fowler Right',
    Pages:212
    }

let alldata1 =  new Array()
alldata1.push(data1)
alldata1.push(data2)

console.log(alldata1) 

//extension

let data3 = {
    Title:'The Phantom of the Opera',
    Description:'Psychological',
    Author:'Gaston Leroux',
    Pages:254
    }

let data4 = {
    Title:'Criminal Psychology',
    Description:'Psychological',
    Author:'Hans Gross',
    Pages:740
    }

let data5 = {
    Title:'The Thirty-Nine Steps',
    Description:'History',
    Author:'John Buchan',
    Pages:101
    }

let alldata =  new Array()
    alldata.push(data1)
    alldata.push(data2)
    alldata.push(data3)
    alldata.push(data4)
    alldata.push(data5)
     
console.log(alldata) 

if (Object.keys(data1, data2, data3, data4, data5).includes('Title', 'Description', 'Author', 'Pages')) {
    console.log('true');
} else {
    console.log('false');
}