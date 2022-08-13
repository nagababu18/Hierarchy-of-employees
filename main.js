const staffMembers = [
    { 
        "_id" :0, 
        "name" : "David", 
        "surname" : "Smith", 
        "slug": "david-smith",
        "category" : "operations",
        "title": "Head of Development",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :1, 
        "name" : "John", 
        "surname" : "Jones", 
        "slug": "john-jones",
        "category" : "operations",
        "title": "Head of Marketing",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :2, 
        "name" : "Jane", 
        "surname" : "Sampson", 
        "slug": "jane-sampson",
        "category" : "operations",
        "title": "Head of Content",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :3, 
        "name" : "Nick", 
        "surname" : "Thompson", 
        "slug": "nick-thompson",
        "category" : "operations",
        "title": "Head of Design",
        "reportsTo": "terry-cats"
    },
    { 
        "_id" :4, 
        "name" : "Nick", 
        "surname" : "Jenson", 
        "slug": "nick-jenson",
        "category" : "interns",
        "title": "Intern designer",
        "reportsTo": "nick-thompson" 
    },
    { 
        "_id" :5, 
        "name" : "Simon", 
        "surname" : "Says",
        "slug": "simon-says", 
        "category" : "operations",
        "title": "Head of Strategy",
        "reportsTo": "bruce-davids" 
    },
    { 
        "_id" :6, 
        "name" : "Terry", 
        "surname" : "Cats", 
        "slug": "terry-cats",
        "category" : "c-suite",
        "title": "Chief Creative Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :7, 
        "name" : "Bruce", 
        "surname" : "Davids", 
        "slug": "bruce-davids",
        "category" : "c-suite",
        "title": "Chief Strategy Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :8, 
        "name" : "Bill", 
        "surname" : "Bass", 
        "slug": "bill-bass",
        "category" : "c-suite",
        "title": "Chief Executive Officer",
        "reportsTo": "" 
    }
]

const categories = [
    { 
        "_id" :2, 
        "name" : "Interns", 
        "parent" : "operations", 
        "slug" : "interns" 
    },
    { 
        "_id" :0, 
        "name" : "Executive", 
        "parent" : "", 
        "slug" : "c-suite" 
    },
    
    { 
        "_id" :1, 
        "name" : "Operations", 
        "parent" : "c-suite", 
        "slug" : "operations" 
    },
    
];

// Review the instructions to complete this assessment
// console.info('Your application must have the following output:\n');
// console.info('* Terry Cats - Chief Creative Officer: Executive\n\t* Nick Thompson - Head of Design: Operations\n\t\t * Nick Jenson - Intern designer: Interns\n* Bruce Davids - Chief Strategy Officer: Executive\n\t* David Smith - Head of Development: Operations\n\t* John Jones - Head of Marketing: Operations\n\t* Jane Sampson - Head of Content: Operations\n\t* Simon Says - Head of Strategy: Operations\n* Bill Bass - Chief Executive Officer: Executive');

// Start your code here but please comment out the above logs

var sortedCategories = [];
function sortCategories() {
    sortedCategories = categories.sort(function (a, b) {
        if (a.slug  === b.parent || a.parent === "") return -1;
        if (a.parent === b.slug) return 1;
        return 0;
      });
    
    
    console.log("testing sorted categories::::", sortedCategories)
} 

sortCategories("");


//  Note: Implemented by categories and reportTo key only. I had commented by catergories code please test both. Thanks
//Sorting staff based on categories::::

// function sortEmployees() {
//     let sortMem = [];
//     sortedCategories.forEach((category) => {
//         let newMem = staffMembers.filter(staff => staff.category === category.slug);
//         sortMem.push(newMem); 
//     })
//     let newArray = [];
    
//     sortMem[0].forEach(mem => {
//         newArray.push(mem);
//         let xys = staffMembers.filter(s => s.reportsTo === mem.slug);
        
//         if (xys.length) {
//             xys.forEach(x => {
//                 newArray.push(x)
//                 let k = staffMembers.filter(s => s.reportsTo === x.slug);
//                 if (k.length) {
//                     k.forEach(z => newArray.push(z));
//                 }
//             })
//         }
            
//     })
//     // })
//     console.log(newArray)
// }

// sortEmployees()

// Sorting staff members based on reportTo key only
function sortEmployees1() {
    let sortedEmployees = [];
    let p1 = staffMembers.filter(staff => staff.reportsTo === '');
    p1.forEach(mem => {
        sortedEmployees.push(mem);
        let xys = staffMembers.filter(s => s.reportsTo === mem.slug);
        
        if (xys.length) {
            xys.forEach(x => {
                sortedEmployees.push(x)
                let k = staffMembers.filter(s => s.reportsTo === x.slug);
                if (k.length) {
                    k.forEach(z => sortedEmployees.push(z));
                }
            })
        }
            
    })
    console.log("Testing sorted employees", sortedEmployees)
}   

sortEmployees1()