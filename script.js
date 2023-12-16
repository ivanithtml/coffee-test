document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('modalWindow');
    var closeButton = document.getElementById('closeButton');
    var form = document.getElementById('applicationForm');
  
    closeButton.onclick = function() {
      modal.style.display = 'none';
    }
  
    form.onsubmit = function(event) {
      event.preventDefault();
      if (form.checkValidity()) {
        var formData = {
          name: form.name.value,
          phone: form.phone.value
        };
        console.log(JSON.stringify(formData)); // Вместо отправки, печатаем JSON в консоль.
        modal.style.display = 'none';
      }
    }
  });
 