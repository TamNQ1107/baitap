const thongBaoSoDu = document.getElementById("thongBaoSoDu");
const nhapSoTien = document.getElementById("so-tien");
const nutThuNhap = document.getElementById("btn-thu-nhap");
const nutChiTieu = document.getElementById("btn-chi-tieu");

let soDu = 0;

const capNhatGiaoDien = () => {
    thongBaoSoDu.innerText = soDu.toLocaleString('vi-VN');
}

nutThuNhap.addEventListener("click", () => {
    const tienNhap = parseInt(nhapSoTien.value);
    if (!isNaN(tienNhap) && tienNhap > 0) {
        soDu += tienNhap;
        capNhatGiaoDien();
        nhapSoTien.value = "";
    }else {
        alert("Vui lòng nhập số tiền hợp lệ!");
    }
});

nutChiTieu.addEventListener("click", () => {
    const tienChi = parseInt(nhapSoTien.value);
    if (!isNaN(tienChi) && tienChi > 0) {
        if (tienChi <= soDu) {
            soDu -= tienChi;
            capNhatGiaoDien();
            nhapSoTien.value = "";
        } else {
            alert("Số dư không đủ để chi tiêu!");
        }
    } else {
        alert("Vui lòng nhập số tiền hợp lệ!");
    }
});

capNhatGiaoDien();