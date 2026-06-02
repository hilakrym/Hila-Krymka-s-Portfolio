document.addEventListener('DOMContentLoaded', () => {
    // מניעת קפיצה למעלה בעת לחיצה על קישורים זמניים (עם # בלבד)
    const placeholderLinks = document.querySelectorAll('a[href="#"]');
    
    placeholderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('הקישור יעודכן בקרוב!');
        });
    });
});