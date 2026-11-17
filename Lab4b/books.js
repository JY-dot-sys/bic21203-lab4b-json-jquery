async function loadBooks() {
  const status = document.getElementById("status");
  try {
    const response = await fetch("books.json");
    if (!response.ok) throw new Error("Could not load books.json");
    const data = await response.json();
    if (!data || !Array.isArray(data.books) || data.books.length < 2 ||
        !data.books.every(book => typeof book.title === "string" &&
          typeof book.author === "string" && Array.isArray(book.genres))) {
      throw new Error("Invalid book data");
    }
    document.getElementById("firstTitle").textContent = data.books[0].title;
    document.getElementById("secondAuthor").textContent = data.books[1].author;
    const genresList = document.getElementById("genresList");
    genresList.replaceChildren();
    for (const book of data.books) {
      const item = document.createElement("li");
      item.textContent = book.title + " — " + book.genres.join(", ");
      genresList.appendChild(item);
    }
    status.textContent = "Books loaded successfully!";
  } catch (error) {
    status.textContent = "Unable to display books. Please check the JSON file and run this page using Live Server.";
    console.error(error);
  }
}
loadBooks();
