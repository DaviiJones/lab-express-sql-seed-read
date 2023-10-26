const express = require("express");

const musics = express.Router();


musics.get("/", async (req, res) => {
    // heres where we need to get THE DATAS
    const allMusic = await getallMusic();
    if (allMusic[0]) {
        res.status(200)
            .json({ success: true, data: { payload: allMusic } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

module.exports = musics;