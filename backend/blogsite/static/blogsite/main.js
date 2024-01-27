import { fetchHeaders, getCookie } from './utils.js';

const csrftoken = getCookie('csrftoken');
const create = document.querySelector('#create');
const posts = document.querySelector('#posts');
const post = document.querySelector('#post');

document.addEventListener('DOMContentLoaded', () => {
    loadNavigationCategories();
    posts.innerHTML = '';
    loadPosts();
});

// loading the navigation bar with categories and create post button
function loadNavigationCategories() {
    fetch('/api/categories/')
    .then(response => response.json())
    .then(data => {data.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `${category.name}`;
        // added category selection functionality
        div.addEventListener('click', () => {
            posts.innerHTML = '';
            category.posts.forEach(post_id => {
                fetch(`/api/posts/${post_id}/`)
                .then(response => response.json())
                .then(post => {
                    const div = document.createElement('div');
                    div.innerHTML = `<br><hr>${post.title}<br>
                    ${post.body}<br>
                    ${post.owner}<br>`;
                    div.addEventListener('click', () => loadPost(post.id));
                    posts.append(div);
                })
                .catch(error => console.log(error));
            })
        })
        document.querySelector('#nav').append(div);
        })
    })
    .catch(error => console.log(error));
    const button = document.createElement('button');
    button.innerHTML = 'Create Post';
    button.addEventListener('click', () => createPost());
    document.querySelector('#nav').append(button);
}

// to load all posts in the begining and after creating a post
function loadPosts() {
    create.style.display = 'none';
    post.style.display = 'none';
    posts.style.display = 'block';
    // to print all posts
    fetch('/api/posts/')
    .then(response => response.json())
    .then(data => {data.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<br><hr>${post.title}<br>
        ${post.body}<br>
        ${post.owner}<br>`;
        div.addEventListener('click', () => loadPost(post.id));
        posts.append(div);
        })
    })
    .catch(error => console.log(error));
}

// to load a single post in a new page
function loadPost(post_id) {
    posts.style.display = 'none';
    create.style.display = 'none';
    post.style.display = 'block';
    // to fetch the post
    fetch(`/api/posts/${post_id}/`)
    .then(response => response.json())
    .then(blog => {
        const div = document.createElement('div');
        div.innerHTML = `<br><hr>${blog.title}<br>
        ${blog.body}<br>
        ${blog.owner}<br><hr>
        <p>Comments:</p>`;
        post.append(div);
        blog.comments.forEach(comment_id => {
            // to fetch the comments of the post
            fetch(`/api/comments/${comment_id}/`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = `<hr>${data.body}<br>
                ${data.owner}<br>`;
                post.append(div);
            })
            .catch(error => console.log(error));
        })
        // to create a comment
        const form = document.createElement('form');
        form.innerHTML = `<br><input id="body" type="text" placeholder="Comment"><br>
        <button id="submit">Submit</button>`;
        form.addEventListener('submit', () => {createComment(post_id)});
        post.append(form); 
    })
    .catch(error => console.log(error));
}

// to create a post
function createPost() {
    posts.style.display = 'none';
    post.style.display = 'none';
    create.style.display = 'block';
    create.innerHTML = `<br><input id="title" type="text" placeholder="Title"><br>
    <input id="body" type="text" placeholder="Body"><br>
    <button id="submit">Submit</button>`;
    document.querySelector('#submit').addEventListener('click', () => {
        const title = document.querySelector('#title').value;
        const body = document.querySelector('#body').value;
        // post the blog details
        fetch('/api/posts/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json', // Crucial for JSON data
                ...fetchHeaders(csrftoken)
              },
            body: JSON.stringify({
                "title": title,
                "body": body
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            posts.innerHTML = '';
            loadPosts();
        })
        .catch(error => console.log(error));
    });	
}

// to create a comment
function createComment(post_id) {
    const body = document.querySelector('#body').value;
    // post the comment
    fetch('/api/comments/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', // Crucial for JSON data
            ...fetchHeaders(csrftoken)
          },
        body: JSON.stringify({
            "body": body,
            "post": post_id
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        post.innerHTML = '';
        loadPost(post_id);
    })
    .catch(error => console.log(error));
}
