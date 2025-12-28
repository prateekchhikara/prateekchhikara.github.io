document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.pub-filter-btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.pub-filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      var rows = document.querySelectorAll('.pub-row');
      rows.forEach(function(row) {
        var rowTag = row.getAttribute('data-tag');
        var shouldDisplay = (filterValue === 'all' || rowTag === filterValue);
        row.style.display = shouldDisplay ? '' : 'none';
      });
    });
  });
});
