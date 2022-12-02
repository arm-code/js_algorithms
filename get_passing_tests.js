/**
 * This function retunr all the test results that hace a passing grade (10 and above).
 * In this program we are working with objects js.
 */

function getPassingTests(results){
    console.log(results);
    return results.filter((grade) => grade.grade >= 10);
}

// object
const data = [
    {
        id: 1 , grade: 10
    },
    {
        id: 2 , grade: 4
    },
    {
        id: 3 , grade: 18
    }
]

console.log(getPassingTests(data))