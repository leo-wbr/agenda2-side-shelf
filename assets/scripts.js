$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('.agenda-v2--sidebar-alt').toggleClass('active');
    $('#sidebarCollapse').toggleClass('collapsed');
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
