function findAvg(scores) {
    if (scores.length === 0) {
        console.log("Mảng điểm trống.");
        return 0;
    }

    let sum = 0;
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
        count++;
    }
    let avg = sum / count;
    return avg;
}
