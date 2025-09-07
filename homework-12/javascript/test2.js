"use strict";
if (confirm(`Почати   тестування?`)) {
    // Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
    // Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
    let arr = [10, 93, 76, 84, 18, 8, 85, 3];
    document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr}]- сортування бульбашкою</div><br>`);
    let changed;
    let endIndex = arr.length;
    do {
        changed = false;
        for (let i = 1; i < endIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                let tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
                changed = true;
                document.write(`<p>[${arr.join(", ")}]</p>`);
            }
        }
        endIndex--;
    } while (changed);
    let arr1 = [10, 93, 76, 84, 18, 8, 85, 3];
    document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr1}] - сортування змішуванням</div><br>`);
    let rightIndex = arr1.length;
    let leftIndex = 0;
    while (leftIndex < rightIndex) {
        let changed = false;
        for (let i = leftIndex; i < rightIndex - 1; i++) {
            if (arr1[i - 1] > arr1[i]) {
                let tmp = arr1[i - 1];
                arr1[i - 1] = arr1[i];
                arr1[i] = tmp;
                changed = true;
                document.write(`<p>[${arr1.join(", ")}]</p>`);
            }
        }
        rightIndex--;
        if (changed === false)
            break;
        for (let i = rightIndex; i > leftIndex; i--) {
            if (arr1[i - 1] > arr1[i]) {
                let tmp = arr1[i - 1];
                arr1[i - 1] = arr1[i];
                arr1[i] = tmp;
                changed = true;
                document.write(`<p>[${arr1.join(", ")}]</p>`);
            }
        }
        leftIndex--;
    }
    let arr2 = [10, 93, 76, 84, 18, 8, 85, 3];
    document.write(`<div style="fort-size:24px; margin-bottm:10px;">[${arr2}]- сортування включенням</div><br>`);
    let key, i;
    for (let k = 1; k < arr2.length; k++) {
        key = arr2[k];
        i = k - 1;
        while (i >= 0 && arr2[i] > key) {
            arr2[i + 1] = arr2[i];
            i--;
            document.write(`<p>[${arr2.join(", ")}]</p>`);
        }
        arr2[i + 1] = key;
        document.write(`<p>[${arr2.join(", ")}]</p>`);
    }
}
