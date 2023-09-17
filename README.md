<br/>
<p align="center">
  <h3 align="center">VyFi</h3>

  <p align="center">
    The official Discord bot used by the VyFi team and public! 
<br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/AdamT20054/GasWatch/total) ![Contributors](https://img.shields.io/github/contributors/AdamT20054/GasWatch?color=dark-green) ![Issues](https://img.shields.io/github/issues/AdamT20054/GasWatch) ![License](https://img.shields.io/github/license/AdamT20054/GasWatch) ![Forks](https://img.shields.io/github/forks/AdamT20054/GasWatch?style=social) ![Stargazers](https://img.shields.io/github/stars/AdamT20054/GasWatch?style=social)

## Table of Contents

- [Description](#description)
- [How it's made](#how-its-made)
- [Features](#features)
- [Screenshots](#screenshots)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contact-me)
  <br/>

# Description

This is the official VyFi Discord bot, it is a bot specifically designed around the VyFi project. It is available for
anyone to use, and acts
like my other tickers [you can find here](https://github.com/AdamT20054/DiscordTickers), however it has specifically
been desinged to integrate with the VyFI platform as much as possible.

On the VyFi server specifically, it acts as secondary support, spam prevention, user verification and most importantly,
a community bot for the users to have VyFi as part of their server.
<br/>

# How it's made

The open source version of this bot is running on Discord.js@V14. The bot has had a long, admittedly tough, life, first
starting off with Discord.jsV12 and moving up every version since then.

The bot is hosted on my own personal hardware, it has 3 nodes to fallback to should the main one fail. 2 nodes are RPIs,
and one is my main compute server. Most data for the bot is stored locally, I
have a database manager I wrote to put any data I need into a LN MariaDB server which ALL my bots grab their data from.

As far as inspiration goes, [Not Under Ctrl](https://github.com/notunderctrl) has provided a VERY nice foundation for
the project, I've took
heavy inspiration from their handlers in the past because.. well.. it's what I would of made, but I would of made it
worse - don't reinvent the wheel.

The bot is written in JavaScript, and uses a lot of the latest features of the language. I've tried to keep the code as
clean as possible, and I've tried to keep it as readable as possible. I've also tried to keep the code as modular as
possible, so that it's easy to add new features, and easy to remove old ones. And because it makes debugging 0.02%
easier.
<br/>
<br/>

## Can I run this myself?

Simple answer, no! Long answer, you'll need to adapt parts to suit the resources you have. Parts of the code are omitted
for security purposes, however these are mostly links and they're easily distinguisable when you see
a `process.env.johndoe`. The code is written in a way
where you can hopefully deduce what should go there, and you can get it running yourself.

While I won't provide direct instructions for getting your own instance running, I'm happy to answer any questions you
have that may aid in you getting your own version running.

<br/>

# Features

- Provide a locally generated captcha for new users to solve using my open
  source [DJSCaptcha module](https://github.com/AdamT20054/DJSCaptcha).
- Interogate users who send what are detected to be spam messages, by getting them to solve a captcha.
- Get token prices from the VyFi DEX live!
- See live price updates for VyFi via the bot's nickname.
- Have an indication of the 24hr % with the bot's colour-changing roles.
- Let the bot attempt to answer your questions in the support channel
- Use the support command to get support for a problem you're having.

## Upcoming features

- [ ] Add a command to get the latest VyFi news.
- [ ] Link your wallet to the bot and see your portfolio for VyFi's dex

# Screenshots

*coming soon*
<br/>

## License

<a href="https://choosealicense.com/licenses/gpl-3.0"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/gpl3.svg" height=40 />
GNU GPLv3 License</a>
<br/>
<br/>

## Acknowledgements

The handler was largely inspired by [Not Under Ctrl](https://github.com/notunderctrl) <3 </br>
Ryan at VyFi kindly provided the API's required to make this happen <3 </br>
Thank you to everyone who has helped test, improve and support this project <3 </br>

## Contact me

- Need Help? [Join our Discord Server](https://discord.gg/YbtckEktmn)

- Found a Bug? [Open an Issue](https://github.com/AdamT20054/DJSCaptcha/issues), or Fork
  and [Submit a Pull Request](https://github.com/AdamT20054/DJSCaptcha/pulls) on
  our [GitHub Repository](https://github.com/AdamT20054/DJSCaptcha)!
