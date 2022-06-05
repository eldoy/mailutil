# Mail Utilities

NodeJS mail utility functions.

### Install

```
npm i mailutil
```

### Usage

```js
const mailutil = require('mailutil')

// Get domain from email
const domain = mailutil.domain('hello@example.com')
// example.com

// Generate id for a mail message
const id = mailutil.id('hello@example.com')
// <32525ff9-3d55-2781-d001-205fa77d018b@example.com>
```

MIT Licensed. Enjoy!
