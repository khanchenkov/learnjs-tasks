// Вот документ с таблицей и формой.

// Как найти?…
// Таблицу с id="age-table".
const table = document.getElementById("age-table");
// Все элементы label внутри этой таблицы (их три).
const labels = table.getElementsByTagName("label");
// Первый td в этой таблице (со словом «Age»).
const td1 = table.getElementsByTagName("td")[0];
// Форму form с именем name="search".
const form = document.querySelector('form[name="search"]');
// Первый input в этой форме.
const input = form.querySelector("input");
// Последний input в этой форме.
const inputs = form.querySelectorAll("input");
inputs[inputs.length - 1];
