import turtle as Turtle
# Color codes refer to https://www.color-meanings.com/shades-of-black-color-names-html-hex-rgb-codes/

t = Turtle.Turtle()

x = 300.0
y = 300.0
a = 90.0

Turtle.bgcolor('black')

t.setx(-400.0)
t.sety(400.0)

gray = ['#494F55', '#666362', '#463E3F', '#36454F', '#555555', 
        '#696969', '#676767', '#808080', '#B6B6B4', '#504A4B',
        '#343434', '#414A4C', '#565051', '#595652', '#534B4F']
# Abbey, Ash Gray, Black Eel, Charcoal, Davy’s gray, 
# Dim gray, Granite, Gray, Gray Cloud, Gray wolf,
# Jet, Outer space, Vampire gray, Off Black, Liver,

for g in gray:
    t.fillcolor(g)
    d = x + y
    t.setx(x)
    t.sety(y)
    
    t.fillcolor(g) 
    t.begin_fill()
    for i in range(4):
        t.forward(d)
        t.right(90)
    t.end_fill()
    
    x -= 20.0
    y -= 20.0
    
Turtle.mainloop()