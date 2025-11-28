// Mock Movie Data (expanded for pagination testing)
const mockMovies = [
    // Changed 'size' and 'download_link' to a 'downloads' array
    { id: 1, title: "Dhuruvangal Pathinaaru", year: 2016, genre: "Crime/Thriller", rating: 8.2, cover:"dhuruvangal-pathinaru.jpeg", synopsis: "A couple dies under mysterious circumstances and Inspector Deepak is assigned the case. However, he loses his leg in a confrontation during the investigation, which leads to the end of his career.", cast: " Rahman, Prakash Raghavan, Sharathkumar, Santhosh Krishna", 
        downloads: [
            { quality: "480p", size: "0.4 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" },
            { quality: "720p", size: "0.84 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" }, // This is the original link
            { quality: "1080p", size: "1.5 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" }
        ]
    },
    { id: 2, title: "The Silent Heist", year: 2023, genre: "Thriller", rating: 7.9, cover: "https://placehold.co/400x600/f59e0b/ffffff?text=Heist", synopsis: "A master thief attempts one last impossible job: stealing a priceless diamond from a vault protected by sound-sensitive security systems.", cast: "Ryan Gosling, Anya Taylor-Joy", 
        downloads: [
            { quality: "480p", size: "1.0 GB", link: "#" },
            { quality: "720p", size: "1.9 GB", link: "#" },
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ]
    },
    { id: 3, title: "Eternal Summer", year: 2024, genre: "Romance", rating: 9.1, cover: "https://placehold.co/400x600/ef4444/ffffff?text=Summer", synopsis: "Two childhood friends meet again years later on a remote Italian island, forcing them to confront their past feelings and a future they never planned.", cast: "Zendaya, Timothée Chalamet", 
        downloads: [
            { quality: "720p", size: "1.5 GB", link: "#" },
            { quality: "1080p", size: "2.8 GB", link: "#" }
        ]
    },
    { id: 4, title: "Dragon's Fury", year: 2022, genre: "Fantasy", rating: 7.2, cover: "https://placehold.co/400x600/10b981/ffffff?text=Dragon", synopsis: "In a world where magic is banned, a young warrior must tame the last living dragon to save his village from a tyrannical empire.", cast: "Henry Cavill, Millie Bobby Brown", 
        downloads: [
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ]
    },
    { id: 5, title: "City of Shadows", year: 2023, genre: "Action", rating: 8.8, cover: "https://placehold.co/400x600/8b5cf6/ffffff?text=Shadows", synopsis: "A disgraced former police detective uncovers a vast conspiracy involving government officials and the city's criminal underworld.", cast: "Idris Elba, Gal Gadot", 
        downloads: [
            { quality: "480p", size: "1.2 GB", link: "#" },
            { quality: "720p", size: "2.2 GB", link: "#" },
            { quality: "1080p", size: "4.0 GB", link: "#" }
        ]
    },
    { id: 6, title: "The Inventor", year: 2021, genre: "Biography", rating: 8.0, cover: "https://placehold.co/400x600/f97316/ffffff?text=Inventor", synopsis: "The inspiring true story of Nikola Tesla and his relentless pursuit of wireless energy, despite facing opposition from powerful competitors.", cast: "Benedict Cumberbatch, Tom Holland", 
        downloads: [
            { quality: "720p", size: "1.7 GB", link: "#" }
        ]
    },
    { id: 7, title: "Frozen Planet II", year: 2024, genre: "Documentary", rating: 9.5, cover: "https://placehold.co/400x600/06b6d4/ffffff?text=Planet", synopsis: "A stunning exploration of the Arctic and Antarctic, revealing the lives of animals coping with the extreme and rapidly changing climate.", cast: "David Attenborough (Narrator)", 
        downloads: [
            { quality: "1080p", size: "4.1 GB", link: "#" }
        ]
    },
    { id: 8, title: "Cyber Runner", year: 2024, genre: "Sci-Fi", rating: 8.3, cover: "https://placehold.co/400x600/6b7280/ffffff?text=Cyber", synopsis: "In a neon-drenched future, a rogue hacker finds a cryptic message that could expose the centralized AI controlling the city.", cast: "Keanu Reeves, Scarlett Johansson", 
        downloads: [
            { quality: "720p", size: "2.5 GB", link: "#" },
            { quality: "1080p", size: "4.5 GB", link: "#" }
        ]
    },
    { id: 9, title: "The Martian Chronicles", year: 2020, genre: "Sci-Fi", rating: 7.5, cover: "https://placehold.co/400x600/374151/ffffff?text=Martian", synopsis: "Exploration team struggles to colonize Mars after a catastrophic equipment failure.", cast: "Matt Damon, Jessica Chastain", 
        downloads: [
            { quality: "480p", size: "1.1 GB", link: "#" },
            { quality: "720p", size: "2.1 GB", link: "#" }
        ]
    },
    { id: 10, title: "Last Stand at Midnight", year: 2023, genre: "Action", rating: 8.9, cover: "https://placehold.co/400x600/4f46e5/ffffff?text=Stand", synopsis: "A rogue agent must protect a witness from an international assassination squad on New Year's Eve.", cast: "Tom Cruise, Emily Blunt", 
        downloads: [
            { quality: "720p", size: "3.0 GB", link: "#" },
            { quality: "1080p", size: "5.5 GB", link: "#" }
        ]
    },
    { id: 11, title: "Whispers of the Past", year: 2022, genre: "Thriller", rating: 6.8, cover: "https://placehold.co/400x600/dc2626/ffffff?text=Whispers", synopsis: "A cold case detective finds a connection between a decades-old murder and a recent disappearance in his small hometown.", cast: "Chris Evans, Ana de Armas", 
        downloads: [
            { quality: "480p", size: "0.7 GB", link: "#" },
            { quality: "720p", size: "1.4 GB", link: "#" }
        ]
    },
    { id: 12, title: "A Taste of Freedom", year: 2024, genre: "Documentary", rating: 9.3, cover: "https://placehold.co/400x600/10b981/ffffff?text=Freedom", synopsis: "Following the lives of three individuals released from incarceration and their journey to rebuild their lives.", cast: "N/A", 
        downloads: [
            { quality: "1080p", size: "3.2 GB", link: "#" }
        ]
    },
    { id: 13, title: "The Secret Garden", year: 2021, genre: "Romance", rating: 6.5, cover: "https://placehold.co/400x600/ec4899/ffffff?text=Garden", synopsis: "An adaptation of the classic novel about a young girl who discovers a hidden garden on her uncle's estate.", cast: "Colin Firth, Julie Walters", 
        downloads: [
            { quality: "480p", size: "1.2 GB", link: "#" }
        ]
    },
    { id: 14, title: "Future Shock", year: 2025, genre: "Sci-Fi", rating: 9.0, cover: "https://placehold.co/400x600/000000/ffffff?text=Shock", synopsis: "A gripping tale of a society where dreams are commodified and sold on the black market.", cast: "Leonardo DiCaprio, Margot Robbie", 
        downloads: [
            { quality: "720p", size: "3.8 GB", link: "#" },
            { quality: "1080p", size: "6.5 GB", link: "#" }
        ]
    },
    { id: 15, title: "Jungle Hunt", year: 2023, genre: "Action", rating: 7.8, cover: "https://placehold.co/400x600/4c0519/ffffff?text=Hunt", synopsis: "A survival expert guides a group of researchers through the Amazon, encountering danger at every turn.", cast: "Dwayne Johnson, Jason Statham", 
        downloads: [
            { quality: "480p", size: "1.4 GB", link: "#" },
            { quality: "720p", size: "2.4 GB", link: "#" }
        ]
    },
];

const movieGrid = document.getElementById('movieGrid');
const notificationBox = document.getElementById('notificationBox');
const notificationText = document.getElementById('notificationText');
const genreFilter = document.getElementById('genreFilter');
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const loadingIndicator = document.getElementById('loadingIndicator');
const ratingFilter = document.getElementById('ratingFilter');
const currentRatingDisplay = document.getElementById('currentRatingDisplay');

// Global state for view type and pagination
let currentView = 'grid'; // 'grid' or 'list'
let moviesPerPage = 8; // Number of movies to show initially or per load
let currentPage = 1; // Current page number
let totalFilteredMovies = 0; // To track if more movies exist

/**
 * Converts a numeric rating (out of 10) into visual star HTML (out of 5).
 * @param {number} rating - The movie rating (e.g., 8.5)
 * @returns {string} HTML string with visual stars.
 */
function getVisualStarRatingHtml(rating) {
    const scaledRating = rating / 2;
    const fullStars = Math.floor(scaledRating);
    const remainder = scaledRating - fullStars;
    // Determine if a half star should be shown
    const halfStar = remainder >= 0.25 && remainder < 0.75;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let html = '<div class="flex items-center text-sm">';
    
    // Full stars (using solid star unicode)
    for (let i = 0; i < fullStars; i++) {
        html += '<span class="text-yellow-500 mr-0.5">★</span>';
    }
    // Half star (using half-star unicode)
    if (halfStar) {
        html += '<span class="text-yellow-500 mr-0.5">½</span>'; 
    }
    // Empty stars (using gray solid star unicode)
    for (let i = 0; i < emptyStars; i++) {
        html += '<span class="text-gray-700 mr-0.5">★</span>';
    }
    html += '</div>';
    return html;
}


/**
 * Populates the genre filter dropdown with unique genres from the mock data.
 */
function populateGenreFilter() {
    const genres = [...new Set(mockMovies.map(movie => movie.genre))];
    genres.sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

/**
 * Sorts the movie array based on the selected sort filter.
 * @param {Array} movies - The array of movie objects to sort.
 */
function sortMovies(movies) {
    const sortValue = document.getElementById('sortFilter').value;
    
    if (sortValue === 'default') {
        return movies.sort((a, b) => a.id - b.id);
    }
    
    const [field, order] = sortValue.split('_');

    return movies.sort((a, b) => {
        let valA = a[field];
        let valB = b[field];

        // Numeric conversion for proper sorting
        if (field === 'rating' || field === 'year') {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        } else if (field === 'size') {
            // NOTE: The 'size' field is no longer directly on the movie object.
            // We'll use the size of the highest quality download as a proxy for sorting.
            // If we can't find a download, default to a high value so it sorts last.
            const getSizeValue = (movie) => {
                const highestQuality = movie.downloads.reduce((prev, current) => {
                    const q_order = { '480p': 1, '720p': 2, '1080p': 3 };
                    return q_order[prev.quality] > q_order[current.quality] ? prev : current;
                }, { quality: '480p', size: '0 GB' });

                if (highestQuality) {
                    return parseFloat(highestQuality.size.replace(' GB', '').replace(' MB', '')); // Simplified size comparison
                }
                return order === 'asc' ? 9999 : 0; // Sort undefined last/first based on order
            };
            valA = getSizeValue(a);
            valB = getSizeValue(b);
        }

        if (valA < valB) return order === 'asc' ? -1 : 1;
        if (valA > valB) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

/**
 * Renders the movie cards into the grid container, adjusting for the current view state.
 * @param {Array} moviesToRender - The array of movie objects to display.
 */
function renderMovies(moviesToRender) {
    movieGrid.innerHTML = ''; // Clear previous content

    if (moviesToRender.length === 0) {
        movieGrid.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-xl text-gray-400">No movies found matching your criteria. Try adjusting the search or filter.</p>
            </div>
        `;
        return;
    }
    
    // Helper to get the highest quality info for display purposes
    const getDisplayInfo = (movie) => {
        const sortedDownloads = movie.downloads.sort((a, b) => {
            const q_order = { '480p': 1, '720p': 2, '1080p': 3 };
            return q_order[b.quality] - q_order[a.quality];
        });
        const highestQuality = sortedDownloads[0];
        
        return {
            quality: highestQuality ? highestQuality.quality : 'N/A',
            size: highestQuality ? highestQuality.size : 'N/A'
        };
    }

    moviesToRender.forEach(movie => {
        const displayInfo = getDisplayInfo(movie); // Get highest quality info
        const card = document.createElement('div');
        card.setAttribute('data-movie-id', movie.id);
        let cardHTML = '';

        if (currentView === 'grid') {
            // Grid View Layout
            card.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-col';
            cardHTML = `
                <div class="relative w-full aspect-[2/3] overflow-hidden">
                    <img src="${movie.cover}" alt="${movie.title} Cover" 
                         class="w-full h-full object-cover" 
                         onerror="this.onerror=null;this.src='https://placehold.co/400x600/1a1a1a/cccccc?text=Cover+Unavailable';"
                    >
                    <div class="absolute top-2 left-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center space-x-1">
                        <span>⭐ ${movie.rating}</span>
                    </div>
                </div>

                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-lg font-semibold text-blue-300 truncate mb-1" title="${movie.title}">${movie.title}</h3>
                    <p class="text-sm text-gray-400 mb-2">${movie.year} | ${movie.genre}</p>
                    
                    ${getVisualStarRatingHtml(movie.rating)}
                    
                    <div class="mt-auto pt-2 border-t border-gray-700 flex flex-col space-y-2 mt-4">
                        <p class="text-xs text-gray-500">Max Quality: <span class="text-white font-medium">${displayInfo.quality}</span></p>
                        <p class="text-xs text-gray-500">Max Size: <span class="text-white font-medium">${displayInfo.size}</span></p>
                    </div>
                </div>
            `;
        } else {
            // List View Layout (Horizontal)
            card.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-row items-center p-4 space-x-4';
            cardHTML = `
                <div class="w-16 h-24 flex-shrink-0 relative hidden sm:block">
                    <img src="${movie.cover}" alt="${movie.title} Cover" 
                         class="w-full h-full object-cover rounded-md" 
                         onerror="this.onerror=null;this.src='https://placehold.co/100x150/1a1a1a/cccccc?text=Cover';"
                    >
                </div>
                
                <div class="flex-grow">
                    <h3 class="text-xl font-semibold text-blue-300 truncate mb-1" title="${movie.title}">${movie.title}</h3>
                    <p class="text-sm text-gray-400">${movie.year} | ${movie.genre}</p>
                    <div class="flex items-center space-x-2 mt-1">
                        ${getVisualStarRatingHtml(movie.rating)}
                        <span class="text-xs text-gray-500">(${movie.rating}/10)</span>
                    </div>
                </div>
                
                <div class="flex-shrink-0 text-right space-y-1 hidden sm:block">
                    <p class="text-xs text-gray-500">Max Quality: <span class="text-white font-medium">${displayInfo.quality}</span></p>
                    <p class="text-xs text-gray-500">Max Size: <span class="text-white font-medium">${displayInfo.size}</span></p>
                </div>
                
                <div class="flex-shrink-0 ml-4">
                    <button onclick="showMovieDetails(${movie.id}); event.stopPropagation();"
                            class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300">
                        Download
                    </button>
                </div>
            `;
        }
        
        card.innerHTML = cardHTML;
        
        // Attach event listener to open the modal when the card is clicked (both views)
        card.addEventListener('click', () => showMovieDetails(movie.id));
        
        movieGrid.appendChild(card);
    });
}

/**
 * Switches the layout between grid and list view.
 */
function toggleView() {
    currentView = currentView === 'grid' ? 'list' : 'grid';
    const toggleButton = document.getElementById('viewToggleText');
    
    // Apply appropriate classes to the grid container
    if (currentView === 'list') {
        toggleButton.textContent = 'Switch to Grid View';
        movieGrid.classList.remove('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
        movieGrid.classList.add('flex', 'flex-col', 'gap-4');
    } else {
        toggleButton.textContent = 'Switch to List View';
        movieGrid.classList.add('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
        movieGrid.classList.remove('flex', 'flex-col', 'gap-4');
    }

    // Re-render all movies to apply new card HTML structure (maintaining current page)
    applyFilters(false); 
}

/**
 * Increases the current page count and re-renders the movies.
 */
function loadMore() {
    currentPage++;
    // Re-apply filters and rendering, which will use the new currentPage
    applyFilters(false);
}

/**
 * Applies text search, genre filtering, and sorting.
 * @param {boolean} resetPage - If true, resets pagination (used when filters/search change).
 */
function applyFilters(resetPage = false) {
    if (resetPage) {
        currentPage = 1;
    }
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreFilter').value;
    const minRating = parseFloat(ratingFilter.value); // NEW: Get minimum rating
    
    let filtered = mockMovies.filter(movie => {
        // Text search filter (includes title, genre, and cast)
        const textMatch = movie.title.toLowerCase().includes(searchTerm) || 
                          movie.genre.toLowerCase().includes(searchTerm) ||
                          movie.cast.toLowerCase().includes(searchTerm);
        
        // Genre selection filter
        const genreMatch = !selectedGenre || movie.genre === selectedGenre;

        // NEW: Rating filter
        const ratingMatch = movie.rating >= minRating;

        return textMatch && genreMatch && ratingMatch;
    });

    // Apply sorting after filtering
    filtered = sortMovies(filtered);

    // NEW: Pagination Logic
    totalFilteredMovies = filtered.length;
    const endIndex = currentPage * moviesPerPage;
    const moviesToRender = filtered.slice(0, endIndex);

    renderMovies(moviesToRender);

    // Show/Hide Load More Button
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (moviesToRender.length < totalFilteredMovies) {
        loadMoreContainer.classList.remove('hidden');
    } else {
        loadMoreContainer.classList.add('hidden');
    }
}

/**
 * Displays the detail modal for a specific movie.
 * @param {number} movieId - The ID of the movie to display.
 */
function showMovieDetails(movieId) {
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) return;

    // Generate download button HTML for all available qualities
    const downloadButtonsHTML = movie.downloads.map(download => `
        <button onclick="handleDownloadModal(${movie.id}, '${download.quality}', '${download.size}', '${download.link}')"
                class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 flex justify-between items-center text-left mb-2">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download ${download.quality}
            </span>
            <span class="text-sm text-gray-200 font-normal ml-4">${download.size}</span>
        </button>
    `).join('');

    // Determine max quality and size for display
    const sortedDownloads = movie.downloads.sort((a, b) => {
        const q_order = { '480p': 1, '720p': 2, '1080p': 3 };
        return q_order[b.quality] - q_order[a.quality];
    });
    const maxQuality = sortedDownloads[0];

    modalBody.innerHTML = `
        <div class="md:w-1/3 flex-shrink-0">
            <img src="${movie.cover}" alt="${movie.title} Cover" 
                 class="w-full h-auto rounded-lg shadow-xl" 
                 onerror="this.onerror=null;this.src='https://placehold.co/400x600/1a1a1a/cccccc?text=Cover+Unavailable';"
            >
        </div>
        
        <div class="md:w-2/3">
            <h2 class="text-3xl font-bold text-blue-400 mb-2">${movie.title}</h2>
            <p class="text-xl text-gray-300 mb-4">${movie.year} | ${movie.genre}</p>

            <div class="flex flex-col space-y-2 mb-6">
                <div class="flex items-center space-x-2">
                    ${getVisualStarRatingHtml(movie.rating)}
                    <span class="text-xl font-bold text-yellow-400">${movie.rating}</span>
                    <span class="text-lg text-gray-400">/ 10</span>
                </div>
                <span class="text-lg text-gray-400">Max Quality: ${maxQuality.quality} (${maxQuality.size})</span>
            </div>

            <h3 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Synopsis</h3>
            <p class="text-gray-400 mb-6">${movie.synopsis}</p>

            <h3 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-2">Starring</h3>
            <p class="text-gray-400 mb-8">${movie.cast}</p>
            
            <h3 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4 text-green-400">Download Options</h3>
            <div class="space-y-3">
                ${downloadButtonsHTML}
            </div>
        </div>
    `;

    movieModal.classList.remove('hidden');
    document.getElementById('modalContent').classList.remove('scale-95', 'opacity-0');
    document.getElementById('modalContent').classList.add('scale-100', 'opacity-100');
}

/**
 * Closes the movie detail modal.
 */
function closeModal() {
    document.getElementById('modalContent').classList.remove('scale-100', 'opacity-100');
    document.getElementById('modalContent').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        movieModal.classList.add('hidden');
    }, 300); // Wait for the transition
}

/**
 * Simulates a download action from the modal, shows a notification, 
 * and ACTUALLY initiates the download using a robust anchor tag method
 * for better mobile compatibility.
 * @param {number} movieId - The ID of the movie.
 * @param {string} quality - The selected download quality (e.g., '720p').
 * @param {string} size - The file size for the selected quality.
 * @param {string} downloadLink - The actual download URL.
 */
function handleDownloadModal(movieId, quality, size, downloadLink) {
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) return;

    // 1. Close the modal first
    closeModal();

    // 2. Show notification (Start message)
    notificationText.textContent = `Starting download for "${movie.title}" (${quality}, ${size})...`;
    notificationBox.style.display = 'block';
    notificationBox.classList.remove('bg-green-600');
    notificationBox.classList.add('bg-blue-600');
    
    // Trigger the slide-in animation
    setTimeout(() => {
        notificationBox.style.transform = 'translateX(0)';
    }, 10);

    // 3. ROBUST DOWNLOAD INITIATION (Using A Tag for better mobile compatibility)
    if (downloadLink && downloadLink !== '#') {
        const a = document.createElement('a');
        a.href = downloadLink;
        // 👇 MODIFIED LINE: Add a file extension and clean the title to strengthen the download suggestion.
        const cleanTitle = movie.title.replace(/[^a-z0-9]/gi, '_');
        a.download = `${cleanTitle}_${quality}.mp4`; 
        
        a.style.display = 'none'; // Keep it hidden
        document.body.appendChild(a);
        a.click(); // Programmatically click the hidden link
        document.body.removeChild(a); // Clean up the element

        console.log(`Download initiated via anchor tag for: ${downloadLink}`);
    } else {
        // Fallback for mock data (when download_link is '#')
        console.warn(`Download link for "${movie.title}" at ${quality} is a placeholder ('#'). No file initiated.`);
    }

    // 4. Simulate download process delay and update notification
    setTimeout(() => {
        // Changed message to reflect that the download is initiated/finished by the browser
        notificationText.textContent = `Download for "${movie.title}" (${quality}) initiated! Check your browser's download queue.`;
        notificationBox.classList.remove('bg-blue-600');
        notificationBox.classList.add('bg-green-600');
        
        // 5. Hide after a short delay
        setTimeout(() => {
            notificationBox.style.transform = 'translateX(150%)';
            setTimeout(() => {
                notificationBox.style.display = 'none';
            }, 500); // Wait for transition to finish before hiding
        }, 3000);
    }, 2000);
}

// Initialize the website
window.onload = () => {
    
    // Set initial value for the display
    currentRatingDisplay.textContent = ratingFilter.value;

    // Show loading indicator
    loadingIndicator.classList.remove('hidden');
    movieGrid.style.display = 'none';

    // Simulate network delay before rendering
    setTimeout(() => {
        loadingIndicator.classList.add('hidden');
        movieGrid.style.display = 'grid'; 
        
        populateGenreFilter();
        // Ensure initial grid view classes are applied
        movieGrid.classList.add('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
        
        applyFilters(); // Renders, sorts, and filters default view (page 1)
    }, 1500); // 1.5 second loading time simulation
};