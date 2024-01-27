# Blogging Website

This is a blogging website developed as part of the CS50W final project.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## YouTube Demo

Check out the YouTube demo of the blogging website: [https://youtu.be/KC9Lw2fHeTk](https://youtu.be/KC9Lw2fHeTk)

## Description

The blogging website is a platform where users can create and publish their own blog posts. It provides a user-friendly interface for writing, editing, and managing blog content. Users can also interact with other bloggers by commenting on posts and engaging in discussions.

## Features

- User authentication: Users can create an account, log in, and manage their profile.
- Blog post creation: Users can write and publish their own blog posts.
- Commenting system: Users can leave comments on blog posts and engage in discussions.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/neevan0842/Blog-Site.git
    ```

2. Install the required dependencies:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. Set up the database:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. Start the development server:

    ```bash
    python manage.py runserver
    ```

5. Access the website at `http://localhost:8000` in your web browser.

## Usage

1. Create an account or log in if you already have one.
2. Explore the existing blog posts or create your own.
3. Leave comments on blog posts to engage with other users.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
