$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('.agenda-v2--sidebar-mobile').toggleClass('active');
    $('#sidebarCollapse').toggleClass('collapsed');
  });
});

$(document).ready(function () {
  $('#sidebarCollapse-desktop-mobile').on('click', function () {
    $('.agenda-v2-alt').toggleClass('collapsed');
  });
});

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
