# rack

An implementation of the [Ableton Drum Rack layout](https://llllllll.co/t/using-a-grid-as-linnstrument/23637/34?u=neauoire) for the **Monome 128**. This tiny console script will create a new virtual instrument called **Rack Monome** to use with your DAW. You can follow the discussion [here](https://llllllll.co/t/using-a-grid-as-linnstrument/23637).

<img src='https://raw.githubusercontent.com/neauoire/linn/master/PREVIEW.jpg' width='600'/>

## Setup

### Requirements

- install [git](https://hackernoon.com/install-git-on-mac-a884f0c9d32c), or check with `git -v`
- install [nodeJS](https://nodejs.org/en/), or check with `npm -v`
- install [monome drivers](https://monome.org/docs/setup/), and reboot.

### Install

- Open the terminal
- type `cd Documents`
- type `git clone https://github.com/neauoire/rack.git`
- type `cd rack`
- type `sudo npm install`
- type `node index`

### Whenever you want to use it

- type `cd Documents/rack`
- type `node index`

## Channel

By default, the rack monome will send to **Channel 0**, you can change channel by holding down the last key(bottom right), and pressing one of the 16 keys of the top row.

## Layout

```
1C 1D 1E 1F 3C 3D 3E 3F 5C 5D 5E 5F 7C 7D 7E 7F
18 19 1A 1B 38 39 3A 3B 58 59 5A 5B 78 79 7A 7B
14 15 16 17 34 35 36 37 54 55 56 57 74 75 76 77
10 11 12 13 30 31 32 33 50 51 52 53 70 71 72 73
0C 0D 0E 0F 2C 2D 2E 2F 4C 4D 4E 4F 6C 6D 6E 6F
08 09 0A 0B 28 29 2A 2B 48 49 4A 4B 68 69 6A 6B
04 05 06 07 24 25 26 27 44 45 46 47 64 65 66 67
00 01 02 03 20 21 22 23 40 41 42 43 60 61 62 63
```

Enjoy :)