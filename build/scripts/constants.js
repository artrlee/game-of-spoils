var AVCLUB_FEED_ELEMENTS_SELECTOR, DATA_KEY, DEATH_NAMES, FACEBOOK_FEED_ELEMENTS_SELECTOR, GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR, GOT_RELATED_SUBREDDITS, GOT_SUBREDDITS_REGEX, REDDIT_FEED_ELEMENTS_SELECTOR, SLACK_FEED_ELEMENTS_SELECTOR, SPOILER_WORDS_LIST, SPOILER_WORDS_REGEX, TWITTER_FEED_ELEMENTS_SELECTOR;

DATA_KEY = 'game-of-spoils';

FACEBOOK_FEED_ELEMENTS_SELECTOR = '.userContentWrapper';

TWITTER_FEED_ELEMENTS_SELECTOR = "[data-item-type='tweet']";

GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR = '.blended-wrapper';

REDDIT_FEED_ELEMENTS_SELECTOR = '.sitetable > .thing.link:visible';

AVCLUB_FEED_ELEMENTS_SELECTOR = '.item, article.short';

SLACK_FEED_ELEMENTS_SELECTOR = 'ts-message';

SPOILER_WORDS_LIST = ['#got', 'ady stonehea', 'aidan gillen', 'alfie allen', 'arya stark', 'asoiaf', 'azor ahai', 'baelish', 'baratheon', 'ben crompton', 'bloodraven', 'braavos', 'bran stark', 'brienne of tarth', 'carice van houten', 'casterly rock', 'cersei ', 'conleth hill', 'd.b. weiss', 'daenerys', 'daniel portman', 'david benioff', 'davos seaworth', 'dornish', 'dothraki', 'dreadfort', 'emilia clarke', 'game of thrones', 'gameofthrone', 'greyjoy', 'gwendoline christie', 'highgarden', 'house bolton', 'house stark', 'house tyrell', 'howland reed', 'iain glen', 'ian mcelhinney', 'isaac hempstead wright', 'jerome flynn', 'john bradley', 'jojen reed', 'jon snow', 'julian glover', "king's landing", 'khaleesi', 'kit harington', 'kristian nairn', 'lannisport', 'lannister', 'lena headey', 'liam cunningham', 'littlefinger', 'maisie williams', 'meereen', 'melisandre', 'michelle fairley', 'myrcella', 'natalie dormer', 'nathalie emmanue', 'ned stark', 'nikolaj coster-waldau', 'olenna tyrell', 'peter dinklage', 'podrick payne', 'queen of thorns', 'ramsay bolton', 'roose bolton', 'rory mccann', 'sandor clegane', 'sansa stark', 'sophie turner', 'sothoryos', 'stephen dillane', 'targaryen', 'tower of joy', 'tyrion', 'vaes dothrak', 'viserys', 'walder frey', 'westeros', 'white walker', 'whitewalker', 'wildling', 'winterfell'];

SPOILER_WORDS_REGEX = new RegExp(SPOILER_WORDS_LIST.join('|'), 'i');

DEATH_NAMES = ['was grimly beheaded for desertion', "was burned at the stake to appease R'hllor", 'was slowly poisoned over a period of many fortnights', 'was torn asunder by six direwolves', 'was incinerated by hot dragon breath', 'was slain by a shadow', 'was defeated during a trial by combat', 'was infected with greyscale and quarantined permanently', 'warged into a dead cat', 'was too far north when winter came', 'did not live through the Long Night', 'is dark and full of terrors', 'caught toxoplasmosis from Ser Pounce', 'was murdered by its very own nuncle', 'was impaled by a lance at a tournament by a lowly hedge knight'];

GOT_RELATED_SUBREDDITS = ['gameofthrones', 'asoiaf', 'iceandfire', 'agotboardgame', 'gamesofthrones', 'westeros', 'thronescomics', 'asongofmemesandrage', 'earthoficeandfire'];

GOT_SUBREDDITS_REGEX = new RegExp('(\/r\/)' + GOT_RELATED_SUBREDDITS.join('|'), 'i');
