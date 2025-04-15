
const rowsPerPage = 100;
let currentPage = 1;

function renderBooks(booksToRender) {
  const list = document.getElementById("book-list");
  list.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const paginatedBooks = booksToRender.slice(start, start + rowsPerPage);

  for (const book of paginatedBooks) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.titolo}</td>
      <td>${book.autore}</td>
      <td>${book.casa_editrice}</td>
      <td>${book.luogo_anno}</td>
      <td>${book.isbn}</td>
      <td>${book.tema}</td>
    `;
    list.appendChild(row);
  }

  renderPagination(booksToRender.length);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active-page");
    btn.addEventListener("click", () => {
      currentPage = i;
      applyFilter();
    });
    pagination.appendChild(btn);
  }
}

function applyFilter() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = books.filter(book =>
    book.titolo.toLowerCase().includes(query) ||
    book.autore.toLowerCase().includes(query) ||
    book.casa_editrice.toLowerCase().includes(query) ||
    book.tema.toLowerCase().includes(query)
  );
  renderBooks(filtered);
}

document.getElementById("search").addEventListener("input", () => {
  currentPage = 1;
  applyFilter();
});

document.addEventListener("DOMContentLoaded", () => {
  applyFilter();
});
