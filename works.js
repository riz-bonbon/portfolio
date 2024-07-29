document.addEventListener('DOMContentLoaded', function() {
    var workItems = document.querySelectorAll('.work-item');
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // 一度表示されたら監視を外す
        }
      });
    }, {
      threshold: 0.1 // 10%見えたら
    });
  
    workItems.forEach(function(item) {
      observer.observe(item);
    });
  });