
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button[name="hello"]').onclick = () => {
    alert('hello');
  };
  document.querySelector('button[name="display"]').onclick = () => {
    document.querySelector('div[style="display: none; visibility: hidden;"]').style = "";
  };
});

