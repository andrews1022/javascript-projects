// Generate Button
const btn = document.querySelector('#generate-btn');

// Array with all of the startup/tech companies
const startupArray = [
  'After Effects',
  'Airbnb',
  'Amazon',
  'Audible',
  'Bandcamp',
  'Behance',
  'Blogger',
  'Clio',
  'CodePen',
  'Craigslist',
  'Discord',
  'Docker',
  'DoorDash',
  'Dribble',
  'Dropbox',
  'Duolingo',
  'eBay',
  'Etsy',
  'Evernote',
  'Excel',
  'Expedia',
  'Facebook',
  'Flickr',
  'GitHub',
  'GitKraken',
  'Gmail',
  'Grindr',
  'Hootsuite',
  'Illustrator',
  'IMDb',
  'Indeed',
  'Instagram',
  'iTunes',
  'LinkedIn',
  'Linux',
  'Lyft',
  'Medium',
  'Meetup',
  'Netflix',
  'Photoshop',
  'Pinterest',
  'Pirate Bay',
  'Plenty of Fish',
  'Reddit',
  'Rotten Tomatoes',
  'Shazam',
  'SiriusXM',
  'Skip the Dishses',
  'Skype',
  'Slack',
  'Snapchat',
  'Soundcloud',
  'Spotify',
  'Squarespace',
  'Stack Overflow',
  'Steam',
  'TikTok',
  'Tinder',
  'Trip Advisor',
  'Tumblr',
  'Twitch',
  'Twitter',
  'Uber Eats',
  'Uber',
  'Udemy',
  'Vimeo',
  'WhatsApp',
  'Wikipedia',
  'YouTube'
];

// Array with all of the possible options/'but it's for...'
const optionArray = [
  '10x engineers',
  'accountants',
  'actors and actresses',
  'actors',
  'administrators',
  'aerospace engineers',
  'Android developers',
  'audiophiles',
  'auditors',
  'back end developers',
  'bad drivers',
  'bankers',
  'bartenders',
  'baseball players',
  'bassists',
  'biologists',
  'birds',
  'bookkeepers',
  'bus drivers',
  'Canadians who are not nice',
  'carpenters',
  'cars',
  'cashiers',
  'cats',
  'celebrities',
  'centerists',
  'chefs',
  'chemists',
  'city planners',
  'collectors',
  'conservatives',
  'construction workers',
  'cosplayers',
  'cows',
  'customer service reps',
  'dancers',
  'dat boi',
  'daydreamers',
  'dead memes',
  'deciding which wine and cheese pair to have after sex',
  'dentists',
  'designers',
  'developers',
  'directors',
  'dishwashers',
  'doctors',
  'dogs',
  'drug dealers',
  'drummers',
  'electricians',
  'engineers of the non-10x variety, those filthy scum',
  'engineers',
  'entrepreneurs',
  'executive assistants',
  'fans of the DCU',
  'fans of the MCU',
  'financial advisors',
  'firefighters',
  'flight attendants',
  'florists',
  'food',
  'football players',
  'front end developers',
  'full stack developers',
  'gamers',
  'gardeners',
  'geologists',
  "Grammar Nazi's",
  'grandparents',
  'guitarists',
  'gymnasts',
  'hackers',
  'hikers',
  'historians',
  'hoarders',
  'hockey players',
  'HR',
  'influencers',
  'iOS developers',
  'Jan the Man',
  'janitors',
  'K-pop fans',
  'lacrosse players',
  'landscapers',
  'LARPers',
  'late night television hosts',
  'lawyers',
  'lazy people',
  'liberals',
  'lobsters',
  'longshoreman',
  'lumberjacks',
  'Magic: The Gathering players',
  'maids',
  'massage therapists',
  'mathematicians',
  'mechanics',
  'memes',
  'merchandisers',
  'metalheads',
  'MMA fighters',
  'models',
  'morons',
  'movers',
  'movie buffs',
  'musicians',
  'nurses',
  'people doing all them crazy ass stunts in the movies',
  'people in the military',
  'people posting a screenshot of this to r/ProgrammerHumor',
  'people that are unnaturally happy',
  'people trying to get sober',
  'people who are high, like, all the time',
  'people who complain about dumb shit on the internet',
  'people who dab unironically',
  'people who just do not give a single fuck',
  'people who like dad jokes too much',
  'people who never shut the fuck up',
  'people who nevr make spelling mistakes',
  'people who swear way to fucking goddamn much',
  'people who use memes irl, smh',
  'people who use the dark web',
  'people with palms that are sweaty, knees that are week, and arms that are heavy',
  'personal assistants',
  'pharmacists',
  'photographers',
  'pigeons',
  'pilots',
  'pissing off your annoying neighbour',
  'pizza',
  'PlayStation fanboys',
  'plumbers',
  'Pokémon fans',
  'police officers',
  'principals',
  'professors',
  'programmers',
  'psychics, aka frauds',
  'psychologist',
  'public servants',
  'QA testers',
  'realtors',
  'referees',
  'rich people who need all the things',
  'rocket scientists. Like, actual rocket scientists',
  'royalty',
  'runners',
  'scientists',
  'secretaries',
  'security guards',
  'sex workers',
  'smart fridges',
  'soccer players',
  'social workers',
  'software developers',
  'software engineers',
  'some seriously kinky shit',
  'someone in sales',
  'spahgetti',
  'strippers',
  'supervisors/managers',
  'swimmers',
  'system analysts',
  'teachers',
  'that guy in his garage with his Lamborghini',
  'the deadweights of society',
  'therapists',
  'things that are definitely illegal',
  'those dipshits who think ghosts and spirits are real',
  'those mutherfuckering MLM scamming pieces of shit',
  "those poor bastards that've been friendzoned for eternity",
  'those unfortunate souls sent to the shadow realm',
  'trailer trash',
  'trains',
  'truckers',
  'vloggers',
  'volleyball players',
  'waiters and waitresses',
  'welders',
  'whoever Karen from Reddit is',
  'writers',
  'Xbox fanboys',
  'YouTubers experiencing burnout',
  'YouTubers',
  'Yu-Gi-Oh! players',
  'zombies'
];

// Generate
btn.addEventListener('click', () => {
  // Generate random startup/tech company value
  const randomComp = startupArray[Math.floor(Math.random() * startupArray.length)];

  // Generate random options/'but it's for...' value
  const randomOption = optionArray[Math.floor(Math.random() * optionArray.length)];

  // Inject a response into the empty paragraph
  document.querySelector(
    '#generated-text'
  ).textContent = `"Well, it's like ${randomComp}, but for ${randomOption}."`;
});
