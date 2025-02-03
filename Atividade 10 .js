const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < 10; i += 2) {
    if (array[i] > i + 2) {
        continue;
    }
    console.log(array[i]);
}
