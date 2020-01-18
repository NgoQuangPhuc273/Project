let giaoVienQP = [
    {
        ten: "Nguyễn Văn Định",
        cachDay: 3.0,
        tamLy: 2.0,
        diem: 5.0,
        luotDanhGia: 10,
    },
    {
        ten: "Nguyễn Văn Mạnh",
        cachDay: 4.0,
        tamLy: 3.0,
        diem: 5.0,
        luotDanhGia: 10,
    },

]

function displayTeacherCN() {
    let sumTr = '';
    for (let i = 0; i < giaoVienQP
    .length; i++) {
        const teacher = giaoVienQP[i];
        sumTr += `
        <tr>
            <td id="ten">${teacher.ten}</td>
        </tr>
        <tr>
            <td class="danhgia">Lượt đánh giá: </td>
            <td>${teacher.luotDanhGia}</td>
        </tr>
        <tr>
            <td>Cách dạy:</td>
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
    document.getElementById('display-teachers-qp').innerHTML = sumTr;
}
displayTeacherCN()