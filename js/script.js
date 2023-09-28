function hitungAkar() {
    // Mengambil nilai koefisien
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Menghitung diskriminan
    var diskriminan = math.subtract(math.pow(b, 2), math.multiply(4, math.multiply(a, c)));

    // Memeriksa
    var akar1, akar2;
    if (math.larger(diskriminan, 0)) {
        akar1 = math.divide(math.add(-b, math.sqrt(diskriminan)), math.multiply(2, a));
        akar2 = math.divide(math.subtract(-b, math.sqrt(diskriminan)), math.multiply(2, a));
    } else if (math.equal(diskriminan, 0)) {
        akar1 = akar2 = math.divide(math.multiply(-1, b), math.multiply(2, a));
    } else {
        var realPart = math.divide(math.multiply(-1, b), math.multiply(2, a));
        var imaginaryPart = math.divide(math.sqrt(math.multiply(-1, diskriminan)), math.multiply(2, a));
        akar1 = math.format(math.add(realPart, imaginaryPart), { notation: 'fixed', precision: 2 });
        akar2 = math.format(math.subtract(realPart, imaginaryPart), { notation: 'fixed', precision: 2 });
    }

    // Menampilkan hasil
    document.getElementById("akar1").textContent = "Akar 1 : " + akar1;
    document.getElementById("akar2").textContent = "Akar 2 : " + akar2;
}