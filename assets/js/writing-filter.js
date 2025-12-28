document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      var rows = document.querySelectorAll('.writing-row');
      rows.forEach(function(row) {
        var rowCategory = row.getAttribute('data-category');
        var shouldDisplay = (filterValue === 'all' || rowCategory === filterValue);
        row.style.display = shouldDisplay ? '' : 'none';
      });
    });
  });
});
