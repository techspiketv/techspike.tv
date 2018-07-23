# techspike.tv

#### [Twitch Stream](https://www.twitch.tv/techspiketv)

## Getting Started

```
npm i
npm run develop
npm run build
npm run serve
```

## About techspike.tv

A spike is a product-testing method originating from Extreme Programming that uses the simplest possible program to explore potential solutions.

For me, techspike's are how I improve my development skills. I choose to build things, often useless things, in order to understand how some tech works, or get comfortable doing something which takes practice.

If you want to request a spike, HMU in chat.

I plan to stream:

* React / Web Development
* Ethereum Development
* Machine Learning Experiments
* Chat Bot Dev

## Using Gatsby with Twitch


Go get your own twitch clientID:

https://dev.twitch.tv/dashboard

Get a Twitch userID from their display name:

https://api.twitch.tv/helix/users?login=USERNAME

You will need to set the Client-ID header...

https://dev.twitch.tv/docs/v5#translating-from-user-names-to-user-ids


### Plugins

- [NetlifyCMS](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/)
- [JSDoc](https://www.gatsbyjs.org/packages/gatsby-transformer-documentationjs/) 
- [Twitch](https://github.com/Jedidiah/gatsby-source-twitch)
- [Medium](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-medium)