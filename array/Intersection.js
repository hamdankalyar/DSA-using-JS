function ArrayIntersection(arr1, arr2) {
    let intersectedArray = [];
    let elementsArr1 = {};
    let elementsArr2 = {};
    arr1.forEach(element => {
        if (!elementsArr1.hasOwnProperty(element.toString()))
            elementsArr1[element.toString()] = "";
    })
    arr2.forEach(element => {
        if (!elementsArr2.hasOwnProperty(element.toString()))
            elementsArr2[element.toString()] = "";
    })
    for (let key in elementsArr1) {
        if (elementsArr2.hasOwnProperty(key)) {
            intersectedArray.push(key)
        }
    }
    return intersectedArray
}
let arr1 = [1, 2, 3, 3, 4, 5]
let arr2 = [1, 2, 3, 3, 4]
console.log(ArrayIntersection(arr1, arr2))

function intersection(arr1, arr2) {
    let intersectedArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                let alreadyExist = false;

                for (let k = 0; k < intersectedArray.length; k++) {
                    if (arr1[i] == intersectedArray[k]) {
                        alreadyExist = true
                        break
                    }

                }
                if (!alreadyExist) {
                    intersectedArray.push(arr1[i])
                }



            }
        }
    }
    return intersectedArray;
}
console.log(intersection(arr1, arr2))