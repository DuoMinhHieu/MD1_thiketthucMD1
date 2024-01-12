function insertNumberToArray(arr, x, index) {
    if (index < 0 || index > arr.length) {
        console.log("Vị trí index không hợp lệ.");
        return arr;
    }
    let newArray = [];
    for (let i = 0; i < index; i++) {
        newArray[i] = arr[i];
    }
    newArray[index] = x;
    for (let i = index; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}
