#Spotify Watcher

This simple and pretty trivial node module that works in conjunction with https://github.com/Shopify/shopify_theme.

##Installation

Go into your working shopify theme directory and run the following to install:

    npm install git://github.com/geoffberger/shopify-watcher.git

##Usage

Once you have gone through the setup setup steps in the shopify_theme project,
create a file say `listen.js` with the following contents:

    require('shopify_watcher')('/full/path/to/shopify/theme/directory')

So if you are working from this path:

    /Users/@username@/Workspace/shopify_themes/foo_theme

This is what you would pass into the node script. Once the file has been
created, run the node script:

    node listen.js

Open up a new tab to your shopify theme and start modifying. You'll see the
logging occur from the node script. Refresh the browser and you should be good
to go.

You can run the node script from anywhere really, since shopify_watcher takes
in a full path.

