const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close');

// tất cả những code : 'modal &&' là bằng với ý nghĩa nếu có biến modal thì mới thực thi đoạn code sau dấu &&
// nếu a kobieest thì có thể học thêm về các cách so sánh || && của js

//Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
  modal && modal.classList.add('open');
}

//Hàm ẩn modal mua vé (gỡ bỏ class open của modal)-
function hideBuyTickets() {
  modal && modal.classList.contains('open')
    ? modal.classList.remove('open')
    : console.log('Khong co class open');
}


//Lặp qua từng thẻ button và lắng nghe hành vi click 
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
}
//Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
})