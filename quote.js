// Sample quotes data
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    // Add more quotes as needed
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Function to display a new quote
  function displayNewQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote-text').textContent = quote.text;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const authors = [
        { name: "Albert Einstein", quotes: ["Life is like riding a bicycle. To keep your balance you must keep moving."] },
        { name: "Aristotle", quotes: ["Knowing yourself is the beginning of all wisdom."] },
        { name: "Confucius", quotes: ["It does not matter how slowly you go as long as you do not stop."] },
        { name: "Mahatma Gandhi", quotes: ["Be the change that you wish to see in the world."] },
        { name: "Oscar Wilde", quotes: ["Be yourself; everyone else is already taken."] },
        // Add more authors and quotes as needed
    ];

    const authorList = document.getElementById('author-list');
    const authorDetailsSection = document.getElementById('author-details-section');
    const quoteOfTheDaySection = document.getElementById('quote-of-the-day');
    const commentBox = document.getElementById('comment-box');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentList = document.getElementById('comment-list');

    authors.sort((a, b) => a.name.localeCompare(b.name));
    
    authors.forEach(author => {
        const authorLink = document.createElement('a');
        authorLink.href = '#';
        authorLink.textContent = author.name;
        authorLink.addEventListener('click', () => showAuthorDetails(author));
        authorList.appendChild(authorLink);
    });

    function showAuthorDetails(author) {
        authorDetailsSection.innerHTML = `
            <h3>${author.name}</h3>
            <p>${author.quotes.join('<br>')}</p>
        `;
    }

    function getRandomQuote() {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const randomQuote = randomAuthor.quotes[Math.floor(Math.random() * randomAuthor.quotes.length)];
        return `"${randomQuote}" - ${randomAuthor.name}`;
    }

    quoteOfTheDaySection.textContent = getRandomQuote();

    submitCommentButton.addEventListener('click', () => {
        const commentText = commentBox.value.trim();
        if (commentText) {
            const commentItem = document.createElement('p');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentBox.value = '';
        }
    });
});

  // Function to add a new comment
  function addComment(comment) {
    const commentList = document.getElementById('comment-section');
    const commentElement = document.createElement('div');
    commentElement.classList.add('alert', 'alert-secondary', 'mt-2');
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
  }
  
  // Event listener for new quote button
  document.getElementById('new-quote-btn').addEventListener('click', displayNewQuote);
  
  // Event listener for comment form submission
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    addComment(comment);
    // Here you would typically send the comment to a backend server to store in a database
    // For simplicity, we just add it to the UI in this example
    document.getElementById('comment').value = ''; // Clear the textarea
  });
  