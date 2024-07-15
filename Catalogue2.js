let data1 = [{
    Title:'The Sign of the Four',
    Description:'Mistery',
    Author:'Arthur Conan Doyle',
    Pages:117
    }]
let data2 = [{
    Title:'The Attic Murder',
    Description:'Thriller',
    Author:'Fowler Right',
    Pages:212
    }]

//to combine data1 and data2 into one new array
let alldata1 =  new Array()
alldata1.push(data1)
alldata1.push(data2)
//To show data1 and data2 in a new array
console.log(alldata1) 

//extension of the Lab6. Add 3 more data
let data3 = [{
    Title:'The Phantom of the Opera',
    Description:'Psychological',
    Author:'Gaston Leroux',
    Pages:254
    }]
let data4 = [{
    Title:'Criminal Psychology',
    Description:'Psychological',
    Author:'Hans Gross',
    Pages:740
    }]
let data5 = [{
    Title:'The Thirty-Nine Steps',
    Description:'History',
    Author:'John Buchan',
    Pages:101
    }]

//to combine all data into one new array
let alldata =  new Array()
    alldata.push(data1)
    alldata.push(data2)
    alldata.push(data3)
    alldata.push(data4)
    alldata.push(data5)

//To show all 5 data into a new array    
console.log(alldata) 

//To change the Description 'value' of data1
const modifiedDescription = data1.map(obj => {
    if (obj.Title === 'The Sign of the Four') {
        return {...obj, Description: "Detective" };
    }
    return obj;
});
//To show the modified Description of data1
console.log(modifiedDescription);

//To test if the 'alldata' array obj has defined keys. The result should be 'True'
output = typeof alldata['Title', 'Description', 'Author','Pages'] !== 'defined';
console.log(output)

