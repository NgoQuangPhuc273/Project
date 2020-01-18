let giaoVienVatLy = [
    {
        ten: "Nguyễn Xuân Quang",
        cachDay: 3.0,
        tamLy: 2.0,
        diem: 5.0,
        luotDanhGia: 10,
    },
    {
        ten: "Đinh Trần Phương",
        cachDay: 4.0,
        tamLy: 3.0,
        diem: 5.0,
        luotDanhGia: 10,
    },

]

function displayTeacher() {
    let sumTr = '';
    for (let i = 0; i < giaoVienVatLy.length; i++) {
        const teacher = giaoVienVatLy[i];
        sumTr += `
        <tr>
            <td id="ten"><a href="/details_Teacher/vatLy${i+1}.html">${teacher.ten}</a></td>
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
    document.getElementById('display-teachers-physics').innerHTML = sumTr;
}
displayTeacher()