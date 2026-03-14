from PIL import Image, ImageDraw, ImageFont
import os

templates = [
"classic","modern","minimal","professional","creative","executive",
"elegant","compact","clean","corporate","stylish","gradient","bold",
"dark","light","atsbasic","atspro","timeline","sidebar","portfolio",
"designer","startup","tech","fresher","academic","clear","managerial",
"primeats","simple","specialist","twocolumn"
]

os.makedirs("templates", exist_ok=True)

width = 300
height = 400

for name in templates:

    img = Image.new("RGB",(width,height),(240,240,240))
    draw = ImageDraw.Draw(img)

    # header bar
    draw.rectangle((0,0,width,60), fill=(60,120,200))

    # fake resume lines
    for i in range(5):
        y = 100 + i*40
        draw.rectangle((40,y,260,y+10), fill=(200,200,200))

    # template name
    draw.text((80,30),name.upper(), fill="white")

    img.save(f"templates/{name}.png")

print("✅ 30 template images generated inside templates folder")