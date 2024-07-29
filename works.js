document.addEventListener('DOMContentLoaded', function() {
    var workItems = document.querySelectorAll('.work-item');
  
    function checkVisibility() {
      workItems.forEach(function(item) {
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
  
    // 初回チェック
    checkVisibility();
  });