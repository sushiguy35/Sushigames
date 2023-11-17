/* makes the search bar work! */
// Ensure the DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById('searchInput');
  const games = document.querySelectorAll('#games img');

  input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach(game => {
      const gameAlt = game.alt.toLowerCase();
      if (gameAlt.includes(searchTerm)) {
        game.style.display = 'block';
      } else {
        game.style.display = 'none';
      }
    });
  });
});

// end of search bar thing

/* makes it so you can scroll with arrow keys */
function myFunction( 	) {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

window.document.body.focus()
var event = new KeyboardEvent('keydown', {
    key: 'ArrowDown',
    keyCode: 40,
    which: 40,
    code: 'ArrowDown'
  });
  document.dispatchEvent(event);

const useHook = () => {
 const [state, setState] = useState({})

 const someHandler = useCallback(() => { // does something },[])
 return {
  state,
  setState,
  someHandler
 }})}
