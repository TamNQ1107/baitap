const nutBam = document.getElementById("btn-lay-thoi-tiet");
const khoiKetQua = document.getElementById("ket-qua");

// Hàm async để xử lý các hành động cần thời gian chờ đợi (như tải dữ liệu trên mạng)
async function layDuLieuThoiTiet() {
    khoiKetQua.innerText = "Đang tải dữ liệu, chờ xíu nhé...";

    try {
        // 1. Dùng fetch() để gửi yêu cầu đến đường dẫn JSON API
        // Đường dẫn này chứa tọa độ của Hà Nội
        const duongDanAPI = "https://api.open-meteo.com/v1/forecast?latitude=21.0245&longitude=105.8412&current_weather=true";
        const phanHoi = await fetch(duongDanAPI);

        // 2. Chuyển đổi dữ liệu nhận được từ Server sang dạng Object trong Javascript (.json())
        const duLieuJSON = await phanHoi.json();

        // Hãy bật F12 trên trình duyệt, vào tab Console để ngắm nghía "hình hài" của cục dữ liệu JSON này nhé:
        console.log("Cục dữ liệu JSON nhận được:", duLieuJSON);

        // 3. Bóc tách dữ liệu JSON để lấy thông tin cần thiết
        // Dựa vào cấu trúc JSON của API này, nhiệt độ nằm ở: duLieuJSON.current_weather.temperature
        const nhietDo = duLieuJSON.current_weather.temperature;
        const tocDoGio = duLieuJSON.current_weather.windspeed;

        // 4. Bắn dữ liệu lên giao diện HTML cho người dùng xem
        khoiKetQua.innerHTML = `
            📍 Địa điểm: Hà Nội <br>
            🌡️ Nhiệt độ hiện tại: ${nhietDo}°C <br>
            💨 Tốc độ gió: ${tocDoGio} km/h
        `;

    } catch (loi) {
        // Phòng trường hợp mất mạng hoặc API bị sập
        console.error("Lỗi rồi:", loi);
        khoiKetQua.innerText = "Không thể lấy được dữ liệu thời tiết!";
    }
}

// Lắng nghe sự kiện click chuột của người dùng để kích hoạt hàm gọi API
nutBam.addEventListener("click", layDuLieuThoiTiet);