const forumObject = {
  title: "I need to learn JavaScript",
  content: `Hello, fellow JavaScript developers, 
  can you recommend some really great and useful resources 
  that will help me become a JavaScript developer in a couple of weeks?`,
  poostBy: {
    username: "johnDoes66",
    memberSince: new Date("08/10/2019"),
    posts: 72,
    rank: "Rookie",
  },
  timePosted: new Date("03/08/2023, 12:33"),
  views: 351,
  upvotes: 1,
  upvotesBy: ["JSONKenedy"],

  replies: [
    {
      content: `No, the world has enough JS
      developers anyway. Go learn
      C++ or something meaningfull`,
      postBy: {
        username: "smartdude55",
        memberSince: new Date("19/02/2014"),
        posts: 102,
        rank: "Loser",
      },
      timePosted: "12:35",
      views: 95,
      upvotes: 3,
      upvotesBy: ["devjunkie", "mrjsguru", "arhitekta"],
    },

    {
      content: `Yes, but you cant become a
      developer in 10 days. You need 
      to study A LOT.`,
      postBy: {
        username: "mrjsguru",
        memberSince: new Date("01/01/2012"),
        posts: 355,
        rank: "Capybara",
      },
      timePosted: "12:35",
      views: 101,
      upvotes: 2,
      upvotesBy: ["Spina4ko", "malkiqBiq4"],
    },
  ],
};
