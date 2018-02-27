export default (environment = 'development') => ({ // eslint-disable-line

  // link file UUID
  id: '1d110e10-0b41-11e3-bffc-00144feabdc0',

  // canonical URL of the published page
  //  get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/nico-colchester-fellowship/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'The Nico Colchester Journalism Fellowship',

  // summary === standfirst (Summary is what the content API calls it)
  // summary: 'Political language is designed to make lies sound truthful' +
           // 'and murder respectable, and to give an appearance of solidity to pure wind',

  topic: {
    name: 'Starter Kit',
    url: '/foo',
  },

  // relatedArticle: {
  //   text: 'Related article »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: '',
    description: '',
    credit: '',

    // You can provide a UUID to an image and it was populate everything else
    // uuid: 'c4bf0be4-7c15-11e4-a7b8-00144feabdc0',

    // You can also provide a URL
    url: 'http://ft-ig-images-prod.s3-website-eu-west-1.amazonaws.com/v1/8480244499-8tyoo.png',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  // byline: [
  //   { name: 'Author One', url: '/foo/bar' },
  //   { name: 'Author Two' },
  // ],

  // Appears in the HTML <title>
  title: 'The Nico Colchester Journalism Fellowship',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://image.webservices.ft.com/v1/images/raw/ftcms:5c7917ec-c371-11e5-b3b1-7b2481276e45?source=ig',
  socialHeadline: 'Become a fellow of the FT or the Economist',
  socialDescription: 'Apply for the Nico Colchester Journalism Fellowship',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  tweetText: 'Become a fellow of the FT or the Economist. Apply for the Nico Colchester Fellowship',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: false,
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
