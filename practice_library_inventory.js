let books = [
    { bookCode: "B01", title: "Lap trinh JavaScript", category: "CNTT", price: 120000, totalCopies: 10, availableCopies: 1, shelfLocation: "A1-01", status: "CON SACH" },
    { bookCode: "B02", title: "Cau truc du lieu", category: "CNTT", price: 185000, totalCopies: 8, availableCopies: 5, shelfLocation: "A1-02", status: "CON SACH" },
    { bookCode: "B03", title: "Co so du lieu MySQL", category: "CNTT", price: 150000, totalCopies: 6, availableCopies: 6, shelfLocation: "A2-01", status: "CON SACH" },
    { bookCode: "B04", title: "Kinh te vi mo", category: "Kinh te", price: 95000, totalCopies: 12, availableCopies: 9, shelfLocation: "B1-03", status: "CON SACH" }
]

// Nhập kho ấn bản mới (Create): Thêm sách mới vào mảng kho bằng push().
console.log("====NHẬP KHO SÁCH MỚI====")
books.push({ bookCode: "B05", title: "Python cơ bản", category: "CNTT", price: 140000, totalCopies: 5, availableCopies: 5, shelfLocation: "A2-02", status: "CON SACH" });
console.log("Đã thêm sách thành công!")

// Xuất mượn sách (Update): Khi có sinh viên mượn sách B01, giảm availableCopies đi 1 cuốn. Nếu availableCopies === 0, chuyển trạng thái "HẾT SÁCH TRÊN KỆ".
console.log("====XUẤT MƯỢN SÁCH====")
let borrowBookcode = "B01"
let flags = false
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === borrowBookcode) {
        flags = true;

        // kiểm tra hợp lệ trước khi giảm, không để availableCopies < 0
        if (books[i].availableCopies > 0) {
            books[i].availableCopies = books[i].availableCopies - 1;
            console.log("Sinh viên mượn sách " + borrowBookcode + " thành công. Còn lại: " + books[i].availableCopies);
        } else {
            console.log("Sách " + borrowBookcode + " đã hết, không thể mượn!");
        }

        if (books[i].availableCopies === 0) {
            books[i].status = "HẾT SÁCH TRÊN KỆ";
            console.log("Sách " + borrowBookcode + " đã HẾT SÁCH TRÊN KỆ!");
        }
    }
}
if (flags === false) {
    console.log("Không tìm thấy sách!")
}

// Thanh lý sách hỏng (Delete): Loại bỏ đầu sách đã thanh lý bằng splice()
console.log("====THANH LÝ SÁCH HỎNG====")
let deleteBookcode = "B04"
let deleteIndex = -1
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === deleteBookcode) {
        deleteIndex = i
    }
}

if (deleteIndex !== -1) {
    books.splice(deleteIndex, 1)
    console.log("Đã thanh lý sách: " + deleteBookcode)
} else {
    console.log("Không tìm thấy sách cần thanh lý")
}

// Kiểm kê tài sản (Read): Tính tổng số lượng sách và tổng giá trị tài sản kho (totalCopies * price).
console.log("====KIỂM KÊ SÁCH SAU CẬP NHẬT====")
console.log("|| Mã || Tên sách || Thể loại || Giá || Tổng || Còn lại || Vị trí || Trạng thái ||")
console.log("======================================")
for (let i = 0; i < books.length; i++) {
    console.log("|| " + books[i].bookCode + " || " + books[i].title + " || " + books[i].category + " || " + books[i].price + " || " + books[i].totalCopies + " || " + books[i].availableCopies + " || " + books[i].shelfLocation + " || " + books[i].status + " ||")
}
console.log("======================================")

let totalBooks = 0
let totalValue = 0

for (let i = 0; i < books.length; i++) {
    totalBooks = totalBooks + books[i].totalCopies
    totalValue = totalValue + books[i].totalCopies * books[i].price
}

console.log("Tổng số lượng sách: " + totalBooks + " cuốn")
console.log("Tổng giá trị tài sản kho: " + totalValue + " VND")