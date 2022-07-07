const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan warna-warna cat yang dimiliki Pak Bayu : ", (warna) => {
    rl.question("Berapa jumlah warna yang dicampur : ", (campuran) => {
        const arr = warna.split(",")
        const length = arr.length

        const factorial = (n) => {
            let ans = 1;

            for (let i = 2; i <= n; i++)
                ans = ans * i;
            return ans;
        }

        const combination = () => {
            return factorial(length) / (factorial(length - Number(campuran)) * factorial(campuran))
        }

        console.log(`Ada ${combination()} warna cat baru yang akan diperoleh oleh pak Bayu setelah mencampurkan ${campuran} warna dari ${length} warna cat yang ada`)
        rl.close()
    })
})