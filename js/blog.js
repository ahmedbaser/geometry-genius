function goToPage2() {
    // Change the window location to page2.html
    window.location.href = "blog.html";
}

document.getElementById('btn-blog').addEventListener('click', function() {
    goToPage2();
})