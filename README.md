# VyFi

The social bots used by the VyFi team.

## PLEASE NOTE:

This is currently a work in progress. I am migrating to a new codebase that is open source (what you see now). Migrating
will take a few days, everything will be updated in this repository in the future.

Certain parts are omitted from being uploaded due to the nature of them (certain API links, for example).

Once this rewrite is done, a proper Readme will be made which explains the project, code, uses, etc.

Issues and contributions are always welcome throughout the whole development stage.


Just as a note:
Originally the price was fetched directly from the API, now it is a mix of that and from coingecko. I already have infrastructure in place for my other ticker bots for aggregated price data I store locally, I'll be switching the status/nickname price to that, and any manual price requests (price command or similar) to the original API. This is for - put it simply - reduced network overhead since I run all of this on my home network, and it's much more reliable.
