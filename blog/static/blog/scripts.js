document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll("li");

    posts.forEach(post => {
        post.addEventListener("mouseover", function() {
            post.style.backgroundColor = "#e0e0e0";
        });

        post.addEventListener("mouseout", function() {
            post.style.backgroundColor = "#fff";
        });
    });
});

