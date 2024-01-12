function sumOfListPrime(x) {
    let sum = 0;
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i <= x; i++) {
        let isCurrentNumberPrime = true;

        if (i < 2) {
            isCurrentNumberPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isCurrentNumberPrime = false;
                    break;
                }
            }
        }

        if (isCurrentNumberPrime) {
            sum += i;
        }
    }

    return sum;
}
