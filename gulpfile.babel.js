import { series, parallel } from 'gulp'

// Import tasks
import { cleanDist } from './_tasks/clean'
import { copyFavicon, copyFonts, copyAssets } from './_tasks/copy'
import { jsTask } from './_tasks/script'
import { cssTask } from './_tasks/css'
import { htmlTask } from './_tasks/html'
import { server } from './_tasks/server'

exports.default = series(
    cleanDist,
    parallel(copyFavicon, copyFonts, copyAssets),
    parallel(cssTask, jsTask),
    htmlTask,
    server
)