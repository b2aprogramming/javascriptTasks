const charactersData = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// ===== Task To be Done ===

/** ==========================   1. Start Task   ==============================================  */
//1. Get array of all names
/**
 * Task description: Write a method that should return all the names only as an array
 * Expected Result: (charactersData) => ["Luke Skywalker","Darth Vader","Leia Organa","Anakin Skywalker"]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const getNames = function(array) {
    throw new Error(`put your solution here ${array}`);
};  
// const result = getNames(charactersData);


//2. Get array of all heights
/**
 * Task description: Write a method that should return all the heights only as an array
 * Expected Result: (charactersData) => ['172', '202', '150', '188']
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getHeights = function(array) {
    throw new Error(`put your solution here ${array}`);
};  
// const result = getHeights(charactersData);


//3. Get array of objects with just name and height properties
/**
 * Task description: Write a method that should return all the name and height  only as an array
 * Expected Result: (charactersData) => [
    {
        "name": "Luke Skywalker",
        "height": "172"
    },
    {
        "name": "Darth Vader",
        "height": "202"
    },
    {
        "name": "Leia Organa",
        "height": "150"
    },
    {
        "name": "Anakin Skywalker",
        "height": "188"
    }
]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getNameAndHeight = function(array){
    throw new Error(`put your solution here ${array}`);
};  
// const result = getNameAndHeight(charactersData);


//4. Get array of all first names
/**
 * Task description: Write a method that should return all the first name only as an array
 * Expected Result: (charactersData) => ['Luke', 'Darth', 'Leia', 'Anakin']
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const getFirstNameOnly = function(array) {
    throw new Error(`put your solution here ${array}`);
};  
// const result = getFirstNameOnly(charactersData);

/** ==========================   1. End Task   ==============================================  */


/** ==========================   2. Start Task   ==============================================  */

//1. Get total mass of all charactersData
/**
 * Task description: Write a method that should return total mass or all charactersData
 * Expected Result: (charactersData) => 346
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getTotalMass = function(array){
    throw new Error(`put your solution here ${array}`);
};  
// const result = getTotalMass(charactersData);



//2. Get total height of all charactersData
/**
 * Task description: Write a method that should return total height or all charactersData
 * Expected Result: (charactersData) => 712
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getTotalHeight = function(array) {
    throw new Error(`put your solution here ${array}`);
};  

// const result = getTotalHeight(charactersData);




//3. Get total number of characters by eye color
/**
 * Task description: Write a method that should return total height or all charactersData
 * Expected Result: (charactersData) => 19
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const getTotalEyeColorCharectors = function (array){
    throw new Error(`put your solution here ${array}`);
};  

// const result = getTotalEyeColorCharectors(charactersData);




//4. Get total number of characters in all the charactersData names
/**
 * Task description: Write a method that should return total height or all charactersData
 * Expected Result: (charactersData) => 52
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const getTotalNamesCharectors = function(array){
    throw new Error(`put your solution here ${array}`);
};  

// const result = getTotalNamesCharectors(charactersData);


/** ==========================   2. End Task   ==============================================  */


/** ==========================   3. Start Task   ==============================================  */

//1. Get charactersData with mass greater than 100
/**
 * Task description: Write a method that should filter and return with mass greater than 100;
 * Expected Result: (charactersData) => [
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "eye_color": "yellow",
        "gender": "male"
    }
]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getMassGreaterThan100 = function(array){
    throw new Error(`put your solution here ${array}`);
};  

// const result = getMassGreaterThan100(charactersData);



//2. Get charactersData with height less than 200

/**
 * Task description: Write a method that should filter and return with height less than 200;
 * Expected Result: (charactersData) => [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "eye_color": "blue",
        "gender": "male"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "eye_color": "brown",
        "gender": "female"
    },
    {
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "eye_color": "blue",
        "gender": "male"
    }
]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getHeightLesThan200 = function(array) {
    throw new Error(`put your solution here ${array}`);
};  

// const result = getHeightLesThan200(charactersData);


//3. Get all male charactersData
/**
 * Task description: Write a method that should filter and return only male charactersData;
 * Expected Result: (charactersData) => [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "eye_color": "blue",
        "gender": "male"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "eye_color": "yellow",
        "gender": "male"
    },
    {
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "eye_color": "blue",
        "gender": "male"
    }
]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getMaleOnly = function(array) {
    throw new Error(`put your solution here ${array}`);
};  

// const result = getMaleOnly(charactersData);



//4. Get all female charactersData
/**
 * Task description: Write a method that should filter and return only female charactersData;
 * Expected Result: (charactersData) => [
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "eye_color": "brown",
        "gender": "female"
    }
]
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
 const getFemaleOnly = function(array){
    throw new Error(`put your solution here ${array}`);
};  

// const result = getFemaleOnly(charactersData);



/** ==========================   3. End Task   ==============================================  */


/** ==========================   4. Start Task   ==============================================  */

//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

/** ==========================   4. End Task   ==============================================  */


//1. Does every charactersData have blue eyes?
//2. Does every charactersData have mass more than 40?
//3. Is every charactersData shorter than 200?
//4. Is every charactersData male?


//1. Is there at least one male charactersData?
//2. Is there at least one charactersData with blue eyes?
//3. Is there at least one charactersData taller than 210?
//4. Is there at least one charactersData that has mass less than 50?