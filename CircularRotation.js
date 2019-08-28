function entrada() {
    input = "";
    process.stdin.on("data", function (input1) {
        input += input1;
    });

    process.stdin.on("end", function () {
        conta(input);
    });
}
entrada();

function conta(input) {
    var input = input.split('\n');
    let array = input[0].split(' ');
    let a = array[0];
    let k = array[1];
    let q = array[2];

    var rot = k % a;

    var arr = input[1].split(' ');

    for (let i = 2; i < input.length; i++) {
        var m = input[i];
        if (m - rot >= 0) {
            console.log(arr[m - rot]);
        }
        else {
            console.log(arr[m - rot + arr.length]);
        }

    }


}
