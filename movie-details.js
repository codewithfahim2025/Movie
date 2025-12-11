// Mock Movie Data (expanded for robust pagination testing)
const mockMovies = [
    { id: 1, title: "12 th Fail", year: 2023, genre: "Drama", rating: 8.7, cover:"twelve-fail.jpeg", release_date: "2023-10-27", synopsis: "IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.", cast: "Vikrant Massey,Medha Shankr,Anant Joshi,Anshumaan Pushkar,Priyanshu Chatterjee", 
        // UPDATED: Added 'type' field to download objects
        downloads: [
             { quality: "480p", size: "451 MB", link: "https://indi-down4.org/8dp199atxj2c", type: "WEB-DL" },
            { quality: "720p", size: "1.15 GB", link: "https://indi-down4.org/apurtnsitqhp", type: "WEB-DL" },
          
        ], 
        industry: "Hindi", // Multi-language support
        watch_link: "" // Watch online link
    },
    { id: 2, title: "Kishkindhapuri", year: 2025, genre: "Horror/Thriller", rating: 7.0, cover: "Kishkindhapuri2025.jpeg", release_date: "2025-09-12", synopsis: "The guests visit a vintage radio station for a ghost tour where they awaken a slumbering spirit. Locked inside, they struggle to escape as otherworldly powers endanger their existence.", cast: " Bellamkonda Sai Sreenivas, Anupama Parameswaran and Sandy.", 
        // UPDATED: Added 'type' field
        downloads: [
          { quality: "480p", size: "490 MB", link: "https://indi-down4.org/zdzt7lbprrhu", type: "WEB-DL" },
         
            { quality: "720p", size: "1.27 GB", link: "https://indi-down4.org/1uaq2w709ors", type: "WEB-DL" },
         
        ], 
        industry: "Telugu, Hindi Dubbed",
        watch_link: ""
    },
    { id: 3, title: "Dracula: A Love Tale", year: 2025, genre: "Horror/Romance", rating: 6.2, cover: "dracula-a-love-tale.jpeg", release_date: "2025-07-30", synopsis: "Dracula: A Love Tale is a 2025 French gothic horror film by director Luc Besson, starring Caleb Landry Jones as Dracula and Christoph Waltz. It focuses on Dracula's tragic love for his wife, which leads him to become the immortal vampire after he renounces God. While released in France in July 2025, it is set for a North American theatrical release in early 2026.", cast:"Caleb Landry Jones,Zoe Bleu,Matilda De Angelis.",
        // UPDATED: Added 'type' field
        downloads: [
            { quality: "480p", size: "358 MB", link: "https://indi-down4.org/52f2obpjn8sy", type: "WEB-DL" },
           
            { quality: "720p", size: "1.45 GB", link: "https://indi-down4.org/dq4a0ja8njma", type: "WEB-DL" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 4, title: "Kantara:A Legend Chapter-1", year: 2025, genre: "Action/Thriller", rating: 8.3, cover: "kantara2025.jpeg", release_date: "2025-10-02", synopsis: "In pre-colonial Karnataka, during the Kadamba dynasty era, the ritual of Bhuta Kola takes root in the culture. Meanwhile, the seeds for the rise of Kaadubettu Shiva are also sown.",cast:"Rukmini Vasanth,Rishab Shetty,Gulshan Devaiah.", 
        // UPDATED: Added 'type' field
        downloads: [
            { quality: "480p", size: "536 MB", link: "https://indi-down4.org/k3j1ysqlvy99", type: "WEB-DL" },
           
            { quality: "720p", size: "1.39 GB", link: "https://indi-down4.org/oat4p4u70tqd", type: "WEB-DL" },
             { quality: "1080p", size: "3.17 GB", link: "https://indi-down4.org/t4onupy9p4dq", type: "WEB-DL" },
        ], 
        industry: "Kannada,Hindi Dubbed",
        watch_link: ""
    },
    { id: 5, title: "Aaryan", year: 2025, genre: "Crime/Thriller", rating: 6.4, cover: "aaryan2025.jpeg", release_date: "2025-10-31", synopsis: "A struggling writer announces he'll commit the perfect crime, sparking a tense pursuit as police try to prevent his methodically planned killing spree.", cast: "Vishnu Vishal,Shraddha Srinath,Maanasa Choudhary.", 
        // UPDATED: Added 'type' field
        downloads: [
          { quality: "480p", size: "461 MB", link: "https://indi-down4.org/s1qtjs2nwbps", type: "WEB-DL" },
            { quality: "720p", size: "1.22 GB", link: "https://indi-down4.org/th0co2mzumu4", type: "WEB-DL" },
            
        ], 
        industry: "Tamil,Hindi Dubbed",
        watch_link: ""
    },
    { id: 6, title: "Frankenstein", year: 2025, genre: "Horror/Sci-Fi", rating: 7.5, cover: "frankenstein2025.jpeg", release_date: "2025-11-07", synopsis: "A brilliant but egotistical scientist brings a monstrous creature to life in a daring experiment that ultimately leads to the undoing of both the creator and his tragic creation.", cast: "Oscar Isaac,Jacob Elordi,Mia Goth.", 
        // UPDATED: Added 'type' field
        downloads: [
            { quality: "720p", size: "532 MB", link: "https://indi-down4.org/73b3g4wh5wbl", type: "WEB-DL" },
           
            { quality: "720p", size: "1.39 GB", link: "https://indi-down4.org/or3pi9vt5qsn", type: "WEB-DL" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    // --- EXPANDED MOCK DATA (All updated to include 'type' field) ---
    { id: 7, title: "Tere Ishk Mein", year: 2025, genre: "Romance/Musical", rating: 8.2, cover: "tereishkmein2025.jpeg", release_date: "2025-11-28", synopsis: "Shankar and Mukti's intense love story unfolds against the backdrop of Benaras, exploring surrender and transformation through an all-consuming romance that heals, hurts, and changes them.", cast: "Dhanush,Kriti Sanon,Prabhu Deva.", 
        downloads: [
           
            { quality: "720p", size: "1.53 GB", link: "https://indi-down4.org/qhhrv6odt3hz", type: "HDTC" },
             { quality: "1080p", size: "3.21 GB", link: "https://indi-down4.org/3hh8yo5w0rqk", type: "HDTC" },
        ], 
        industry: "Hindi", 
        watch_link: ""
    },
    { id: 8, title: "Dhurandhar", year: 2025, genre: "Action/Thriller", rating: 8.4, cover: "dhurandhar2025.jpeg", release_date: "2025-12-05", synopsis: "An underworld saga following a network of criminals, informants and operatives whose lives intersect, navigating covert operations, espionage and betrayals.", cast: "Ranveer Singh,Akshaye Khanna,Sara Arjun,Sanjay Dutt,Arjun Rampal.", 
        downloads: [
            { quality: "480p", size: "674 MB", link: "https://indi-files.net/download/OByHdfqw9HA", type: "HDTC" },
            { quality: "720p", size: "1.83 GB", link: "https://indi-files.net/download/atEdTgyzDwP", type: "HDTC" },
            { quality: "1080p", size: "3.29 GB", link: "https://indi-files-drive.org/download/R8DgT-qm0j0", type: "HDTC" }
        ], 
        industry: "Hindi", 
        watch_link: ""
    },
    { id: 9, title: "Black Phone 2", year: 2020, genre: "Horror/Thriller", rating: 6.1, cover: "blackphone2.jpeg", release_date: "2025-10-17", synopsis: "Bad dreams haunt 15-year-old Gwen as she receives calls from the black phone and sees disturbing visions of three boys being stalked at a winter camp. Accompanied by her brother, Finn, they head to the camp to solve the mystery, only to confront the Grabber -- a killer who's grown even more powerful in death.", cast: " Mason Thames; Madeleine McGraw; Jeremy Davies; Demián Bichir; Ethan Hawke.", 
        downloads: [
            { quality: "480p", size: "444 MB", link: "https://indi-files.net/download/k-xCkOHtrrc", type: "WEB_DL" },
            { quality: "720p", size: "1.03 GB", link: "https://indi-files.net/download/qqWQN-ZCEC6", type: "WEB-DL" },
          
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 10, title: "A House of Dynamite", year: 2025, genre: "Thriller/Drama", rating: 6.4, cover: "ahouseofdynamite2025.jpeg", release_date: "2025-10-10", synopsis: "Radars at Fort Greely, Alaska, detect a nuclear missile. The president and his entourage must use the limited time they have to try to shoot down the missile before it reaches Chicago.", cast: "Idris Elba,Rebecca Ferguson. ", 
        downloads: [
            { quality: "480p", size: "399 MB", link: "https://indi-down4.org/k8n2qtfsk2po", type: "WEB-DL" },
            { quality: "720p", size: "1.04 GB", link: "https://indi-down4.org/xtq4e0v6wlec", type: "WEB-DL" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 11, title: "A Aa", year: 2016, genre: "Commedy/Drama/Romance", rating: 6.8, cover: "aaa2016.jpeg", release_date: "2016-06-02", synopsis: "Anasuya, the daughter of a rich woman, falls in love with Aanand. However, they face several obstacles while trying to convince their families about their relationship.", cast: "Nithiin,Samantha Ruth Prabhu,Anupama Parameswaran.", 
        downloads: [
            { quality: "480p", size: "327 MB", link: "https://indi-down4.org/61a8owdl2hbn", type: "WEB-DL" },
            { quality: "720p", size: "1.38 GB", link: "https://indi-down4.org/eam9evtayyph", type: "WEB-DL" },
            
        ], 
        industry: "Telugu/Hindi Dubbed",
        watch_link: ""
    },
    { id: 12, title: "Baaghi 4", year: 2025, genre: "Action/Thriller", rating: 2.4, cover: "baaghi4.jpeg", release_date: "2025-09-05", synopsis: "Following a failed suicide attempt, a man struggles with reality and descends into turmoil. His family faces uncertainty while a concealed truth lures him into a complex maze of obsession and love.", cast: "Tiger Shroff,Sanjay Dutt,Harnaz Kaur Sandhu,Sonam Bajwa.", 
        downloads: [
            { quality: "480p", size: "500 MB", link: "https://indi-down4.org/5uqcy87zs70g", type: "WEB-DL" },
            { quality: "720p", size: "1.3 GB", link: "https://indi-down4.org/7ifpra6xhtxi", type: "WEB-DL" },
            { quality: "1080p", size: "2.94 GB", link: "https://indi-down4.org/p5n9bvpngha1", type: "WEB-DL" }
        ], 
        industry: "Hindi", 
        watch_link: ""
    },
    { id: 13, title: "Inception", year: 2010, genre: "Sci-Fi/Action", rating: 8.8, cover: "Inception2010.jpg", release_date: "2010-07-08", synopsis: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.", cast: "Leonardo DiCaprio,Cillian Murphy,Tom Hardy,Joseph Gordon-Levit,Elliot Page.", 
        downloads: [
            { quality: "480p", size: "442 MB", link: "https://indi-files.net/download/XwAcF2OyL0g", type: "WEB-DL" },
            { quality: "720p", size: "1.12 GB", link: "https://indi-down4.org/pala10mz3odj", type:"WEB-DL" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 14, title: "Interstellar", year: 2014, genre: "Sci-Fi/Adventure", rating: 8.7, cover: "Interstellar-2014.jpg", release_date: "2014-10-26", synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", cast: "Matthew McConaughey,Jessica Chastain,Anne Hathaway,Mackenzy Foy,Timothy Chamalate.", 
        downloads: [
            { quality: "480p", size: "564 MB", link: "https://indi-down4.org/ui0wyv2ptzec", type: "BluRay" },
            { quality: "720p", size: "1.48 GB", link: "https://indi-down4.org/owkcieju7t31", type: "BluRay" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 15, title: "The Black Phone", year: 2021, genre: "Horror/Mystrey", rating: 6.9, cover: "blackphone.jpeg", release_date: "2022-06-24", synopsis: "Finney Shaw is a shy but clever 13-year-old boy who's being held in a soundproof basement by a sadistic, masked killer. When a disconnected phone on the wall starts to ring, he soon discovers that he can hear the voices of the murderer's previous victims -- and they are dead set on making sure that what happened to them doesn't happen to Finney.", cast: "Mason Thames,Madeleine McGraw,Jeremy Davies,James Ransone,Ethan Hawke", 
        downloads: [
           
            { quality: "720p", size: "889 MB", link: "https://indi-down4.org/xu8u6w2zsnjt", type: "WEB-DL" },
            { quality: "1080p", size: "3.00 GB", link: "https://indi-down4.org/pfexy7x0yejt", type: "WEB-DL" }
        ], 
        industry: "English/Hindi Dubbed", 
        watch_link: ""
    },
    { id: 16, title: "Dude", year: 2025, genre: "Commedy/Adventure", rating: 6.3, cover: "dude2025.jpeg", release_date: "2025-10-17", synopsis: "Childhood friends Agan and Kural are inseparable. When Kural encounters romantic troubles, Agan must balance his hidden feelings for her with his desire to ensure her happiness.", cast: " Pradeep Ranganathan,Mamitha Baiju,R. Sarathkumar, Hridhu Haroon, Rohini, Aishwarya Sharma and Neha Shetty.", 
        downloads: [
            { quality: "480p", size: "479 MB", link: "https://indi-down4.org/4fqy70ruyyy8", type: "WEB-DL" },
            { quality: "720p", size: "1.3 GB", link: "https://indi-down4.org/xwpwg1b0kbou", type: "WEB-DL" },
            
        ], 
        industry: "Tamil,Hindi Dubbed",
        watch_link: ""
    },
    { id: 18, title: "Eden", year: 2024, genre: "Survival/Thriller", rating: 6.5, cover: "eden2024.jpeg", release_date: "2025-08-22", synopsis: "A group of disillusioned Europeans settles on a remote, uninhabited island in the Galápagos. They soon discover that their greatest threat isn't the brutal climate or deadly wildlife, but one another. As tensions spiral and desperation takes hold, a twisted power struggle unfolds, leading to betrayal, violence and death", cast: "Jude Law, Ana de Armas, Vanessa Kirby, Sydney Sweeney, Daniel Brühl, Felix Kammerer, Toby Wallace,Richard Roxburgh", 
        downloads: [
            { quality: "480p", size: "451 MB", link: "https://indi-down4.org/js55fgs8zjno", type: "WEB-DL" },
            { quality: "720p", size: "1.19 GB", link: "https://indi-down4.org/c4klij3zn1ku", type: "WEB-DL" },
          
        ], 
        industry: "English,Hindi Dubbed", 
        watch_link: ""
    },
    { id: 18, title: "Oddity", year: 2024, genre: "Horror/Thriller", rating: 6.7, cover: "oddity2024.jpeg", release_date: "2024-08-30", synopsis: "Darcy Odello, a visually impaired psychic, strives to find the person who brutally murdered her sister. Later, when she visits the site of murder, she makes shocking discoveries.", cast: "Carolyn Bracken, Gwilym Lee, Steve Wall, Joe Rooney.", 
        downloads: [
            { quality: "480p", size: "174 MB", link: "https://indi-down4.org/729yizxj6jte", type: "WEB-DL" },
            { quality: "720p", size: "534 MB", link: "https://indi-down4.org/ypqnd2pneni5", type: "WEB-DL" },
           
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 19, title: "Eleven", year: 2025, genre: "Crime/Thriller", rating: 7.4, cover: "eleven2025.jpeg", release_date: "2025-05-16", synopsis: "A seasoned police officer begins an investigation after a series of gruesome murders targeting twins comes to light. However, he soon encounters a sinister game of psychological manipulation.", cast: "Naveen Chandra ,Reyaa Hari with Abhirami, Ravi Varma, Dileepan, Riythvika, Shashank, Aadukalam Naren and Arjai", 
        downloads: [
            { quality: "480p", size: "468 MB", link: "https://indi-down4.org/ux6oqkuimlrl", type: "WEB-DL" },
            { quality: "720p", size: "1.23 GB", link: "https://indi-down4.org/x55njrftd1r0", type: "WEB-DL" },
           
        ], 
        industry: "Tamil,Hindi Dubbed",
        watch_link: ""
    },
    { id: 20, title: "The Fantastic Four: First Steps", year: 2025, genre: "Action/Sci-Fi", rating: 6.9, cover: "fantastic4-2025.jpeg", release_date: "2024-07-24", synopsis: "Mister Fantastic, Invisible Woman, Human Torch and the Thing face their most daunting challenge yet as they defend Earth from Galactus and Silver Surfer.", cast: " Pedro Pascal, Vanessa Kirby, Ebon Moss-Bachrach, and Joseph Quinn ", 
        downloads: [
            { quality: "480p", size: "404 MB", link: "https://indi-down4.org/kiwbgd81e6f8", type: "WEB-DL" },
            { quality: "720p", size: "1.06 GB", link: "https://indi-down4.org/s1rw7775xlfu", type: "WEB-DL" },
            { quality: "1080p", size: "2.3 GB", link: "https://indi-down4.org/h6wehs3k56iu", type: "WEB-DL" }
        ], 
        industry: "English,Hindi Dubbed", 
        watch_link: ""
    },
    { id: 21, title: "Final Destination Bloodlines", year: 2025, genre: "Horror/Mystery", rating: 6.7, cover: "final-destination-bloodlines2025.jpeg", release_date: "2025-05-16", synopsis: "Plagued by a violent and recurring nightmare, a college student heads home to track down the one person who might be able to break the cycle of death and save her family from the grisly demise that inevitably awaits them all.", cast: " Kaitlyn Santa Juana; Teo Briones; Richard Harmon; Owen Patrick Joyner; Anna Lore; Brec Bassinger; Tony Todd", 
        downloads: [
            { quality: "480p", size: "277 MB", link: "https://indi-down4.org/mv99sea2aho9", type: "WEB-DL" },
            { quality: "720p", size: "1.14 GB", link: "https://indi-down4.org/kfqg9pqda2ca", type: "WEB-DL" },
            { quality: "1080p", size: "2.26 GB", link: "https://indi-down4.org/037qba8v8k91", type: "WEB-DL" }
        ], 
        industry: "English,Hindi Dubbed",
        watch_link: ""
    },
    { id: 22, title: "F1", year: 2025, genre: "Sport/Action", rating: 7.7, cover: "f1-2025.jpeg", release_date: "2025-06-27", synopsis: "In the 1990s, Sonny Hayes was Formula 1's most promising driver until an accident on the track nearly ended his career. Thirty years later, the owner of a struggling Formula 1 team convinces Sonny to return to racing and become the best in the world. Driving alongside the team's hotshot rookie, Sonny soon learns that the road to redemption is not something you can travel alone.", cast: "Brad Pitt,Damson Idris,Kerry Condon,Tobias Menzies,Javier Bardem", 
        downloads: [
            { quality: "480p", size: "525 MB", link: "https://indi-down4.org/v8jjkpc4iq1u", type: "BluRay" },
            { quality: "720p", size: "1.43 GB", link: "https://indi-down4.org/vss3nuhgvzxc", type: "BluRay" },
           
        ], 
        industry: "English,Hindi Dubbed", 
        watch_link: ""
    },
    { id: 23, title: "Kis Kisko Pyaar Karoon", year: 2015, genre: "Commedy/Drama", rating: 5.7, cover: "kkpk2015.jpeg", release_date: "2017-02-14", synopsis: "A man marries three different women who live in the same building and are unaware that they have the same husband. To make matters worse, all his wives get invited to his fourth wedding..", cast: " Kapil Sharma, Simran Kaur Mundi, and Manjari Fadnnis", 
        downloads: [
            { quality: "480p", size: "434 MB", link: "https://indi-down4.org/l1ro7uik5w84", type: "WEB-DL" },
            { quality: "720p", size: "1.22 GB", link: "https://indi-down4.org/oi5zzb0u9tlw", type: "WEB-DL" },
           
        ], 
        industry: "Hindi", 
        watch_link: ""
    },
    { id: 24, title: "Lokah Chapter 1: Chandra", year: 2025, genre: "Fantasy/Adventure", rating: 7.7, cover: "lokah2025.jpeg", release_date: "2025-08-28", synopsis: "A youthful woman uncovers mystical skills while facing personal hurdles. Meanwhile, as evil surfaces, she must embrace her powers and fate in a shifting world..", cast: "Dulquer Salmaan,Kalyani Priyadarshan,Naslen,Sandy,Arun Kurian,Chandu Salim Kumar", 
        downloads: [
            { quality: "480p", size: "522 MB", link: "https://indi-down4.org/n8mc4is7il0k", type: "WEB-DL" },
            { quality: "720p", size: "1.38 GB", link: "https://indi-down4.org/zrocptzlmq4e", type: "WEB-DL" },
            { quality: "1080p", size: "3.01 GB", link: "https://indi-down4.org/ods6lc76kymv", type: "WEB-DL" }
        ], 
        industry: "Malayalam,Hindi Dubbed",
        watch_link: ""
    },
    { id: 25, title: "Mirai", year: 2025, genre: "Action/Adventure", rating: 7.2, cover: "mirai2025.jpeg", release_date: "2025-09-12", synopsis: "A warrior is tasked with the protection of nine sacred scriptures that can turn any mortal into a deity..", cast: "Teja Sajja,Manchu Manoj,Jagapathi Babu,Jayaram,Shriya Saran,Ritika Nayak", 
        downloads: [
            { quality: "480p", size: "415 MB", link: "https://indi-down4.org/wj4uiwenpovc", type: "WEB-DL" },
            { quality: "720p", size: "1.72 GB", link: "https://indi-down4.org/w4yyoy503adc", type: "WEB-DL" },
            { quality: "1080p", size: "3.33 GB", link: "https://indi-down4.org/w8ewai90myn2", type: "WEB-DL" }
        ], 
        industry: "Telugu,Hindi Dubbed",
        watch_link: ""
    },
];

// Elements that might exist on index.html
const movieGrid = document.getElementById('movieGrid');
const genreFilter = document.getElementById('genreFilter');
const languageFilter = document.getElementById('languageFilter');
const loadingIndicator = document.getElementById('loadingIndicator');
const ratingFilter = document.getElementById('ratingFilter');
const currentRatingDisplay = document.getElementById('currentRatingDisplay');

// Elements that exist on both pages (or only used by shared functions)
const notificationBox = document.getElementById('notificationBox');
const notificationText = document.getElementById('notificationText');


// Global state for view type and pagination (index page only)
let currentView = 'grid'; // 'grid' or 'list'
let moviesPerPage = 15; // **UPDATED TO 15 MOVIES PER PAGE**
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
 * @returns {Object} An object containing the highest quality, size, link, and type.
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
        link: highestQuality ? highestQuality.link : '#',
        type: highestQuality ? highestQuality.type : 'N/A' // NEW: Include type
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
 * Populates the language filter dropdown with unique languages/industries from the mock data.
 * FIX: Handles comma-separated values in the 'industry' field.
 */
function populateLanguageFilter() {
    if (!languageFilter) return;

    // Use a Set to collect unique languages (from the 'industry' field)
    const uniqueLanguages = new Set();
    mockMovies.forEach(movie => {
        // FIX: Split the comma-separated string, trim, and add each unique language
        movie.industry.split(',').forEach(lang => {
            const trimmedLang = lang.trim();
            if (trimmedLang) { // Ensure no empty strings are added
                uniqueLanguages.add(trimmedLang);
            }
        });
    });

    // Clear existing options, keeping "All Languages"
    languageFilter.innerHTML = '<option value="">All Languages</option>';

    // Sort and add unique languages
    Array.from(uniqueLanguages).sort().forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageFilter.appendChild(option);
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
                <div class="w-16 h-24 flex-shrink-0 relative sm:block">
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
    const selectedLanguage = languageFilter ? languageFilter.value : '';
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
        
        // Language selection filter (FIX: Use includes() for comma-separated string)
        const languageMatch = !selectedLanguage || 
                              movie.industry.toLowerCase().includes(selectedLanguage.toLowerCase());
        
        // Rating filter
        const ratingMatch = movie.rating >= minRating;

        return textMatch && genreMatch && languageMatch && ratingMatch;
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

// --- MODAL & HISTORY API FUNCTIONS ---

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
        <button onclick="handleDownloadModal(${movie.id}, '${download.quality}', '${download.size}', '${download.link}', '${download.type}')"
                class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 flex justify-between items-center text-left mb-2">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download ${download.quality} <span class="text-yellow-300 font-bold ml-1">(${download.type})</span>
            </span>
            <span class="text-sm text-gray-200 font-normal ml-4">${download.size}</span>
        </button>
    `).join('');

    // NEW: Generate Watch Button HTML
    const watchButtonHTML = movie.watch_link && movie.watch_link !== '#' ? `
        <div class="mt-8 border-t border-gray-700 pt-6">
            <h2 class="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4 text-red-400">Watch Online</h2>
            <a href="${movie.watch_link}" target="_blank" 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 flex justify-center items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.55-2.275a.5.5 0 01.725.445v9.66a.5.5 0 01-.725.445L15 14m-5 4v1a3 3 0 003 3h4a3 3 0 003-3v-1m-4-10l-4-4m0 0l-4 4m4-4v12" />
                    </svg>
                    Watch Now (External Link)
                </span>
            </a>
        </div>
    ` : '';
    
    // Render Details into Modal
    modalContent.innerHTML = `
        <button onclick="closeModal(null, false)" class="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300 z-50">
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
                
                <button onclick="closeModal(null, false)"
                    class="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back to List
                </button>
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
                
                ${watchButtonHTML}
            </div>
        </div>
    `;

    // Show the modal
    detailsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    
    // *** HISTORY API IMPLEMENTATION: 1. Push new state ***
    // Add a new entry to the browser's history to represent the modal being open.
    // The hash change triggers a new history state without a full page reload.
    history.pushState({ modalOpen: true, movieId: movieId }, movie.title, '#details'); 
}


/**
 * Closes the movie details modal.
 * @param {Event} event - The click event (optional, for backdrop click).
 * @param {boolean} isPopState - True if closing is triggered by history.popstate (device back button).
 */
function closeModal(event, isPopState = false) { 
    const detailsModal = document.getElementById('detailsModal');
    
    // Check if the click was directly on the backdrop (if event is passed and isPopState is false)
    if (event && event.target !== detailsModal) return; 

    if (detailsModal) {
        detailsModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // *** HISTORY API IMPLEMENTATION: 2. Handle manual close ***
    // If the modal was closed manually (X button, "Go Back" button, or backdrop click) 
    // AND the URL hash is currently '#details', we need to manually go back in history 
    // to remove the entry we created, otherwise the user would have to press back twice.
    if (!isPopState && window.location.hash === '#details') {
        history.back();
    }
}

/**
 * Renders an error message specifically for the modal.
 */
function renderModalError(message) {
    return `
        <button onclick="closeModal(null, false)" class="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300 z-50">
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

// Function to handle download modal
// UPDATED: Added 'type' argument
function handleDownloadModal(movieId, quality, size, downloadLink, type) { 
    const movie = mockMovies.find(m => m.id === movieId);
    if (!movie || !notificationBox || !notificationText) return;

    // 1. Show notification (Start message)
    // UPDATED: Added 'type' to notification text
    notificationText.textContent = `Starting download for "${movie.title}" (${quality} ${type}, ${size})...`;
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
        // UPDATED: Added 'type' to the filename
        a.download = `${cleanTitle}_${quality}_${type}.mp4`; 
        
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
        // UPDATED: Added 'type' to final notification text
        notificationText.textContent = `Download for "${movie.title}" (${quality} ${type}) initiated! Check your browser's download queue.`;
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
        populateLanguageFilter(); 
        
        applyFilters(); // Renders, sorts, and filters default view (page 1)
        
        // Attach all interaction listeners
        setupEventListeners(); 
    }, 1500); // 1.5 second loading time simulation
};

// *** HISTORY API IMPLEMENTATION: 3. Listen for device/browser back button press ***
window.addEventListener('popstate', (event) => {
    const detailsModal = document.getElementById('detailsModal');
    
    // If the modal is currently open and we are navigating back in history
    if (detailsModal && !detailsModal.classList.contains('hidden')) {
        // Close the modal using the isPopState flag (to prevent it from calling history.back() again)
        closeModal(null, true); 
    }
    // If the modal is not open, the browser handles the history navigation normally.
});