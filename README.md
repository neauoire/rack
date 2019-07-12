# rack

An implementation of the [Ableton Drum Rack layout](https://llllllll.co/t/using-a-grid-as-linnstrument/23637/34?u=neauoire) for the **Monome 128**. This tiny console script will create a new virtual instrument called **Rack Monome** to use with your DAW. You can follow the discussion [here](https://llllllll.co/t/using-a-grid-as-linnstrument/23637).

<img src='https://raw.githubusercontent.com/neauoire/rack/master/PREVIEW.jpg' width='600'/>

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
G0#  A0   A0#  B0   E3   F3   F3#  G3   C6   C6#  D6   D6#  CY   CY#  DY   DY#   
E0   F0   F0#  G0   C3   C3#  D3   D3#  G5#  A5   A5#  B5   E8   F8   F8#  G8   
C0   C0#  D0   D0#  G2#  A2   A2#  B2   E5   F5   F5#  G5   C8   C8#  D8   D8# 
GZ#  AZ   AZ#  BZ   E2   F2   F2#  G2   C5   C5#  D5   D5#  G7#  A7   A7#  B7  
EZ   FZ   FZ#  GZ   C2   C2#  D2   D2#  G4#  A4   A4#  B4   E7   F7   F7#  G7  
CZ   CZ#  DZ   DZ#  G1#  A1   A1#  B1   E4   F4   F4#  G4   C7   C7#  D7   D7# 
GY#  AY   AY#  BY   E1   F1   F1#  G1   C4   C4#  D4   D4#  G6#  A6   A6#  B6  
EY   FY   FY#  GY   C1   C1#  D1   D1#  G3#  A3   A3#  B3   E6   F6   F6#  G6  
```

Enjoy :)
