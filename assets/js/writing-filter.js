document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function(button) {
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
  });
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');
      var rows = document.querySelectorAll('.writing-row');
      rows.forEach(function(row) {
        var rowCategory = row.getAttribute('data-category');
        var shouldDisplay = (filterValue === 'all' || rowCategory === filterValue);
        row.style.display = shouldDisplay ? '' : 'none';
      });
    });
  });
});
