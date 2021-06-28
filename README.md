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
> 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/73359960/123568878-dbeaf800-d78a-11eb-92ea-c526ca5f4ac3.gif)

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/73359960/123568875-dab9cb00-d78a-11eb-99b4-85435e2d5352.gif)

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/73359960/123568874-d9889e00-d78a-11eb-9782-a513d4505ef1.gif)

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/73359960/123568866-d4c3ea00-d78a-11eb-9386-ec2c64c4c61a.gif)

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/73359960/123569117-574ca980-d78b-11eb-80f0-f1a1964460a1.gif)


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

