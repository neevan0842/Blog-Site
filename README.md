# Blogging Website

This is a blogging website developed as the final project for CS50W using Django REST API on the backend and asynchronous JavaScript (fetch) on the frontend.

## Table of Contents

- [Distinctiveness and Complexity](#distinctiveness-and-complexity)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Known Issues and Future Improvements](#known-issues-and-future-improvements)
- [YouTube Demo](#youtube-demo)
- [License](#license)

## Distinctiveness and Complexity

This blogging website stands out from other projects in CS50W as it offers a platform for users to create, publish, and manage their blog posts. Unlike projects focused on web parsing, this project is built with Django REST API and features asynchronous JavaScript for seamless user interactions. The project's complexity lies in its implementation of user authentication, blog post creation, commenting system, and single-page web application design. It incorporates Django models, serializers, authentication, and permission classes, demonstrating a medium level of complexity.

## Features

- **User Authentication**: Users can register, log in, and manage their profiles securely.
- **Blog Post Management**: Users can create, edit, publish, and delete blog posts.
- **Commenting System**: Users can leave comments on blog posts and engage in discussions.
- **Admin Interface**: Administrators have access to manage blog posts and user accounts.
- **Category Filtering**: Blog posts can be filtered based on categories for easy navigation.

## Folder Structure

- `backend`: Contains the Django project settings and configuration files.
  - `api`: Houses the API routes, models, and serializers.
  - `backend`: Includes security and settings files.
  - `blogsite`: Manages the frontend of the application, including templates, styles, and HTML files.

## Technologies Used

- **Backend**: Django, Django REST API
- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Database**: SQLite (default Django database)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/neevan0842/Blog-Site.git
    ```

2. Navigate to the backend directory and install dependencies:

    ```bash
    cd Blog-Site/backend
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
2. Explore existing blog posts or create your own.
3. Engage with other users by leaving comments on blog posts.

## Contributing

Contributions are welcome! If you have frontend skills and would like to enhance the user interface, feel free to make use of the REST API provided. Submit pull requests for improvements or open issues for discussions.

## Known Issues and Future Improvements

There is room for many improvements in the project's design and functionality. Future enhancements will be made as skills develop.

## YouTube Demo

Check out the YouTube demo of the blogging website: [https://youtu.be/KC9Lw2fHeTk](https://youtu.be/KC9Lw2fHeTk)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
