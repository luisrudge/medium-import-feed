[![Build status](https://ci.appveyor.com/api/projects/status/korwmols9k90ynku/branch/master?svg=true)](https://ci.appveyor.com/project/luisrudge/medium-import-feed/branch/master)
[![Build Status](https://travis-ci.org/luisrudge/medium-import-feed.svg?branch=master)](https://travis-ci.org/luisrudge/medium-import-feed)

# medium-import-feed
import your feeds directly into medium

# Usage

### Create token
Go [here](https://medium.com/me/settings) and create an integration token.

### Terminal
```bash
git@github.com:luisrudge/medium-import-feed.git
cd medium-import-feed/src
npm install
node index.js --token=integration-token --feed=feed-url
```
