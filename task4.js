/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */
 const deleteButton = document.getElementById('deleteButton');
 const dropdown = document.getElementById('dropdown');
 
 function deleteSelectedOption() {
     const selectedOption = dropdown.options[dropdown.selectedIndex];
     dropdown.removeChild(selectedOption);
 }
 
 deleteButton.addEventListener('click', deleteSelectedOption);