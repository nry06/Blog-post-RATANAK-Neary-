window.onload = () => {
    const addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addPost)

    // initial data
    createPost("My favourite Malatang spot in Phnom Penh", "Recently, I have been to Nheza Malatang in Santhormuk area. There was a variety of meat and veggie options, plus they have the potato noodles I have been looking for everywhere. The price is also affordable, you should give it a try!!")
    createPost("Why Interstellar Stays With Me", "Interstellar is more than a space movie. Christopher Nolan mixes real science ideas, like black holes and time moving slower near strong gravity, with a story about a father trying to get back to his daughter. The visuals are stunning and Hans Zimmer's music makes every scene feel huge, but what I remember most is the emotion. It shows that even in the vastness of space, the people we love are what drive us.")
    createPost("About You or Somebody Else", "The 1975 made me feel the heartbreak of a relationship I've never had. It's wild how music can let us feel something without actually living it.")
}

let id = 1

const createPost = (title, content) => {
    const blogPost = document.getElementById("blog-posts-container")

    const post = document.createElement("div")
    const postId = id++
    post.setAttribute("id", `post-${postId}`)

    const blogTitle = document.createElement("h3")
    blogTitle.textContent = title
    const blogContent = document.createElement("p")
    blogContent.textContent = content

    // create edit button for title
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement)
    })

    // create edit button for content
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        editContent(e.target.parentElement)
    })

    // create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    // append the elements
    post.appendChild(blogTitle)
    post.appendChild(editTitleBtn)
    post.appendChild(blogContent)
    post.appendChild(editContentBtn)
    post.appendChild(deleteBtn)
    blogPost.appendChild(post)
}

const addPost = () => {
    const title = prompt("Enter the title:")
    if (title === null || title.trim() === "") {
        return
    }

    const content = prompt("Enter the content:")
    if (content === null || content.trim() === "") {
        return
    }

    createPost(title, content)
}

const deletePost = (target) => {
    const postName = target.firstChild.textContent
    const toDelete = confirm("Are you sure you want to delete this post?")

    if (toDelete) {
        target.remove()
        alert(`Post "${postName}" deleted successfully`)
    }
}

const editTitle = (target) => {
    const titleName = target.querySelector("h3")
    const toEdit = confirm("Are you sure you want to edit the title?")

    if (toEdit) {
        const newTitle = prompt("Enter your new title:", titleName.textContent)
        if (newTitle !== null && newTitle.trim() !== "") {
            titleName.textContent = newTitle
            alert("The title has been edited successfully!")
        }
    }
}

const editContent = (target) => {
    const contentName = target.querySelector("p")
    const toEditContent = confirm("Are you sure you want to edit the content?")

    if (toEditContent) {
        const newContent = prompt("Enter your new content:", contentName.textContent)
        if (newContent !== null && newContent.trim() !== "") {
            contentName.textContent = newContent
            alert("The content has been edited successfully!")
        }
    }
}