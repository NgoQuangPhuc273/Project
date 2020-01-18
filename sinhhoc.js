let giaoVienSinhHoc = [
    {
        ten: "Huỳnh Thị Ái Tâm",
        cachDay: -2.0,
        tamLy: 5.0,
        diem: 10.0,
        luotDanhGia: 10,
    },
    {
        ten: "Nguyễn Quang Anh",
        cachDay: 4.0,
        tamLy: 3.0,
        diem: 2.0,
        luotDanhGia: 10,
    },
]

function displayTeacherBio() {
    let sumTr = '';
    for (let i = 0; i < giaoVienSinhHoc.length; i++) {
        const teacher = giaoVienSinhHoc[i];
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
    document.getElementById('display-teachers-bio').innerHTML = sumTr;
}
displayTeacherBio()