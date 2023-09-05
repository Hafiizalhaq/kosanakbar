let saldo = 0;
const catatanTransaksi = [];
let namaPengguna = "";

function updateSaldo() {
    const saldoElement = document.getElementById("saldo");
    saldoElement.textContent = `Rp ${saldo.toLocaleString()}`;
}

function tambahPemasukan() {
    const jumlah = parseFloat(document.getElementById("jumlah").value);
    if (!isNaN(jumlah) && jumlah > 0) {
        saldo += jumlah;
        catatanTransaksi.push({ nama: namaPengguna, transaksi: `+Rp ${jumlah.toLocaleString()}` });
        updateSaldo();
        tampilkanCatatanTransaksi();
    }
}

function tambahPengeluaran() {
    const jumlah = parseFloat(document.getElementById("jumlah").value);
    if (!isNaN(jumlah) && jumlah > 0) {
        saldo -= jumlah;
        catatanTransaksi.push({ nama: namaPengguna, transaksi: `-Rp ${jumlah.toLocaleString()}` });
        updateSaldo();
        tampilkanCatatanTransaksi();
    }
}

// Menambahkan nama
document.getElementById("nama").addEventListener("input", function () {
    namaPengguna = document.getElementById("nama").value;
    document.getElementById("nama-pengguna").textContent = namaPengguna;
});

function tampilkanCatatanTransaksi() {
    const catatanElement = document.getElementById("catatan-transaksi");
    catatanElement.innerHTML = "";
    catatanTransaksi.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nama}: ${item.transaksi}`;
        catatanElement.appendChild(li);
    });
}
