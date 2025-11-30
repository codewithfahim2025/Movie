// Mock Movie Data (expanded for robust pagination testing)
const mockMovies = [
    { id: 1, title: "Dhuruvangal Pathinaaru", year: 2016, genre: "Crime/Thriller", rating: 8.2, cover:"dhuruvangal-pathinaru.jpeg", release_date: "2016-12-29", synopsis: "A couple dies under mysterious circumstances and Inspector Deepak is assigned the case. However, he loses his leg in a confrontation during the investigation, which leads to the end of his career.", cast: " Rahman, Prakash Raghavan, Sharathkumar, Santhosh Krishna", 
        // UPDATED: Added 480p and 1080p options
        downloads: [
            { quality: "480p", size: "450 MB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" },
            { quality: "720p", size: "0.84 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" },
            { quality: "1080p", size: "1.6 GB", link: "https://drive.google.com/uc?export=download&id=1wexiSgmg9yf_fB8tyKSCAhEGUVDBoK-D" }
        ], 
        industry: "Tamil"
    },
    { id: 2, title: "Hit: The First Case", year: 2020, genre: "Crime/Thriller", rating: 7.6, cover: "hit.jpeg", release_date: "2020-02-28", synopsis: "A police officer in the homicide intervention team must overcome his struggles with his tragic past in order to investigate a case involving a missing woman.", cast: "Vishwak Sen,Adivi Sesh,Meenakshi Chaudhary.", 
        // UPDATED: Added 480p and 720p options
        downloads: [
            { quality: "480p", size: "600 MB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" },
            { quality: "720p", size: "1.36 GB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" },
            { quality: "1080p", size: "3.5 GB", link: "https://drive.google.com/uc?export=download&id=1f5CLl_7ARdDuj2pGaToasW_2z3t_OrEs" }
        ], 
        industry: "Telugu"
    },
    { id: 3, title: "Dracula: A Love Tale", year: 2025, genre: "Horror/Romance", rating: 6.2, cover: "dracula-a-love-tale.jpeg", release_date: "2025-07-30", synopsis: "Dracula: A Love Tale is a 2025 French gothic horror film by director Luc Besson, starring Caleb Landry Jones as Dracula and Christoph Waltz. It focuses on Dracula's tragic love for his wife, which leads him to become the immortal vampire after he renounces God. While released in France in July 2025, it is set for a North American theatrical release in early 2026.", 
        // UPDATED: Added 480p and 720p options
        downloads: [
            { quality: "480p", size: "500 MB", link: "https://drive.google.com/uc?export=download&id=1uc3DNfEU_MMliBdH_NPsL0IC9xqDfTaz" },
            { quality: "720p", size: "0.6 GB", link: "https://drive.google.com/uc?export=download&id=1uc3DNfEU_MMliBdH_NPsL0IC9xqDfTaz" },
            { quality: "1080p", size: "2.8 GB", link: "https://drive.google.com/uc?export=download&id=1uc3DNfEU_MMliBdH_NPsL0IC9xqDfTaz" }
        ], 
        industry: "Hollywood"
    },
    { id: 4, title: "Dragon's Fury", year: 2022, genre: "Fantasy", rating: 7.2, cover: "https://placehold.co/400x600/10b981/ffffff?text=Dragon", release_date: "2022-04-01", synopsis: "In a world where magic is banned, a young warrior must tame the last living dragon to save his village from a tyrannical empire.", cast: "Henry Cavill, Millie Bobby Brown", 
        // UPDATED: Added 480p and 720p options
        downloads: [
            { quality: "480p", size: "700 MB", link: "#" },
            { quality: "720p", size: "1.9 GB", link: "#" },
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ], 
        industry: "Hollywood"
    },
    { id: 5, title: "City of Shadows", year: 2023, genre: "Action", rating: 8.8, cover: "https://placehold.co/400x600/8b5cf6/ffffff?text=Shadows", release_date: "2023-10-20", synopsis: "A disgraced former police detective uncovers a vast conspiracy involving government officials and the city's criminal underworld.", cast: "Idris Elba, Gal Gadot", 
        // UPDATED: Added 480p and 720p options
        downloads: [
            { quality: "480p", size: "800 MB", link: "#" },
            { quality: "720p", size: "2.1 GB", link: "#" },
            { quality: "1080p", size: "4.0 GB", link: "#" }
        ], 
        industry: "Hollywood"
    },
    { id: 6, title: "The Inventor", year: 2021, genre: "Biography", rating: 8.0, cover: "https://placehold.co/400x600/f97316/ffffff?text=Inventor", release_date: "2021-03-05", synopsis: "The inspiring true story of Nikola Tesla and his relentless pursuit of wireless energy, despite facing opposition from powerful competitors.", cast: "Benedict Cumberbatch, Tom Holland", 
        // UPDATED: Added 480p and 1080p options
        downloads: [
            { quality: "480p", size: "400 MB", link: "#" },
            { quality: "720p", size: "1.7 GB", link: "#" },
            { quality: "1080p", size: "3.2 GB", link: "#" }
        ], 
        industry: "Hollywood"
    },
    // --- EXPANDED MOCK DATA (All updated to include 480p, 720p, 1080p) ---
    { id: 7, title: "Frozen Planet II", year: 2024, genre: "Documentary", rating: 9.5, cover: "https://placehold.co/400x600/06b6d4/ffffff?text=Planet", release_date: "2024-09-01", synopsis: "A stunning exploration of the Arctic and Antarctic, revealing the lives of animals coping with the extreme and rapidly changing climate.", cast: "David Attenborough (Narrator)", 
        downloads: [
            { quality: "480p", size: "900 MB", link: "#" },
            { quality: "720p", size: "2.5 GB", link: "#" },
            { quality: "1080p", size: "4.1 GB", link: "#" }
        ], 
        industry: "International" 
    },
    { id: 8, title: "Cyber Runner", year: 2024, genre: "Sci-Fi", rating: 8.3, cover: "https://placehold.co/400x600/6b7280/ffffff?text=Cyber", release_date: "2024-01-10", synopsis: "In a neon-drenched future, a rogue hacker finds a cryptic message that could expose the centralized AI controlling the city.", cast: "Keanu Reeves, Scarlett Johansson", 
        downloads: [
            { quality: "480p", size: "750 MB", link: "#" },
            { quality: "720p", size: "2.3 GB", link: "#" },
            { quality: "1080p", size: "4.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 9, title: "The Martian Chronicles", year: 2020, genre: "Sci-Fi", rating: 7.5, cover: "https://placehold.co/400x600/374151/ffffff?text=Martian", release_date: "2020-07-25", synopsis: "Exploration team struggles to colonize Mars after a catastrophic equipment failure.", cast: "Matt Damon, Jessica Chastain", 
        downloads: [
            { quality: "480p", size: "550 MB", link: "#" },
            { quality: "720p", size: "2.1 GB", link: "#" },
            { quality: "1080p", size: "3.8 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 10, title: "Last Stand at Midnight", year: 2023, genre: "Action", rating: 8.9, cover: "https://placehold.co/400x600/4f46e5/ffffff?text=Stand", release_date: "2023-12-31", synopsis: "A rogue agent must protect a witness from an international assassination squad on New Year's Eve.", cast: "Tom Cruise, Emily Blunt", 
        downloads: [
            { quality: "480p", size: "1.0 GB", link: "#" },
            { quality: "720p", size: "3.0 GB", link: "#" },
            { quality: "1080p", size: "5.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 11, title: "Whispers of the Past", year: 2022, genre: "Thriller", rating: 6.8, cover: "https://placehold.co/400x600/dc2626/ffffff?text=Whispers", release_date: "2022-11-17", synopsis: "A cold case detective finds a connection between a decades-old murder and a recent disappearance in his small hometown.", cast: "Chris Evans, Ana de Armas", 
        downloads: [
            { quality: "480p", size: "350 MB", link: "#" },
            { quality: "720p", size: "1.4 GB", link: "#" },
            { quality: "1080p", size: "2.6 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 12, title: "A Taste of Freedom", year: 2024, genre: "Documentary", rating: 9.3, cover: "https://placehold.co/400x600/10b981/ffffff?text=Freedom", release_date: "2024-07-04", synopsis: "Following the lives of three individuals released from incarceration and their journey to rebuild their lives.", cast: "N/A", 
        downloads: [
            { quality: "480p", size: "650 MB", link: "#" },
            { quality: "720p", size: "1.7 GB", link: "#" },
            { quality: "1080p", size: "3.2 GB", link: "#" }
        ], 
        industry: "International" 
    },
    { id: 13, title: "The Secret Garden", year: 2021, genre: "Romance", rating: 6.5, cover: "https://placehold.co/400x600/ec4899/ffffff?text=Garden", release_date: "2021-09-01", synopsis: "An adaptation of the classic novel about a young girl who discovers a hidden garden on her uncle's estate.", cast: "Colin Firth, Julie Walters", 
        downloads: [
            { quality: "480p", size: "300 MB", link: "#" },
            { quality: "720p", size: "1.2 GB", link: "#" },
            { quality: "1080p", size: "2.4 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 14, title: "Future Shock", year: 2025, genre: "Sci-Fi", rating: 9.0, cover: "https://placehold.co/400x600/000000/ffffff?text=Shock", release_date: "2025-01-01", synopsis: "A gripping tale of a society where dreams are commodified and sold on the black market.", cast: "Leonardo DiCaprio, Margot Robbie", 
        downloads: [
            { quality: "480p", size: "1.2 GB", link: "#" },
            { quality: "720p", size: "3.5 GB", link: "#" },
            { quality: "1080p", size: "6.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 15, title: "Jungle Hunt", year: 2023, genre: "Action", rating: 7.8, cover: "https://placehold.co/400x600/4c0519/ffffff?text=Hunt", release_date: "2023-05-15", synopsis: "A survival expert guides a group of researchers through the Amazon, encountering danger at every turn.", cast: "Dwayne Johnson, Jason Statham", 
        downloads: [
            { quality: "480p", size: "550 MB", link: "#" },
            { quality: "720p", size: "2.4 GB", link: "#" },
            { quality: "1080p", size: "4.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 16, title: "The Silent Witness", year: 2018, genre: "Mystery", rating: 7.9, cover: "https://placehold.co/400x600/9ca3af/ffffff?text=Witness", release_date: "2018-04-12", synopsis: "A lawyer defends an accused man who refuses to speak.", cast: "Amy Adams, Jake Gyllenhaal", 
        downloads: [
            { quality: "480p", size: "450 MB", link: "#" },
            { quality: "720p", size: "1.3 GB", link: "#" },
            { quality: "1080p", size: "2.1 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 17, title: "Desert Mirage", year: 2020, genre: "Drama", rating: 8.1, cover: "https://placehold.co/400x600/fcd34d/000000?text=Desert", release_date: "2020-08-01", synopsis: "A heartbreaking story of love and loss in the Moroccan desert.", cast: "Penélope Cruz, Javier Bardem", 
        downloads: [
            { quality: "480p", size: "380 MB", link: "#" },
            { quality: "720p", size: "1.5 GB", link: "#" },
            { quality: "1080p", size: "2.9 GB", link: "#" }
        ], 
        industry: "International" 
    },
    { id: 18, title: "Ocean's Depth", year: 2019, genre: "Adventure", rating: 7.4, cover: "https://placehold.co/400x600/1e3a8a/ffffff?text=Ocean", release_date: "2019-06-20", synopsis: "Deep-sea exploration turns into a nightmare when the crew encounters an unknown creature.", cast: "Jason Momoa, Nicole Kidman", 
        downloads: [
            { quality: "480p", size: "850 MB", link: "#" },
            { quality: "720p", size: "2.2 GB", link: "#" },
            { quality: "1080p", size: "3.9 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 19, title: "The Cursed Ring", year: 2022, genre: "Horror", rating: 6.9, cover: "https://placehold.co/400x600/000000/ff0000?text=Cursed", release_date: "2022-10-31", synopsis: "A group of teenagers unleashes an ancient evil after stealing a cursed artifact.", cast: "Unknown Cast", 
        downloads: [
            { quality: "480p", size: "250 MB", link: "#" },
            { quality: "720p", size: "1.1 GB", link: "#" },
            { quality: "1080p", size: "2.0 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 20, title: "Star Command", year: 2024, genre: "Sci-Fi", rating: 8.5, cover: "https://placehold.co/400x600/0c4a6e/ffffff?text=Star", release_date: "2024-05-01", synopsis: "The final battle for humanity against an alien empire.", cast: "Chris Pine, Zoe Saldana", 
        downloads: [
            { quality: "480p", size: "900 MB", link: "#" },
            { quality: "720p", size: "2.8 GB", link: "#" },
            { quality: "1080p", size: "4.8 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 21, title: "Parallel Universe", year: 2023, genre: "Sci-Fi/Mystery", rating: 8.0, cover: "https://placehold.co/400x600/60a5fa/ffffff?text=Parallel", release_date: "2023-01-01", synopsis: "A scientist finds a way to travel to alternate realities.", cast: "Ryan Reynolds, Sandra Bullock", 
        downloads: [
            { quality: "480p", size: "400 MB", link: "#" },
            { quality: "720p", size: "2.0 GB", link: "#" },
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 22, title: "Ancient Secrets", year: 2021, genre: "Adventure", rating: 7.7, cover: "https://placehold.co/400x600/a855f7/ffffff?text=Ancient", release_date: "2021-03-22", synopsis: "An archaeologist searches for a lost city in the Amazon jungle.", cast: "Harrison Ford, Angelina Jolie", 
        downloads: [
            { quality: "480p", size: "700 MB", link: "#" },
            { quality: "720p", size: "1.8 GB", link: "#" },
            { quality: "1080p", size: "3.5 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 23, title: "City Lights", year: 2017, genre: "Romance/Drama", rating: 9.2, cover: "https://placehold.co/400x600/f43f5e/ffffff?text=Lights", release_date: "2017-02-14", synopsis: "Two strangers meet on a bridge and change each other's lives forever.", cast: "Emma Stone, Ryan Gosling", 
        downloads: [
            { quality: "480p", size: "350 MB", link: "#" },
            { quality: "720p", size: "1.4 GB", link: "#" },
            { quality: "1080p", size: "2.5 GB", link: "#" }
        ], 
        industry: "International" 
    },
    { id: 24, title: "The Heist Master", year: 2024, genre: "Crime/Action", rating: 8.4, cover: "https://placehold.co/400x600/22c55e/ffffff?text=Heist", release_date: "2024-06-01", synopsis: "A professional thief is forced into one last job by his former mentor.", cast: "Denzel Washington, Brad Pitt", 
        downloads: [
            { quality: "480p", size: "800 MB", link: "#" },
            { quality: "720p", size: "2.1 GB", link: "#" },
            { quality: "1080p", size: "4.0 GB", link: "#" }
        ], 
        industry: "Hollywood" 
    },
    { id: 25, title: "Shadow World", year: 2022, genre: "Fantasy/Thriller", rating: 7.6, cover: "https://placehold.co/400x600/1f2937/ffffff?text=Shadow", release_date: "2022-11-05", synopsis: "A detective must navigate a dangerous shadow realm to save his partner.", cast: "Tom Hardy, Charlize Theron", 
        downloads: [
            { quality: "480p", size: "450 MB", link: "#" },
            { quality: "720p", size: "1.9 GB", link: "#" },
            { quality: "1080p", size: "3.3 GB", link: "#" }
        ], 
        industry: "Hollywood" 
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
let moviesPerPage = 10; // **SET TO 10 MOVIES PER PAGE**
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
 * @returns {Object} An object containing the highest quality, size, and link.
 */
const getDisplayInfo = (movie) => {
    // Sort by quality preference (1080p > 720p > 480p)
    const sortedDownloads = movie.downloads.sort((a, b) => {
        const q_order = { '480p': 1, '720p': 2, '1080p': 3 };
        return q_order[b.quality] - q_order[a.quality];
    });
    const highestQuality = sortedDownloads[0];
    
    return {
        quality: highestQuality ? highestQuality.quality : 'N/A',
        size: highestQuality ? highestQuality.size : 'N/A',
        link: highestQuality ? highestQuality.link : '#'
    };
}


/**
 * Populates the genre filter dropdown with unique genres from the mock data.
 */
function populateGenreFilter() {
    if (!genreFilter) return;

    // Use a Set to collect unique genres
    const uniqueGenres = new Set();
    mockMovies.forEach(movie => {
        // Split multi-genre strings (e.g., "Crime/Thriller")
        movie.genre.split('/').forEach(g => uniqueGenres.add(g.trim()));
    });
    
    // Clear existing options, keeping "All Genres"
    genreFilter.innerHTML = '<option value="">All Genres</option>';
    
    // Sort and add unique genres
    Array.from(uniqueGenres).sort().forEach(genre => {
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
    const sortValue = document.getElementById('sortFilter').value || 'year_desc';
    
    const [field, order] = sortValue.split('_');

    return movies.sort((a, b) => {
        let valA = a[field];
        let valB = b[field];

        // String comparison
        if (field === 'title' || field === 'industry' || field === 'genre') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        } 
        
        // Numeric comparison
        else if (field === 'rating' || field === 'year') {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        } else if (field === 'size') {
            // Sort by the size of the highest quality download
            const getSizeValue = (movie) => {
                const highestQuality = getDisplayInfo(movie);
                // Assuming size is like "X.X GB" or "X.X MB"
                // Normalize to MB for consistent comparison
                const sizeStr = highestQuality.size;
                if (sizeStr.includes('GB')) {
                    return parseFloat(sizeStr.replace(' GB', '')) * 1024;
                } else if (sizeStr.includes('MB')) {
                    return parseFloat(sizeStr.replace(' MB', ''));
                }
                return 0;
            };
            valA = getSizeValue(a);
            valB = getSizeValue(b);
        }

        let comparison = 0;
        if (valA < valB) comparison = -1;
        if (valA > valB) comparison = 1;

        return order === 'asc' ? comparison : -comparison;
    });
}

/**
 * Renders the movie cards into the grid container, adjusting for the current view state.
 * This function performs a full re-render up to the current pagination limit.
 * @param {Array} moviesToRender - The array of movie objects to display.
 */
function renderMovies(moviesToRender) {
    if (!movieGrid) return; 
    
    movieGrid.innerHTML = ''; // Clear previous content (Full Re-render)

    if (moviesToRender.length === 0) {
        movieGrid.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-xl text-gray-400">No movies found matching your criteria. Try adjusting the search or filter.</p>
            </div>
        `;
        return;
    }
    
    moviesToRender.forEach(movie => {
        // --- Changed to <div> to remove link to movie_detail.html and added click handler for modal ---
        const cardContainer = document.createElement('div'); 
        cardContainer.setAttribute('data-movie-id', movie.id);
        cardContainer.onclick = () => showMovieDetailsModal(movie.id); // NEW: Click to open modal
        
        let cardHTML = '';

        if (currentView === 'grid') {
            // Grid View Layout
            cardContainer.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-col cursor-pointer';
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
                    
                    </div>
            `;
        } else {
            // List View Layout (Horizontal)
            cardContainer.className = 'movie-card bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-700/50 flex flex-col sm:flex-row items-center p-4 space-x-4 cursor-pointer';
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
                
                `;
        }
        
        cardContainer.innerHTML = cardHTML;
        movieGrid.appendChild(cardContainer);
    });
}

/**
 * Switches the layout between grid and list view (index page only).
 */
function toggleView() {
    if (!movieGrid) return; 

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

    applyFilters(true); // Re-render from page 1 with new view style
}

/**
 * Increases the current page count and re-renders the movies (index page only).
 */
function loadMore() {
    if (!movieGrid) return; 

    currentPage++;
    // Re-apply filters and rendering, which will use the new currentPage limit
    applyFilters(false);
}

// NEW FUNCTION: Triggers filtering specifically for the search button.
function triggerSearch() {
    applyFilters(true);
}

/**
 * Applies text search, genre filtering, and sorting (index page only).
 * @param {boolean} resetPage - If true, resets pagination (used when filters/search change).
 */
function applyFilters(resetPage = false) {
    if (!movieGrid) return; 

    if (resetPage) {
        currentPage = 1;
    }

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedGenre = genreFilter ? genreFilter.value : '';
    const minRating = ratingFilter ? parseFloat(ratingFilter.value) : 0; 
    
    let filtered = mockMovies.filter(movie => {
        // Text search filter 
        const titleMatch = movie.title.toLowerCase().includes(searchTerm);
        const genreSearchMatch = movie.genre.toLowerCase().includes(searchTerm);
        // FIX: Ensure movie.cast is treated as an empty string if it is missing/undefined
        const castMatch = (movie.cast || "").toLowerCase().includes(searchTerm);
        
        const textMatch = titleMatch || genreSearchMatch || castMatch;

        // Genre selection filter
        const genreMatch = !selectedGenre || movie.genre.includes(selectedGenre);

        // Rating filter
        const ratingMatch = movie.rating >= minRating;

        return textMatch && genreMatch && ratingMatch;
    });

    // Apply sorting after filtering
    filtered = sortMovies(filtered);

    // Pagination Logic (Full Re-render approach)
    totalFilteredMovies = filtered.length;
    const endIndex = currentPage * moviesPerPage;
    const moviesToRender = filtered.slice(0, endIndex);

    renderMovies(moviesToRender);

    // Show/Hide Load More Button
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        // Only show if the number of rendered movies is less than the total available
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
    // 1. View Toggle Button Listener is inline in HTML.
    
    // 2. Load More Button Listener
    const loadMoreBtn = document.getElementById('loadMoreButton'); 
    if (loadMoreBtn) {
        // Ensure this listener is active, even if the button uses an inline onclick
        loadMoreBtn.addEventListener('click', loadMore);
    }

    // 3. NEW: Listen for Enter key on the search input to trigger search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent default form submission
                triggerSearch();
            }
        });
    }
}

// --- NEW MODAL FUNCTIONS ---

/**
 * Renders details and download options into the modal and displays it.
 */
function showMovieDetailsModal(movieId) {
    const detailsModal = document.getElementById('detailsModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!detailsModal || !modalContent) return;

    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie) {
        modalContent.innerHTML = renderModalError(`Movie with ID: ${movieId} was not found.`);
        detailsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
        return;
    }
    
    // Prepare data for rendering
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

    // Render Details into Modal
    modalContent.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="flex flex-col md:flex-row gap-8 pt-4">
            <div class="md:w-1/3 flex-shrink-0">
                <img src="${movie.cover}" alt="${movie.title} Cover" 
                     class="w-full h-auto rounded-xl shadow-2xl" 
                     onerror="this.onerror=null;this.src='https://placehold.co/400x600/1a1a1a/cccccc?text=Cover+Unavailable';"
                >
            </div>
            
            <div class="md:w-2/3">
                <h1 class="text-4xl font-extrabold text-blue-400 mb-2">${movie.title}</h1>
                <p class="text-xl text-gray-300 mb-4">${movie.year} | ${movie.genre} | ${movie.industry}</p>

                <div class="flex items-center space-x-2 mb-6">
                    ${getVisualStarRatingHtml(movie.rating)}
                    <span class="text-xl font-bold text-yellow-400">${movie.rating}</span>
                    <span class="text-lg text-gray-400">/ 10</span>
                </div>

                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">Synopsis</h2>
                <p class="text-gray-400 mb-6 text-lg max-h-36 overflow-y-auto">${movie.synopsis}</p>

                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">Starring</h2>
                <p class="text-gray-400 mb-8 text-md">${movie.cast}</p>
                
                <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4 text-green-400">Download Options</h2>
                <div class="space-y-3 max-h-40 overflow-y-auto pr-2">
                    ${downloadButtonsHTML}
                </div>
            </div>
        </div>
    `;

    // Show the modal
    detailsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

/**
 * Closes the movie details modal.
 * @param {Event} event - The click event (optional, for backdrop click).
 */
function closeModal(event) {
    const detailsModal = document.getElementById('detailsModal');
    // If event is passed, only close if the click was directly on the backdrop
    if (event && event.target !== detailsModal) return; 

    if (detailsModal) {
        detailsModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

/**
 * Renders an error message specifically for the modal.
 */
function renderModalError(message) {
    return `
        <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="text-center py-20 bg-red-900/50 rounded-xl">
            <svg class="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.39 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <h2 class="mt-2 text-2xl font-bold text-red-400">Error</h2>
            <p class="mt-1 text-lg text-red-300">${message}</p>
        </div>
    `;
}

// Function to handle download modal (remains unchanged)
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
    // Run index page specific logic
    
    // Check if both rating elements exist before setting textContent
    if (currentRatingDisplay && ratingFilter) {
        currentRatingDisplay.textContent = ratingFilter.value;
    }

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
};