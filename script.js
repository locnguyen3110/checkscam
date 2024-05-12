document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('productList').getElementsByTagName('tbody')[0];
    const detailsModal = document.getElementById('detailsModal');

    // Sample data (you can replace this with your own data)
    const products = [
        { id: 1, image: 'https://i.imgur.com/qXdRLcE.jpeg', name: 'Nguyễn Văn Trọng', phoneNumber: '0795850424', accountNumber: 'trống', details: 'trống ' },
        { id: 2, image: 'https://i.imgur.com/oQErc5I.jpeg', name: 'Bờm Bán Mắm', phoneNumber: '0349894644', accountNumber: '109880119293', details: 'VIETTINBANK: NGUYEN HUYNH HUU BANG \n MOMO: 0349894644' },
        { id: 3, image: 'https://i.imgur.com/dttdBBr.jpeg', name: 'Nguyễn Đan Phong', phoneNumber: 'Khó xác định', accountNumber: '0345815175', details: 'MBBANK: NGUYEN DAN PHONG ' },
        { id: 4, image: 'https://i.imgur.com/Y7NV00T.jpeg', name: 'Phạm Quốc Khánh ', phoneNumber: 'Khó xác định', accountNumber: '16860121\n00005805163', details: 'ACBBANK: PHAM QUOC KHANH\nTPBANK: PHAM QUOC KHANH' },
        // { id: 2, image: 'https://via.placeholder.com/100', name: 'trống ', phoneNumber: 'trống', accountNumber: 'trống', details: 'trống ' },
        // { id: 3, image: 'https://via.placeholder.com/100', name: 'trống ', phoneNumber: 'trống', accountNumber: 'trống', details: 'trống ' },
        // { id: 1, image: 'https://via.placeholder.com/100', name: 'trống ', phoneNumber: 'trống', accountNumber: 'trống', details: 'trống ' },
        // { id: 2, image: 'https://via.placeholder.com/100', name: 'trống ', phoneNumber: 'trống', accountNumber: 'trống', details: 'trống ' },
        // { id: 3, image: 'https://via.placeholder.com/100', name: 'trống ', phoneNumber: 'trống', accountNumber: 'trống', details: 'trống ' },
    ];
     
    // Function to show large image in modal
function showLargeImage(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

function showDetails(productId) {
    // Hiển thị thông báo và chi tiết sản phẩm tương ứng
    const product = products.find(item => item.id === productId);
    const modalBody = detailsModal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <p>THẰNG BẠN VỪA TÌM KIẾM LÀ THẰNG SCAM:</p>
        <p>Tên tài khoản: ${product.name}</p>
        <p>Số điện thoại: ${product.phoneNumber}</p>
        <p>Số tài khoản: ${product.accountNumber}</p>
        <p>Tên Ngân Hàng: ${product.details}</p>
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%;">
    `;
    detailsModal.style.display = 'block';
}


    
     // Sự kiện đóng thông báo
     const closeModalButton = detailsModal.querySelector('.close');
     closeModalButton.addEventListener('click', function() {
         hideDetails();
     });

   // Hàm ẩn thông báo
   function hideDetails() {
    detailsModal.style.display = 'none';
}

    // Xử lý sự kiện tìm kiếm
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchValue = searchForm.querySelector('input').value.trim();
    const product = products.find(item => item.accountNumber === searchValue || item.phoneNumber === searchValue);
    if (product) {
        showDetails(product.id);
    } else {
        alert('Không tìm thấy sản phẩm với số tài khoản hoặc số điện thoại này.');
    }
});
// Hàm hiển thị thông tin sản phẩm
function showProductDetails(product) {
    const row = productList.insertRow();
    const idCell = row.insertCell(0);
    const imageCell = row.insertCell(1);
    const nameCell = row.insertCell(2);
    const phoneNumberCell = row.insertCell(3);
    const accountNumberCell = row.insertCell(4);
    const detailsCell = row.insertCell(5);


    idCell.innerText = product.id;

    const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.style.cursor = 'pointer'; // Đặt con trỏ thành pointer khi rê chuột qua ảnh
        image.addEventListener('click', function() {
            showLargeImage(product.image); // Hiển thị ảnh lớn khi nhấp vào ảnh
        });
        imageCell.appendChild(image);

    nameCell.innerText = product.name;
    accountNumberCell.innerText = product.accountNumber;
    phoneNumberCell.innerText = product.phoneNumber;
    detailsCell.innerText = product.details;

    
}

    // Populate table with data
    products.forEach(function(product) {
        const row = productList.insertRow();
        const idCell = row.insertCell(0);
        const imageCell = row.insertCell(1);
        const nameCell = row.insertCell(2);
        const phoneNumberCell = row.insertCell(3); // Thêm ô cho Số Điện Thoại
        const accountNumberCell = row.insertCell(4); // Ô cho Số Tài Khoản
        const detailsCell = row.insertCell(5);
       

        idCell.innerText = product.id;

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.style.cursor = 'pointer'; // Đặt con trỏ thành pointer khi rê chuột qua ảnh
        image.addEventListener('click', function() {
            showLargeImage(product.image); // Hiển thị ảnh lớn khi nhấp vào ảnh
        });
        imageCell.appendChild(image);

        nameCell.innerText = product.name;

        // Thêm số tài khoản vào ô tương ứng
        accountNumberCell.innerText = product.accountNumber;
        phoneNumberCell.innerText = product.phoneNumber; // Đặt giá trị Số Điện Thoại

        detailsCell.innerText = product.details;
    });
});
