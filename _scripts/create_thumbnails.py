#!/usr/bin/env python3

import glob

import PIL.Image
import PIL.ImageOps

for img in glob.glob("img/artwork/*.jpg"):
    im = PIL.Image.open(img)
    im = PIL.ImageOps.exif_transpose(im)
    im.thumbnail((200, 200), PIL.Image.ANTIALIAS)
    im.save(img.replace("artwork/", "thumbnails/"), "JPEG")
