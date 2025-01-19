# [#Genuary2025][genuary2025]

[GENUARY][genuary2025] is an artificially generated month of time where we build code that makes beautiful things. It’s happening during the month of January 2025. You can use any language, framework or medium.

I started from Jan 4 (thanks to @n3xta for this idea of doing Genuary), and one project per day. For these projects, I mainly use p5.js.

Special Notes: This is a collection of the works by a completely newbie in generative art. Before doing these projects, I had zero ideas or basis of working with any generative art (if Python MatplotLib can count). Therefore, any advice is welcome and please feel free to contact me!

- [How to Use p5.js and these codes?](#how-to-use-p5js-and-these-codes)
- [JAN. 1.](#genuary2025-day-1)
- [JAN. 2.](#genuary2025-day-2)
- [JAN. 3.](#genuary2025-day-3)
- [JAN. 4.](#genuary2025-day-4)
- [JAN. 5.](#genuary2025-day-5)
- [JAN. 6.](#genuary2025-day-6)
- [JAN. 7.](#genuary2025-day-7)
- [JAN. 8.](#genuary2025-day-8)
- [JAN. 9.](#genuary2025-day-9)
- [JAN. 10.](#genuary2025-day-10)
- [JAN. 11.](#genuary2025-day-11)
- [JAN. 12.](#genuary2025-day-12)
- [JAN. 13.](#genuary2025-day-13)
- [JAN. 14.](#genuary2025-day-14)
- [JAN. 15.](#genuary2025-day-15)
- [JAN. 16.](#genuary2025-day-16)
- [JAN. 17.](#genuary2025-day-17)
- [JAN. 18.](#genuary2025-day-18)
- [JAN. 19.](#genuary2025-day-19)
- [JAN. 20.](#genuary2025-day-20)
- [JAN. 21.](#genuary2025-day-21)
- [JAN. 22.](#genuary2025-day-22)
- [JAN. 23.](#genuary2025-day-23)
- [JAN. 24.](#genuary2025-day-24)
- [JAN. 25.](#genuary2025-day-25)
- [JAN. 26.](#genuary2025-day-26)
- [JAN. 27.](#genuary2025-day-27)
- [JAN. 28.](#genuary2025-day-28)
- [JAN. 29.](#genuary2025-day-29)
- [JAN. 30.](#genuary2025-day-30)
- [JAN. 31.](#genuary2025-day-31)
- [Acknowledgements](#acknowledgments)

## How to Use p5.js and these codes?

For p5.js, you can visit its [website][p5] to set up your environment. You can use either website p5.js editor or Visual Studio Code p5.js plugin-based editor. I prefer to use the later one./

- p5.js online editor: [link][p5-editor]
- Visual Studio Code: [p5.js plugin][p5-plugin]. After installing the plugin to your workspace, search (Ctrl + Shift + P) "Create p5.js project" to generate a p5.js template to your folder.

After finishing your code or you want to preview the canvas, install VSCode Live Server plugin, and right click the index.html of each project. You can open the index.html with live server to preview the work.

## \#Genuary2025 Day 1

Vertical or horizontal lines only. (credit: [Stranger in the Q](https://x.com/stranger_intheq))

TBD

## \#Genuary2025 Day 2

Layers upon layers upon layers. (credit: [Monokai](https://monokai.com/))

TBD

## \#Genuary2025 Day 3

Exactly 42 lines of code. (credit: [Roni Kaufman](https://ronikaufman.github.io/))

TBD

## \#Genuary2025 Day 4

Black on black. (credit: [Stranger in the Q](https://x.com/stranger_intheq))

![Genuary4](/pics/jan04.jpg)

The picture may be a bit dark, so you would want to turn your device to max lightness. Anyway, the general idea is to put different black rectangles with dark blue strokes on each other, rotating them and adjusting their sizes, so that it gives a sense of "black on black".

## \#Genuary2025 Day 5

Isometric Art (No vanishing points). (credit: [P1xelboy](https://linktr.ee/p1x3lboy))

The initial general idea is to generate a 3-D shape stuff and make it isometric, so after some initial try it became this:

![Genuary5-1](/pics/jan05-1.jpg)

Then I found that I would need a 120-degree different between the three axises, so I did some adjustments to make it look better and more isometric:

![Genuary5-2](/pics/jan05-2.jpg)

It looks much better, right? I made this with infinite calculations of geometry, and I figured out that it could be much cooler, so I eliminated part of the lines (brute force calculation, with calculators, fair enough):

![Genuary5-3](/pics/jan05-3.jpg)

Still a bit weird, so I did more adjustment to make the final version of it, a very cool grass block, in isometric:

![Genuary5-4](/pics/jan05-4.jpg)

## \#Genuary2025 Day 6

Make a landscape using only [primitive shapes][primitive]. (credit: [Jonathan Barbeau](https://jbarbeau.art/))

To be honest, I did not have some ideas about what type of landscape I wanted to create, so generally, I just created a mountain-backgrounded city landscape (or something) that looks...kind of simple.

![Genuary6](/pics/jan06.gif)

However, in the process of trying p5.js, I accidentally made some animation that looked like snow. Therefore, the landscape looks like it is a snowy day and I added some rectangles to make it even look more real, with "snow" on every building's top.

The landscape uses 9 rectangles, 10 triangles, 158 circles, and 2 lines in total.

Note: There is an easter egg in this landscape. Every competitive programmer will immediately know what that is!

## \#Genuary2025 Day 7

Use software that is not intended to create art or images. (credit: [Camille Roux](https://art.camilleroux.com/))

Since I often use Microsoft PowerPoint as my personal Photoshop, this software immediately jumped into my mind.

The first image goes with several circles generated in PowerPoint, with glowing effect, which is originally supported by the software.

![Genuary7-1](/pics/jan07-1.jpg)

The second image is also generated by PowerPoint. Different from the first one, it is generated using background.

![Genuary7-2](/pics/jan07-2.jpg)

After generating two images using PPT, I found that also possible to draw using Microsoft Excel, so I drew two strangle pictures with Ohio State elements.

![Genuary7-3](/pics/jan07-3.jpg)

![Genuary7-4](/pics/jan07-4.jpg)

However, I felt it would look better if I created art using terminal. If I have time later I would give a try, inspired by someone.

## \#Genuary2025 Day 8

Draw one million of something. (credit: [Piter Pasma](https://twitter.com/piterpasma))

Since one million is the square of one thousand, the idea is simple, one million pixels with random color. (Actually, it looks like the effect of television visual snow syndrome (VSS))

![Genuary8](/pics/jan08.gif)

## \#Genuary2025 Day 9

The textile design patterns of public transport seating. (credit: [Piter Pasma](https://twitter.com/piterpasma))

Basic idea: some blue background and some random lines and shapes with closing colors to blue...okay it looks awful to be honest.

![Genuary9](/pics/jan09.jpg)

It looks even worse to my strange idea of pure color squares...exactly what metros/subways in China look like.

[p1-9: Suzhou Rail Transit Line 1, Line 2, Line 3, Line 4, Line 5, Line 6, Line 7, Line 8, Line 11]

![Genuary9-1](/pics/jan09-1.jpg)

Not gonna lie this is a genius idea :)

## \#Genuary2025 Day 10

You can only use TAU in your code, no other number allowed.
TAU = 2 * pi = 6.2831853… (credit: [Darien Brito](https://darienbrito.com/))

![Genuary10-1](/pics/jan10-1.jpg)

![Genuary10-2](/pics/jan10-2.jpg)

For some reason the generate speed is extremely slow, probably just 0.03 - 0.05 FPS (I am serious). The algorithm has some space to optimize.

## \#Genuary2025 Day 11

Impossible day - Try to do something that feels impossible for you to do. Maybe it is impossible. Maybe it’s too ambitious. Maybe it’s something you know nothing about how to accomplish. (credit: [Rachel Ehrlich (Joy of Randomness)](https://genuary.art/prompts#) and the [Recurse Center](https://www.recurse.com/))

The heaviest workload so far, and I am trying to do something that looks impossible for me. I created an audio visualizer with effects and lyrics, which looks like a player that plays specifically One Last Kiss.

The audio visualizer itself is based on the waveform analyzer and vertex. I referred to this [video][day11-vid] for the creation of the visualizer. Besides, I also created the effect of particles and playtime at bottom right.

The most "impossible" part is to link every sentence of lyrics to the correct time. I used Audacity to get the exact time of each lyrics to show. That was a long time correcting everything...and it looks pretty!

![Genuary11-1](/pics/jan11-1.gif)

![Genuary11-2](/pics/jan11-2.gif)

The complete video is on Youtube, the link is https://youtu.be/cphuiKveoK8. Trust me, it looks good!

## \#Genuary2025 Day 12

Subdivision (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

The general idea is to subdivide rectangles (especially squares) by half "infinitely". To make this more interesting, I added a third dimension to make this a 3-D subdivision.

![Genuary12](/pics/Jan12.gif)

This resulting cube reminds me of a problem I have seen in ICPC NAQ 2024. (Problem J Menger Sponge) Both are dividing rectangles on different surfaces of a cube.

Also, this is my first to try creating some 3-D geometries using p5.js, and it seems to be a nice try I have to say.

## \#Genuary2025 Day 13

Triangles and nothing else. (credit: [Heeey](https://heeey.art/))

A total of 136 triangles are drawn.

There are two color modes to switch between, black & white and random color. Press the SHIFT key to switch between them. In random color mode, press the ENTER key to perform another color randomization. The shape of the triangle can be adjusted according to the direction of movement when the mouse is pressed. The maximum single-direction offset in the y direction is the height of a single triangle. There is no limit to the offset in the x direction.

Random Color Mode:

![Genuary13-1](/pics/jan13-1.jpg)

Black & White Mode:

![Genuary13-2](/pics/jan13-2.jpg)

The triangles after offsets in both directions:

![Genuary13-3](/pics/jan13-3.jpg)

![Genuary13-4](/pics/jan13-4.jpg)

Changing between different random colors:

![Genuary13-5](/pics/jan13-5.gif)

Changing between different color modes and adjust the shape of the triangles:

![Genuary13-6](/pics/jan13-6.gif)

## \#Genuary2025 Day 14

Pure black and white. No gray. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

> Part 1

Added the function of dragging the mouse to adjust the threshold value for basic color image to pure black and white image conversion.

![Genuary14-1-1](/pics/jan14-1-1.jpg)

![Genuary14-1-2](/pics/jan14-1-2.jpg)

![Genuary14-1-3](/pics/jan14-1-3.jpg)

![Genuary14-1-4](/pics/jan14-1-4.jpg)

![Genuary14-1-5](/pics/jan14-1-5.jpg)

![Genuary14-1-6](/pics/jan14-1-6.jpg)

![Genuary14-1-7](/pics/jan14-1-7.jpg)

![Genuary14-1-8](/pics/jan14-1-8.jpg)

![Genuary14-1-9](/pics/jan14-1-9.gif)

Because this idea is too simple and easy, I decided to create another part to this prompt.

> Part 2

Some random shapes combining using the blend mode DIFFERENCE, all pure black or white. It is guaranteed that there are at least some different shapes in each of the four quadrants, and random amounts of shapes generally.

![Genuary14-2-1](/pics/jan14-2-1.jpg)

![Genuary14-2-2](/pics/jan14-2-2.jpg)

![Genuary14-2-3](/pics/jan14-2-3.jpg)

## \#Genuary2025 Day 15

Design a rug. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

Inspired by Pic-1, the hexagonal color blocks are unevenly distributed, the main color is red, and black, white, and gray blocks are used as auxiliary colors. Different quadrants are randomly filled with different weights. Unfortunately, it is not easy to simulate the texture of a carpet, but it looks a bit like a mouse pad xd.

![Genuary15-1](/pics/jan15-1.jpg)

![Genuary15-2](/pics/jan15-2.jpg)

![Genuary15-3](/pics/jan15-3.jpg)

![Genuary15-4](/pics/jan15-4.jpg)

## \#Genuary2025 Day 16

Generative palette. (credit: [Stranger in the Q](https://x.com/stranger_intheq))

Randomly generate dozens of highly transparent rectangles. The overlapping effect is very similar to palette. 

The blend mode of p1-5 is HARD_LIGHT, and the blend mode of p6-9 is OVERLAY.

![Genuary-16-1](/pics/jan16-1.jpg)

![Genuary-16-1](/pics/jan16-2.jpg)

![Genuary-16-1](/pics/jan16-3.jpg)

![Genuary-16-1](/pics/jan16-4.jpg)

![Genuary-16-1](/pics/jan16-5.jpg)

![Genuary-16-1](/pics/jan16-6.jpg)

![Genuary-16-1](/pics/jan16-7.jpg)

![Genuary-16-1](/pics/jan16-8.jpg)

![Genuary-16-1](/pics/jan16-9.jpg)

## \#Genuary2025 Day 17

What happens if pi=4? (credit: [Roni Kaufman](https://ronikaufman.github.io/))

Basic idea is that when pi=4, the circle under such a situation will look like a diamond from our Euclidean space. The inspiration for the animation is water ripple, expanding (and disappearing) from inner to outer.

![Genuary-17-1](/pics/jan17-1.jpg)

![Genuary-17-2](/pics/jan17-2.jpg)

![Genuary-17-3](/pics/jan17-3.gif)

Note: I used some AI to assist my calculation of the coordinate of each points of the diamonds.

## \#Genuary2025 Day 18

What does wind look like? (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

Inspired by China CCTV classic program "Big Pinwheel". [Orange, Yellow, Blue, Green] I combined the colors of the pinwheel and classic Netherland windmill bases to describe what wind looks like from an objective perspective.

![Genuary-18](/pics/jan18.gif)

## \#Genuary2025 Day 19

Op Art. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

I don't have good ideas today, so everything I do is to add some random parameters into the process of drawing shapes and the colors of their strokes.

![Genuary-19](/pics/jan19.gif)

## \#Genuary2025 Day 20

Generative Architecture. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 21

Create a collision detection system (no libraries allowed). (credit: [Darien Brito](https://darienbrito.com/))

TBD

## \#Genuary2025 Day 22

Gradients only. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 23

Inspired by brutalism. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/), [Roni Kaufman](https://ronikaufman.github.io/))

TBD

## \#Genuary2025 Day 24

Geometric art - pick either a circle, rectangle, or triangle and use only that geometric shape. (credit: [Bruce Holmer](https://www.instagram.com/bruceholmer/))

TBD

## \#Genuary2025 Day 25

One line that may or may not intersect itself (credit: [Bruce Holmer](https://www.instagram.com/bruceholmer/), [Chris Barber (code_rgb)](https://genuary.art/prompts#), [Heeey](https://heeey.art/), [Monokai](https://monokai.com/))

TBD

## \#Genuary2025 Day 26

Symmetry. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 27

Make something interesting with no randomness or noise or trig. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 28

Infinite Scroll. (credit: [Sophia (fractal kitty)](https://www.fractalkitty.com/))

TBD

## \#Genuary2025 Day 29

Grid-based graphic design. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 30

Abstract map. \
Not to be confused with [AbstractMap](https://docs.oracle.com/javase/8/docs/api/java/util/AbstractMap.html). (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## \#Genuary2025 Day 31

Pixel sorting. \
You can sort pixels by weight, size, age, etc. (credit: [Melissa Wiederrecht](https://melissawiederrecht.com/))

TBD

## Acknowledgments

- Special thanks to [GENUARY 2025][genuary2025] for making this project possible.
- Motivated by [@n3xta](https://github.com/n3xta).
- Huge appreciation to Genuary prompt contributors for their prompt contributions.
- Gratitude to the [p5.js](p5) for their amazing generative tools.

[genuary2025]: https://genuary.art/
[p5]: https://p5js.org/
[p5-editor]: https://editor.p5js.org/
[p5-plugin]: https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode/
[primitive]: https://en.wikipedia.org/wiki/Geometric_primitive
[day11-vid]: https://www.youtube.com/watch?v=uk96O7N1Yo0&t=793s&ab_channel=ColorfulCoding