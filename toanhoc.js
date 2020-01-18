let giaoVienToanHoc = [
    {
        ten: "Trương Nam Phương",
        cachDay: 3.0,
        tamLy: 2.0,
        diem: 5.0,
        luotDanhGia: 10,
    },
    {
        ten: "Nguyễn Tiến Trung",
        cachDay: 4.0,
        tamLy: 3.0,
        diem: 2.0,
        luotDanhGia: 10,
    },
]

function displayTeacherMath() {
    let sumTr = '';
    for (let i = 0; i < giaoVienToanHoc.length; i++) {
        const teacher = giaoVienToanHoc[i];
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
    document.getElementById('display-teachers-math').innerHTML = sumTr;
}
displayTeacherMath()