document.addEventListener('DOMContentLoaded', function () {
    const saveBookButton = document.getElementById('saveBookButton');
    saveBookButton.addEventListener('click', function () {
        const bookname = document.getElementById('name').value;
        const bookauthor = document.getElementById('author').value;
        const bookgenre = document.getElementById('genre').value;
        saveBook({ bookname, bookauthor, bookgenre });
    });
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => showbooks(data))
        .catch(function (error) {
            console.log(error)
        })

});
function showbooks(books) {
    let Arraybook = '';
    books.forEach(books => {
        Arraybook += `<tr>
   <td scope="row">${books.id}</td>
    <td>${books.title}</td>
    <td>${books.genre}</td>
    <td>${books.author}</td>
    <td><button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#editar">
    EDITAR
  </button><td>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    ELIMINAR
  </button>
  
    </tr>`;
    
        console.log(Arraybook);
    });
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = Arraybook;

}
async function saveBook({ bookname, bookauthor, bookgenre }) {
    try {

        let request = await fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: bookname,
                author: bookauthor,
                genre: bookgenre
            })

        });
        let createBookModal = new bootstrap.Modal(document.getElementById(exampleModal))
        createBookModal.hide();
    } catch (error) {
      
    }
    function hideModal(modalId) {
        const existingModal = document.getElementById(modalId);
        const modal = bootstrap.Modal.getInstance(existingModal);
        modal.hide();
    }
}



