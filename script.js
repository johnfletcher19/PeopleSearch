let role = 'contractor';
const mockDB = {
    contractors: [],
    customers: [],
    landlords: [],
    tenants: []
};

function setRole(selectedRole) {
    role = selectedRole;
    document.getElementById('reviewee').placeholder = `Reviewing (${role === 'contractor' ? 'Customer' : 'Contractor'})`;
}

function handleSubmit() {
    const name = document.getElementById('name').value;
    const reviewee = document.getElementById('reviewee').value;
    const rating = document.getElementById('rating').value;
    const note = document.getElementById('note').value;
    const review = { reviewer: name, reviewee, rating, note };
    mockDB[role + 's'].push(review);
    alert("Review submitted!");
    document.getElementById('name').value = '';
    document.getElementById('reviewee').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('note').value = '';
}

function handleSearch() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const results = mockDB[role + 's'].filter(r => r.reviewee.toLowerCase() === searchName);
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';
    results.forEach(r => {
        const div = document.createElement('div');
        div.className = 'review';
        div.innerHTML = `<p><strong>Reviewer:</strong> ${r.reviewer}</p><p><strong>Rating:</strong> ${r.rating}</p><p><strong>Note:</strong> ${r.note}</p>`;
        reviewsDiv.appendChild(div);
    });
}
