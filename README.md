

# Blogging Website

## Description
A full stack blogging website that allows users to create, read, update, and delete blog posts. This project is built using HTML, CSS, JavaScript, EJS, Node.js, Express, MongoDB, and Bootstrap.

## Features
- Create, Read, Update, Delete (CRUD) operations for blog posts
- Responsive design using Bootstrap
- 
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blogging-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blogging-website
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start MongoDB server (if not already running):
    ```bash
    mongod
    ```

5. Run the application:
    ```bash
    node app.js
    ```

6. Open your browser and go to `http://localhost:8080`

## Usage

### Home Page
Displays a list of all blog posts.

### Creating a New Post
Navigate to `/posts/new` to create a new blog post.

### Editing a Post
Navigate to `/posts/:id/edit` to edit an existing blog post.

### Deleting a Post
Click the delete button on a post to remove it.

## Project Structure
```
blogging-website/
│
├── models/
│   └── postSchema.js
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

## Dependencies
- express
- mongoose
- ejs
- method-override
- bootstrap

## License
This project is licensed under the MIT License.

