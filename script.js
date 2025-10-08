const list = document.getElementById('infi-list');
let itemCount = 0;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Detect scroll to bottom of the page
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items when reaching bottom
  }
});
