export const API_KEY = "AIzaSyC6WbtdkOdvxwjHkVPp0Pv77l4fXhROeBg";

export const VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const MAX_LIVECHAT_COUNT = 20;
export const CATEGORY_ID_URL = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY
export const VIDEO_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const commentsData = [
  {
    id: 1,
    name: generateRandomName(),
    text: "Great content, really enjoying the stream!",
    replies: [],
    control: false
  },
  {
    id: 2,
    name: generateRandomName(),
    text: "Thanks for sharing this information, it's really important",
    control: false,
    replies: [
      {
        id: 3,
        name: generateRandomName(),
        text: "I'm blown away by how informative this stream is, thank you!",
        replies: [],
        control: false
      },
      {
        id: 4,
        name: generateRandomName(),
        text: "I can't believe how much I'm learning from this",
        control: false,
        replies: [
          {
            id: 5,
            name: generateRandomName(),
            text: "I'm really impressed by the quality of this content, thank you",
            control: false,
            replies: [
              {
                id: 6,
                name: generateRandomName(),
                text: "I'm loving the positive energy of this stream",
                control: false,
                replies: [
                  {
                    id: 7,
                    name: generateRandomName(),
                    text: "This is amazing!",
                    control: false,
                    replies: [
                      {
                        id: 8,
                        name: generateRandomName(),
                        text: "This is exactly the kind of content I was hoping",
                        replies: [],
                        control: false
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: generateRandomName(),
                    text: "This is amazing!",
                    control: false,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: generateRandomName(),
    text: "This is exactly the kind of content I was hoping",
    replies: [],
    control: false,
  }
];








