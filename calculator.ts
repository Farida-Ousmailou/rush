function multi(A: number, B: number): void {

    try {
        let i = 0
        while (i <= B) {
            let resulat = i * A
            console.log(i, "x", A, "=", resulat)
            i++
        }
    } catch {
        console.log("error")
    }
}

multi(2, 9)