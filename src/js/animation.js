function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

console.log(document.cookie);

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
