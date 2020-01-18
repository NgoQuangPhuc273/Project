let giaoVienNguVan = [
    {
        ten: "Nguyễn Thị Ngọc Oanh",
        cachDay: -2.0,
        tamLy: 5.0,
        diem: 10.0,
        luotDanhGia: 10,
    },
    {
        ten: "Đặng Ngọc Phương",
        cachDay: 4.0,
        tamLy: 3.0,
        diem: 2.0,
        luotDanhGia: 10,
    },
]

function displayTeacherLit() {
    let sumTr = '';
    for (let i = 0; i < giaoVienNguVan.length; i++) {
        const teacher = giaoVienNguVan[i];
        sumTr += `
        <tr>
            <td id="ten">${teacher.ten}</td>
        </tr>
        <tr>
            <td class="danhgia">Lượt đánh giá: </td>
            <td>${teacher.luotDanhGia}</td>
        </tr>
        <tr>
            <td>Cách dạy: </td>
            <td>${teacher.cachDay}</td>
        </tr>
        <tr>
            <td>Tâm lý: </td>
            <td>${teacher.tamLy}</td>
        </tr>
        <tr>
            <td id="score">Điểm: </td>
            <td>${teacher.diem}</td>
        </tr>

        ` 
    }
    document.getElementById('display-teachers-lit').innerHTML = sumTr;
}
displayTeacherLit()