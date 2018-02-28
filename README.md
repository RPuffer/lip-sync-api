[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)

# API & Test Project for Rhubarb Lip Sync


## Usage:

- To see demo animation

```bash
    $   npm install
    $   npm start

    navigate to localhost:3000
```

- animation images are taken from the mouth shapes shown in the [rhubarb repo](https://github.com/DanielSWolf/rhubarb-lip-sync#json)


## Utils

- To analyze a .wav file with Rhubarb
    - Add `<your-file-name>.wav` & `<your-file-name>.txt` into the inbox/ dir
    - The text file should contain the dialogue for optimal results
    - Next, in the lib/ folder add a call to `analyze('<your-file-name>');` and run the file
    - i.e. `node ./lib/analyze`
    - timing results will then appear in the outbox/ folder as `<your-file-name>.json`

- for quick .mp3 -> .wav conversion grab the `ffmpeg` library => `brew install ffmpeg`
    - Then use the command `ffmpeg -i <filename>.mp3 <filename>.wav`