const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

// tất cả những code : 'modal &&' là bằng với ý nghĩa nếu có biến modal thì mới thực thi đoạn code sau dấu &&
// nếu a kobieest thì có thể học thêm về các cách so sánh || && của js

function showBuyTickets() {
  modal && modal.classList.add('open');
}

function hideBuyTickets() {
  modal && modal.classList.contains('open')
    ? modal.classList.remove('open')
    : console.log('Khong co class open');
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);
