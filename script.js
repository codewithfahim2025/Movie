// Mock Movie Data (expanded for pagination testing)
const mockMovies = [
    // Changed 'size' and 'download_link' to a 'downloads' array
    { id: 1, title: "Dhuruvangal Pathinaaru", year: 2016, genre: "Crime/Thriller", rating: 8.2, cover:"dhuruvangal-pathinaru.jpeg", release_date: "2016-12-29", synopsis: "A couple dies under mysterious circumstances and Inspector Deepak is assigned the case. However, he loses his leg in a confrontation during the investigation, which leads to the end of his career.", cast: " Rahman, Prakash Raghavan, Sharathkumar, Santhosh Krishna", 
        downloads: [
            { quality: "480p", size: "0.4 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" },
            { quality: "720p", size: "0.84 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" }, // This is the original link
            { quality: "1080p", size: "1.5 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" }
        ],
        industry: "Tamil" // ADDED INDUSTRY FIELD
    },
    { id: 2, title: "Hit", year: 2020, genre: "Crime/Thriller", rating: 7.6, cover: "hit.jpeg", release_date: "2020-02-28", synopsis: "A police officer in the homicide intervention team must overcome his struggles with his tragic past in order to investigate a case involving a missing woman.", cast: "Vishwak Sen,Adivi Sesh,Meenakshi Chaudhary.", 
        downloads: [
            { quality: "480p", size: "1.0 GB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" },
            { quality: "720p", size: "1.36 GB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" },
            { quality: "1080p", size: "3.5 GB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" }
        ],
        industry: "Telugu" // ADDED INDUSTRY FIELD
    },
    { id: 3, title: "Eternal Summer", year: 2024, genre: "Romance", rating: 9.1, cover: "https://placehold.co/400x600/ef4444/ffffff?text=Summer", release_date: "2024-11-28", synopsis: "Two childhood friends meet again years later on a remote Italian island, forcing them to confront their past feelings and a future they never planned.", cast: "Zendaya, Timothée Chalamet", 
        downloads: [
            { quality: "720p", size: "1.5 GB", link: "#" },
            { quality: "1080p", size: "2.8 GB", link: "#" }
        ],
        industry: "International" // ADDED INDUSTRY FIELD
    },
    { id: 4, title: "Dragon's Fury", year: 2022, genre: "Fantasy", rating: 7.2, cover: "https://placehold.co/400x600/10b981/ffffff?text=Dragon", release_date: "2022-04-01", synopsis: "In a world where magic is banned, a young warrior must tame the last living dragon to save his village from a tyrannical empire.", cast: "Henry Cavill, Millie Bobby Brown", 
        downloads: [
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 5, title: "City of Shadows", year: 2023, genre: "Action", rating: 8.8, cover: "https://placehold.co/400x600/8b5cf6/ffffff?text=Shadows", release_date: "2023-10-20", synopsis: "A disgraced former police detective uncovers a vast conspiracy involving government officials and the city's criminal underworld.", cast: "Idris Elba, Gal Gadot", 
        downloads: [
            { quality: "480p", size: "1.2 GB", link: "#" },
            { quality: "720p", size: "2.2 GB", link: "#" },
            { quality: "1080p", size: "4.0 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 6, title: "The Inventor", year: 2021, genre: "Biography", rating: 8.0, cover: "https://placehold.co/400x600/f97316/ffffff?text=Inventor", release_date: "2021-03-05", synopsis: "The inspiring true story of Nikola Tesla and his relentless pursuit of wireless energy, despite facing opposition from powerful competitors.", cast: "Benedict Cumberbatch, Tom Holland", 
        downloads: [
            { quality: "720p", size: "1.7 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 7, title: "Frozen Planet II", year: 2024, genre: "Documentary", rating: 9.5, cover: "https://placehold.co/400x600/06b6d4/ffffff?text=Planet", release_date: "2024-09-01", synopsis: "A stunning exploration of the Arctic and Antarctic, revealing the lives of animals coping with the extreme and rapidly changing climate.", cast: "David Attenborough (Narrator)", 
        downloads: [
            { quality: "1080p", size: "4.1 GB", link: "#" }
        ],
        industry: "International" // ADDED INDUSTRY FIELD
    },
    { id: 8, title: "Cyber Runner", year: 2024, genre: "Sci-Fi", rating: 8.3, cover: "https://placehold.co/400x600/6b7280/ffffff?text=Cyber", release_date: "2024-01-10", synopsis: "In a neon-drenched future, a rogue hacker finds a cryptic message that could expose the centralized AI controlling the city.", cast: "Keanu Reeves, Scarlett Johansson", 
        downloads: [
            { quality: "720p", size: "2.5 GB", link: "#" },
            { quality: "1080p", size: "4.5 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 9, title: "The Martian Chronicles", year: 2020, genre: "Sci-Fi", rating: 7.5, cover: "https://placehold.co/400x600/374151/ffffff?text=Martian", release_date: "2020-07-25", synopsis: "Exploration team struggles to colonize Mars after a catastrophic equipment failure.", cast: "Matt Damon, Jessica Chastain", 
        downloads: [
            { quality: "480p", size: "1.1 GB", link: "#" },
            { quality: "720p", size: "2.1 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 10, title: "Last Stand at Midnight", year: 2023, genre: "Action", rating: 8.9, cover: "https://placehold.co/400x600/4f46e5/ffffff?text=Stand", release_date: "2023-12-31", synopsis: "A rogue agent must protect a witness from an international assassination squad on New Year's Eve.", cast: "Tom Cruise, Emily Blunt", 
        downloads: [
            { quality: "720p", size: "3.0 GB", link: "#" },
            { quality: "1080p", size: "5.5 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 11, title: "Whispers of the Past", year: 2022, genre: "Thriller", rating: 6.8, cover: "https://placehold.co/400x600/dc2626/ffffff?text=Whispers", release_date: "2022-11-17", synopsis: "A cold case detective finds a connection between a decades-old murder and a recent disappearance in his small hometown.", cast: "Chris Evans, Ana de Armas", 
        downloads: [
            { quality: "480p", size: "0.7 GB", link: "#" },
            { quality: "720p", size: "1.4 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 12, title: "A Taste of Freedom", year: 2024, genre: "Documentary", rating: 9.3, cover: "https://placehold.co/400x600/10b981/ffffff?text=Freedom", release_date: "2024-07-04", synopsis: "Following the lives of three individuals released from incarceration and their journey to rebuild their lives.", cast: "N/A", 
        downloads: [
            { quality: "1080p", size: "3.2 GB", link: "#" }
        ],
        industry: "International" // ADDED INDUSTRY FIELD
    },
    { id: 13, title: "The Secret Garden", year: 2021, genre: "Romance", rating: 6.5, cover: "https://placehold.co/400x600/ec4899/ffffff?text=Garden", release_date: "2021-09-01", synopsis: "An adaptation of the classic novel about a young girl who discovers a hidden garden on her uncle's estate.", cast: "Colin Firth, Julie Walters", 
        downloads: [
            { quality: "480p", size: "1.2 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 14, title: "Future Shock", year: 2025, genre: "Sci-Fi", rating: 9.0, cover: "https://placehold.co/400x600/000000/ffffff?text=Shock", release_date: "2025-01-01", synopsis: "A gripping tale of a society where dreams are commodified and sold on the black market.", cast: "Leonardo DiCaprio, Margot Robbie", 
        downloads: [
            { quality: "720p", size: "3.8 GB", link: "#" },
            { quality: "1080p", size: "6.5 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
    { id: 15, title: "Jungle Hunt", year: 2023, genre: "Action", rating: 7.8, cover: "https://placehold.co/400x600/4c0519/ffffff?text=Hunt", release_date: "2023-05-15", synopsis: "A survival expert guides a group of researchers through the Amazon, encountering danger at every turn.", cast: "Dwayne Johnson, Jason Statham", 
        downloads: [
            { quality: "480p", size: "1.4 GB", link: "#" },
            { quality: "720p", size: "2.4 GB", link: "#" }
        ],
        industry: "Hollywood" // ADDED INDUSTRY FIELD
    },
];

// Elements that might exist on index.html
const movieGrid = document.getElementById('movieGrid');
const genreFilter = document.getElementById('genreFilter');
const loadingIndicator = document.getElementById('loadingIndicator');
const ratingFilter = document.getElementById('ratingFilter');
const currentRatingDisplay = document.getElementById('currentRatingDisplay');

// Elements that exist on both pages (or only used by shared functions)
const notificationBox = document.getElementById('notificationBox');
const notificationText = document.getElementById('notificationText');


// Global state for view type and pagination (index page only)
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
 * Helper to get the highest quality info for display purposes.
 * @param {Object} movie - The movie object.
 * @returns {Object} An object containing the highest quality and size.
 */
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


/**
 * Populates the genre filter dropdown with unique genres from the mock data.
 */
function populateGenreFilter() {
    if (!genreFilter) return;

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
    
    // Default sort: Year (Newest first), then ID for stability
    if (sortValue === 'default') {
        return movies.sort((a, b) => {
            if (b.year !== a.year) {
                return b.year - a.year; // Sort by year descending (newest first)
            }
            return a.id - b.id; // Secondary sort by ID ascending
        });
    }
    
    const [field, order] = sortValue.split('_');

    return movies.sort((a, b) => {
        let valA = a[field];
        let valB = b[field];

        // Industry or Title Sorting - Case-insensitive string comparison
        if (field === 'industry' || field === 'title') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        } 
        
        // Numeric conversion for proper sorting
        else if (field === 'rating' || field === 'year') {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        } else if (field === 'size') {
            // Use the size of the highest quality download as a proxy for sorting.
            const getSizeValue = (movie) => {
                const highestQuality = movie.downloads.reduce((prev, current) => {
                    const q_order = { '480p': 1, '720p': 2, '1080p': 3 };
                    return q_order[prev.quality] > q_order[current.quality] ? prev : current;
                }, { quality: '480p', size: '0 GB' });

                if (highestQuality) {
                    // Assuming size is like "X.X GB" or "X.X MB"
                    return parseFloat(highestQuality.size.replace(' GB', '').replace(' MB', '')); 
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
    if (!movieGrid) return; // Only run on index.html
    
    movieGrid.innerHTML = ''; // Clear previous content

    if (moviesToRender.length === 0) {
        movieGrid.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-xl text-gray-400">No movies found matching your criteria. Try adjusting the search or filter.</p>
            </div>
        `;
        return;
    }
    
    moviesToRender.forEach(movie => {
        // const displayInfo = getDisplayInfo(movie); // Removed as download info is removed from index page
        
        // Use an anchor tag to link to the new detail page
        const link = document.createElement('a'); 
        link.href = `movie_detail.html?id=${movie.id}`; // Set the link
        link.setAttribute('data-movie-id', movie.id);
        
        let cardHTML = '';

        if (currentView === 'grid') {
            // Grid View Layout (inside the <a> tag) - REMOVED DOWNLOAD INFO
            link.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-col';
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
                    
                    <div class="mt-auto pt-2 border-t border-gray-700 text-center">
                        <span class="bg-blue-600 text-white font-bold py-1 px-3 text-xs rounded transition duration-300">View Details</span>
                    </div>
                </div>
            `;
        } else {
            // List View Layout (Horizontal) - REMOVED DOWNLOAD INFO
            link.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-row items-center p-4 space-x-4';
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
                
                <div class="flex-shrink-0 ml-4">
                    <span class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300">View Details</span>
                </div>
            `;
        }
        
        link.innerHTML = cardHTML;
        movieGrid.appendChild(link);
    });
}

/**
 * Switches the layout between grid and list view (index page only).
 */
function toggleView() {
    if (!movieGrid) return; // Only run on index.html

    currentView = currentView === 'grid' ? 'list' : 'grid';
    const toggleButton = document.getElementById('viewToggleText');
    
    // Apply appropriate classes to the grid container
    if (currentView === 'list') {
        if (toggleButton) toggleButton.textContent = 'Switch to Grid View';
        movieGrid.classList.remove('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
        movieGrid.classList.add('flex', 'flex-col', 'gap-4');
    } else {
        if (toggleButton) toggleButton.textContent = 'Switch to List View';
        movieGrid.classList.add('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
        movieGrid.classList.remove('flex', 'flex-col', 'gap-4');
    }

    // Re-render all movies to apply new card HTML structure (maintaining current page)
    applyFilters(false); 
}

/**
 * Increases the current page count and re-renders the movies (index page only).
 */
function loadMore() {
    if (!movieGrid) return; // Only run on index.html

    currentPage++;
    // Re-apply filters and rendering, which will use the new currentPage
    applyFilters(false);
}

/**
 * Applies text search, genre filtering, and sorting (index page only).
 * @param {boolean} resetPage - If true, resets pagination (used when filters/search change).
 */
function applyFilters(resetPage = false) {
    if (!movieGrid) return; // Only run on index.html

    if (resetPage) {
        currentPage = 1;
    }

    
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedGenre = genreFilter ? genreFilter.value : '';
    const minRating = ratingFilter ? parseFloat(ratingFilter.value) : 0; 
    
    let filtered = mockMovies.filter(movie => {
        // Text search filter (includes title, genre, and cast)
        const textMatch = movie.title.toLowerCase().includes(searchTerm) || 
                          movie.genre.toLowerCase().includes(searchTerm) ||
                          movie.cast.toLowerCase().includes(searchTerm);
        
        // Genre selection filter
        const genreMatch = !selectedGenre || movie.genre === selectedGenre;

        // Rating filter
        const ratingMatch = movie.rating >= minRating;

        return textMatch && genreMatch && ratingMatch;
    });

    // Apply sorting after filtering
    filtered = sortMovies(filtered);

    // Pagination Logic
    totalFilteredMovies = filtered.length;
    const endIndex = currentPage * moviesPerPage;
    const moviesToRender = filtered.slice(0, endIndex);

    renderMovies(moviesToRender);

    // Show/Hide Load More Button
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        if (moviesToRender.length < totalFilteredMovies) {
            loadMoreContainer.classList.remove('hidden');
        } else {
            loadMoreContainer.classList.add('hidden');
        }
    }
}


/**
 * Attaches necessary event listeners to the filter and view elements (Index Page Only).
 */
function setupEventListeners() {
    // 1. Filter Change Listeners
    const filterElements = [
        document.getElementById('searchInput'),
        document.getElementById('genreFilter'),
        document.getElementById('sortFilter'),
        document.getElementById('ratingFilter')
    ];

    filterElements.forEach(element => {
        if (element) {
            // Use 'change' for select/range, 'input' for text search
            const eventType = element.id === 'searchInput' ? 'input' : 'change';
            
            element.addEventListener(eventType, () => applyFilters(true)); // resetPage=true on filter change
        }
    });

    // 2. Rating Slider Listener (for visual update)
    if (ratingFilter && currentRatingDisplay) {
        ratingFilter.addEventListener('input', (e) => {
            currentRatingDisplay.textContent = e.target.value;
            // Immediate visual update on rating filter is done in the 'input' handler above
        });
    }

    // 3. View Toggle Button Listener
    const viewToggleBtn = document.getElementById('viewToggleBtn');
    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', toggleView);
    }

    // 4. Load More Button Listener
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMore);
    }
}


/**
 * Renders the full details of a single movie on the movie_detail.html page.
 */
function loadDetailPage() {
    const detailContent = document.getElementById('detailContent');
    if (!detailContent) return; // Ensure we are on the detail page

    // 1. Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const movieId = parseInt(params.get('id'));

    if (!movieId) {
        renderError("Movie ID not found in the URL. Please return to the homepage.");
        return;
    }

    // 2. Find movie data
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) {
        renderError(`Movie with ID: ${movieId} was not found.`);
        return;
    }
    
    // 3. Prepare data for rendering
    const displayInfo = getDisplayInfo(movie); 

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

    // 4. Render Details - NOW EXCLUSIVELY SHOWING SYNOPSIS, CAST, AND DOWNLOADS HERE
    detailContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3 flex-shrink-0">
                <img src="${movie.cover}" alt="${movie.title} Cover" 
                     class="w-full h-auto rounded-xl shadow-2xl" 
                     onerror="this.onerror=null;this.src='https://placehold.co/400x600/1a1a1a/cccccc?text=Cover+Unavailable';"
                >
            </div>
            
            <div class="md:w-2/3">
                <h1 class="text-5xl font-extrabold text-blue-400 mb-2">${movie.title}</h1>
                <p class="text-2xl text-gray-300 mb-4">${movie.year} | ${movie.genre} | ${movie.industry}</p>

                <div class="flex items-center space-x-2 mb-6">
                    ${getVisualStarRatingHtml(movie.rating)}
                    <span class="text-2xl font-bold text-yellow-400">${movie.rating}</span>
                    <span class="text-xl text-gray-400">/ 10</span>
                </div>

                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">Synopsis</h2>
                <p class="text-gray-400 mb-6 text-lg">${movie.synopsis}</p>

                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">Starring</h2>
                <p class="text-gray-400 mb-8 text-lg">${movie.cast}</p>
                
                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4 text-green-400">Download Options (Max Quality: ${displayInfo.quality}, ${displayInfo.size})</h2>
                <div class="space-y-3">
                    ${downloadButtonsHTML}
                </div>
            </div>
        </div>
    `;

    // Update page title
    document.title = `${movie.title} - M STREAM`;
}

/**
 * Renders a standard error message on the detail page.
 * @param {string} message - The error message to display.
 */
function renderError(message) {
    const detailContent = document.getElementById('detailContent');
    if (detailContent) {
        detailContent.innerHTML = `
            <div class="text-center py-20 bg-red-900/50 rounded-xl">
                <svg class="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.39 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <h2 class="mt-2 text-2xl font-bold text-red-400">Error</h2>
                <p class="mt-1 text-lg text-red-300">${message}</p>
                <a href="index.html" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Go Back Home
                </a>
            </div>
        `;
    }
}


/**
 * Simulates a download action, shows a notification, and initiates the download.
 * @param {number} movieId - The ID of the movie.
 * @param {string} quality - The selected download quality (e.g., '720p').
 * @param {string} size - The file size for the selected quality.
 * @param {string} downloadLink - The actual download URL.
 */
function handleDownloadModal(movieId, quality, size, downloadLink) {
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie || !notificationBox || !notificationText) return;

    // 1. Show notification (Start message)
    notificationText.textContent = `Starting download for "${movie.title}" (${quality}, ${size})...`;
    notificationBox.style.display = 'block';
    notificationBox.classList.remove('bg-green-600');
    notificationBox.classList.add('bg-blue-600');
    
    // Trigger the slide-in animation
    setTimeout(() => {
        notificationBox.style.transform = 'translateX(0)';
    }, 10);

    // 2. ROBUST DOWNLOAD INITIATION (Using A Tag)
    if (downloadLink && downloadLink !== '#') {
        const a = document.createElement('a');
        a.href = downloadLink;
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

    // 3. Simulate download process delay and update notification
    setTimeout(() => {
        notificationText.textContent = `Download for "${movie.title}" (${quality}) initiated! Check your browser's download queue.`;
        notificationBox.classList.remove('bg-blue-600');
        notificationBox.classList.add('bg-green-600');
        
        // 4. Hide after a short delay
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
    // Check if we are on the detail page or the index page
    const isDetailPage = window.location.pathname.includes('movie_detail.html');

    if (isDetailPage) {
        // Run detail page specific logic
        loadDetailPage();
    } else {
        // Run index page specific logic
        
        // Set initial value for the display
        if (currentRatingDisplay && ratingFilter) currentRatingDisplay.textContent = ratingFilter.value;

        // Show loading indicator
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (movieGrid) movieGrid.style.display = 'none';

        // Simulate network delay before rendering
        setTimeout(() => {
            if (loadingIndicator) loadingIndicator.classList.add('hidden');
            if (movieGrid) {
                movieGrid.style.display = 'grid'; 
                movieGrid.classList.add('grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-5', 'gap-6');
            }
            
            populateGenreFilter();
            
            applyFilters(); // Renders, sorts, and filters default view (page 1)
            
            // Attach all interaction listeners
            setupEventListeners(); 
        }, 1500); // 1.5 second loading time simulation
    }
};