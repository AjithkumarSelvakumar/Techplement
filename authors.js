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
