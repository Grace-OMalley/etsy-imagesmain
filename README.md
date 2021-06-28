# Etsy Images Carousel

> Image carousel displaying fake item images with full modal and zoom functionality

## Related Projects

  - https://github.com/Grace-OMalley/etsy-imagesmain-proxy
  - https://github.com/Grace-OMalley/etsy-reviews
  - https://github.com/Grace-OMalley/etsy-reviews-proxy
  - https://github.com/Grace-OMalley/etsy-addtocart
  - https://github.com/Grace-OMalley/etsy-addtocart-proxy

## Table of Contents

1. [Usage](#usage)
    - [API](#api)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> This service contains an image carousel with a modal component. To coincide with this component there is one endpoint that interacts with a MongoDB database in order to either seed of display mock images per itemId. This service acts as the "source of truth" for the images rendered in the proxy server.

<a href="https://imgur.com/aWDJ1Aw" target="_blank">


#### API

> The following endpoint returns mock images to populate the image carousel

GET /images/:itemId
   - Retrieves itemId, storeId, and imagesUrl which contains five links to mock images

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run start
```

