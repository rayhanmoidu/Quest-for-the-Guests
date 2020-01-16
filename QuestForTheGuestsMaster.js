//todo: add the rest of the forest with all riddles
//this uses drawing, coloring, variables, animation, text, functions, TONS of if statements, to be continued
//don't forget: make function for mountains and beach, finish game, make leaving the screen = gameover
//make functions for answering at all places!
//change some questions
var timer5 = 1;
var timer7 = 1;
var x = 255;
var y = 0;
var leaferX = 400;
var piceX = 400;
var timer4 = 1;
var timer3 = 1;
var pice = getImage("avatars/piceratops-ultimate");
var babyWinston = getImage("creatures/BabyWinston");
var leafer = getImage("avatars/leafers-ultimate");
var Winston = getImage("creatures/Winston");
var hopper = getImage("creatures/Hopper-Happy");
var femaleRobot = getImage("avatars/robot_female_1");
var oldSpice = getImage("avatars/old-spice-man");
var MrPants = getImage("avatars/mr-pants");
var OJ = getImage("avatars/orange-juice-squid");
var footprints = getImage("avatars/leaf-orange");
var OhNoes = getImage("creatures/OhNoes");
var trees = getImage("cute/TreeTall");
var timer = 1;
var timer2 = 1;
var peopleNotifier = 0;
var gamestatus = 1;
var MrPantsX = 12;
var SunOrMoon = 1;
var CloudCounter = 1;
var MrPantsY = 273;
var teller = 0;

//function for desert 
var desert = function(bc1, bc2, bc3, fc1, fc2, fc3, fc4, fc5, fc6, cx, cy, cx1, cy1, sx, sy) {
    background(bc1, bc2, bc3);
    fill(fc1, fc2, fc3);
    noStroke();
    rect(0, 175, 400, 400);
    fill(fc4, fc5, fc6);
    bezier(52, 250, 246, 125, 161, 115, 423, 250);
    bezier(-225, 281, 18, 330, -95, 77, 247, 281);
    bezier(153, 300, 351, 324, 385, 92, 500, 300);
    line(100, 100, 200, 200);
    fill(138, 115, 115);
    rect(0, 320, 400, 37);
    fill(209, 198, 198);
    rect(15, 19, 368, 39);
    fill(fc1, fc2, fc3);
    rect(155, 294, 50, 10);
    fill(255, 255, 255);
    ellipse(cx, cy, 70, 48);
    ellipse(cx + 1, cy + 12, 102, 40);
    ellipse(cx1, cy1, 52, 34); 
    ellipse(cx1 + 1, cy1 + 12, 78, 32);
    fill(255, 255, 0);
    ellipse(sx, sy, 50, 50);
};

//fucntions for answers
var topleft = function(x) {
    if (mouseIsPressed && mouseX > 27 && mouseY > 120 && mouseX < 197 && mouseY < 174) {
        gamestatus = x;
    }
};

var topright = function(x) {
    if (mouseIsPressed && mouseX > 203 && mouseY > 120 && mouseX < 373 && mouseY < 174) {
        gamestatus = x;
    }
};

var bottomright = function(x) {
    if (mouseIsPressed && mouseX > 203 && mouseY > 180 && mouseX < 373 && mouseY < 234) {
        gamestatus = x;
    }
};

var bottomleft = function(x) {
    if (mouseIsPressed && mouseX > 27 && mouseY > 180 && mouseX < 197 && mouseY < 234) {
        gamestatus = x;
    }
};

//function for question board
var question = function(qt, qx, qy, ts, ts2, aq, ax, ay, bq, bx, by, cq, cx, cy, dq, dx, dy, q2t, q2x, q2y) {
    background(161, 104, 39);
    textSize(ts);
    fill(255, 255, 255);
    text(qt, qx, qy);
    //optional
    text(q2t, q2x, q2y);
    noStroke();
    textSize(ts2);
    fill(255, 255, 255);
    //top left
    rect(27, 120, 170, 54);
    //bottom right
    rect(203, 180, 170, 54);
    //bottom left
    rect(27, 180, 170, 54);
    //top right
    rect(203, 120, 170, 54);
    fill(0, 0, 0);
    text(aq, ax, ay);
    text(bq, bx, by);
    text(cq, cx, cy);
    text(dq, dx, dy);
    image(OhNoes, 140, 256);
};

//function for keys
var keys = function() {
if (keyIsPressed && keyCode === LEFT) {
            MrPantsX -= 2;
    }
    if (keyIsPressed && keyCode === RIGHT) {
        MrPantsX += 2;
    }
};

//function for billboard
var billboard = function() {
    fill(0, 0, 0);
    rect(185, 241, 5, 90);
    rect(75, 241, 5, 90);
    fill(176, 92, 92);
    rect(58, 145, 150, 100);
    fill(0, 0, 0);
    textSize(14);
    text("CONGRATULATIONS", 64, 172);
    text("TO ALL CODING", 78, 193);
    textSize(18);
    text("STUDENTS!", 80, 219);
};

//function for building
var building = function() {
    fill(74, 49, 17);
    rect(270, 100, 130, 225);
    fill(251, 255, 0);
    rect(294, 130, 30, 40);
    rect(356, 130, 30, 40);
    rect(294, 192, 30, 40);
    rect(356, 192, 30, 40);
    fill(214, 191, 191);
    rect(345, 275, 30, 50);
    fill(0, 0, 0);
    ellipse(367, 303, 4, 4);
};

//function for background t: tree, bc: background color, fc: fill color, c: cloud, s: sun/moon
var forest = function(t1x, t1y, t2x, t2y, t3x, t3y, bc1, bc2, bc3, fc1, fc2, fc3, cx, cy, cx1, cy1, sx, sy) {
    background(bc1, bc2, bc3);
    if (CloudCounter === 1) {
         fill(255, 255, 255);
        ellipse(cx, cy, 70, 48);
        ellipse(cx + 1, cy + 12, 102, 40);
        ellipse(cx1, cy1, 52, 34);
        ellipse(cx1 + 1, cy1 + 12, 78, 32);
    }
    
    if (SunOrMoon === 1) {
        fill(255, 255, 0);
        ellipse(sx, sy, 50, 50);
    }
    
    if (SunOrMoon === 2) {
        fill(255, 255, 255);
        ellipse(sx, sy, 50, 50);
    }
    noStroke();
    fill(fc1, fc2, fc3);
    rect(0, 175, 400, 400);
    image(trees, t1x, t1y);
    image(trees, t2x, t2y);
    image(trees, t3x, t3y);
    

};
//function for question sign
var sign = function(x, y) {
    fill(0, 0, 0);
    rect(x + 21, y + 15, 5, 48);
    fill(161, 104, 39);
    rect(x - 5, y + 7, 54, 30);
    image(OhNoes, x + 7, y + 7, 30, 30);
};

//function for foot
var foot = function(x, y) {
    fill(130, 90, 44);
    ellipse(x - 3, y, 16, 15);
    rect(x - 14, y - 5, 7, 10);
    ellipse(x + -22, y + 0, 10, 11);
    rect(x - 22, y + -5, 6, 9);
};

//function for trail of footsteps
var footsteps = function(x, y) {
    foot(x, y);
    foot(x + 60, y);
    foot(x + 120, y);
    foot(x + 180, y);
    foot(x + 240, y);
    foot(x + 30, y + 18);
    foot(x + 90, y + 18);
    foot(x + 150, y + 18);
    foot(x + 210, y + 18);
    foot(x + 270, y + 18);
};

//function for cake
var cake = function(cakelayerX, cakelayerY) {
fill(255, 255, 255);
rect(cakelayerX - 29, cakelayerY - 23, 58, 42);
ellipse(cakelayerX, cakelayerY + 17, 59, 15);
fill(219, 210, 219);
ellipse(cakelayerX, cakelayerY - 21, 59, 15);
fill(255, 255, 255);
rect(cakelayerX - 23, cakelayerY - 55, 44, 29);
ellipse(cakelayerX - 1, cakelayerY + -25, 45, 15);
fill(219, 210, 219);
ellipse(cakelayerX - 1, cakelayerY - 54, 45, 15);
fill(255, 0, 0);
ellipse(199, 144, 10, 10);
    
};
    
//function for picture frame
var pictureFrame = function(pictureX, pictureY) {
    fill(255, 140, 0);
    rect(pictureX, pictureY, 75, 75);
    fill(0, 0, 0);
    rect(pictureX + 5, pictureY + 5, 65, 65);
};
//function for balloons
var balloons = function(baloonX, baloonY) {
    noStroke();
    fill(92, 92, 204);
    ellipse(baloonX, baloonY, 60, 80);

};

var draw = function() { 
    noStroke();
    background(99, 199, 119);
    //floor
    fill(30, 48, 36);
    rect(0, 325, 400, 75);
    //pictures
    pictureFrame(225, 77);
    pictureFrame(97, 77);
    image(babyWinston, 111, 92, 50, 50);
    image(Winston, 236, 90, 50, 50);
    //play
    fill(199, 189, 189);
    rect(308, 19, 78, 39);
    rect(15, 19, 285, 39);
    fill(0, 0, 0);
    textSize(21);
    text("QUEST FOR THE GUEST(S)", 23, 46);
    text("PLAY", 320, 46);
    //balloons
    balloons(39, 140);
    balloons(361, 165);
    balloons(97, 163);
    balloons(302, 152);
    strokeWeight(2);
    stroke(0, 0, 0);
    line(98, 204, 57, 343);
    line(40, 181, 57, 342);
    line(363, 206, 332, 344);
    line(303, 193, 332, 344);
    //cakestand
    noStroke();
    fill(135, 138, 148);
    ellipse(200, 220, 81, 15);
    rect(188, 226, 24, 35);
    rect(191, 258, 18, 29);
    rect(194, 282, 12, 29);
    rect(197, 308, 6, 29);
    ellipse(200, 340, 49, 9);
    //cake
    cake(200, 200);
    //guests
    image(MrPants, MrPantsX, 273, 100, 100);
    if (peopleNotifier === 0) {
        image(hopper, 229, 253, 102, 98);
        image(femaleRobot, 89, 249, 99, 99);
        image(OJ, 302, 278, 100, 100);
        image(oldSpice, 152, 282, 100, 100);
    
    }
    
    if (mouseIsPressed && mouseX > 308 && mouseX < 386 && mouseY > 19 && mouseY < 58) {
        gamestatus = 2;
    }
    
    if (gamestatus === 2) {
        //house1
        fill(199, 189, 189);
        rect(15, 19, 368, 39);
        fill(0, 0, 0);
        textSize(10);
        //text(timer, 351, 19);
        timer += 1;
        textSize(17);
        if (timer < 150) {
            text("One day, you and your friends are celebrating", 30, 43);
        }
        if (timer > 150 && timer < 300) {
            text("The end of summer with a huge party.", 65, 43);
        }
        if (timer > 300 && timer < 450) {
            text("You're all having a grand time until...", 71, 43);
        }
        if (timer > 450) {
            gamestatus = 3;
        }
        fill(209, 198, 198);
        rect(360, 388, 40, 12);
        fill(0, 0, 0);
        textSize(12);
        text("SKIP", 367, 399);
        if (mouseIsPressed && mouseX > 360 && mouseY > 388) {
            gamestatus = 6;
        }
    }
    
    if (gamestatus === 3) {
        //lightsoff
        background(0, 0, 0);
        fill(255, 255, 255);
        textSize(10);
        //text(timer, 351, 19);
        timer += 1;
        fill(199, 189, 189);
        rect(15, 19, 368, 39);
        textSize(17);
        fill(0, 0, 0);
        if (timer > 450 && timer < 525) {
            textSize(27);
            text("BOOM!", 163, 48);
        }
        if (timer > 525 && timer < 675) {
            text("All of the lights turn off!", 121, 45);
        }
        if (timer > 675 && timer < 800) {
            textSize(19);
            text("Due to the sudden loss of sight", 66, 44);
        }
        if (timer > 800 && timer < 925) {
            textSize(19);
            text("Your guests start to panic.", 92, 44);
        }
        if (timer > 925 && timer < 1150) {
            textSize(16);
            text("This is NOT how you wanted your party to roll out.", 28, 43);
        }
        if (timer > 1150 && timer < 1325) {
            text("Eventually, the screams begin to fade away...", 33, 43);
        }
        if (timer > 1325 && timer < 1500) {
            text("And the lights flicker back on", 95, 43);
        }
        if (timer > 1500) {
            gamestatus = 4;
        }
        fill(209, 198, 198);
        rect(360, 388, 40, 12);
        fill(0, 0, 0);
        textSize(12);
        text("SKIP", 367, 399);
        if (mouseIsPressed && mouseX > 360 && mouseY > 388) {
            gamestatus = 6;
        }
    }
    
    if (gamestatus === 4) {
        //house2
        peopleNotifier = 1;
        noStroke();
        background(99, 199, 119);
        fill(0, 0, 0);
        textSize(10);
        //text(timer, 351, 19);
        timer += 1;
        //floor
        fill(30, 48, 36);
        rect(0, 325, 400, 75);
        //pictures
        pictureFrame(225, 77);
        pictureFrame(97, 77);
        image(babyWinston, 111, 92, 50, 50);
        image(Winston, 236, 90, 50, 50);
        //balloons
        balloons(39, 140);
        balloons(361, 165);
        balloons(97, 163);
        balloons(302, 152);
        strokeWeight(2);
        stroke(0, 0, 0);
        line(98, 204, 57, 343);
        line(40, 181, 57, 342);
        line(363, 206, 332, 344);
        line(303, 193, 332, 344);
        //cakestand
        noStroke();
        fill(135, 138, 148);
        ellipse(200, 220, 81, 15);
        rect(188, 226, 24, 35);
        rect(191, 258, 18, 29);
        rect(194, 282, 12, 29);
        rect(197, 308, 6, 29);
        ellipse(200, 340, 49, 9);
        //cake
        cake(200, 200);
        //textbar
        fill(199, 189, 189);
        rect(15, 19, 368, 39);
        //guests
        image(MrPants, MrPantsX, 273, 100, 100);
        if (peopleNotifier === 0) {
            image(hopper, 229, 253, 102, 98);
            image(femaleRobot, 89, 249, 99, 99);
            image(OJ, 302, 278, 100, 100);
            image(oldSpice, 152, 282, 100, 100);
        
        }
        //footprints
        foot(146, 358);
        foot(217, 358);
        foot(295, 358);
        foot(372, 358);
        foot(334, 376);
        foot(254, 376);
        foot(180, 376);
        foot(413, 376);
        image(MrPants, MrPantsX, MrPantsY, 100, 100);
        
        textSize(17);
        fill(0, 0, 0);
        if (timer > 1500 && timer < 1700) {
            text("Oh no! All of your guests have dissapeared!", 40, 43);
        }
        if (timer > 1700 && timer < 1900) {
            text("Luckily, whoever took them left some clues...", 36, 43);
        }
        if (timer > 1900 && timer < 2100) {
            textSize(15);
            text("Because you're a good host, you must try to find them", 26, 43);
        }
        if (timer > 2100 && timer < 2300) {
            text("So, you embark on a quest, to find your guest(s)!", 20, 43);
        }
        if (timer > 2300) {
            text("Use right and left keys to follow the footsteps", 37, 43);
        }
        if (timer > 2100) {
            keys();
        }
        if (MrPantsX > 400) {
            gamestatus = 5;
        }
        if (MrPantsX < -100) {
            gamestatus = 10;
        }
        fill(209, 198, 198);
        rect(360, 388, 40, 12);
        fill(0, 0, 0);
        textSize(12);
        text("SKIP", 367, 399);
        if (mouseIsPressed && mouseX > 360 && mouseY > 388) {
            gamestatus = 6;
        }
    }
    
    if (gamestatus === 5) {
        //outside house
        background(21, 41, 122);
        noStroke();
        fill(199, 189, 189);
        rect(15, 19, 368, 39);
        building();
        fill(125, 118, 118);
        rect(0, 325, 400, 75);
        fill(213, 0, 255);
        ellipse(300, 367, 187, 42);
        fill(0, 0, 0);
        textSize(18);
        text("The footsteps lead to a portal... follow them!", 24, 44);
        footsteps(46, 358);
        billboard();
        image(MrPants, MrPantsX, MrPantsY, 100, 100);
        if (MrPantsX > 400) {
            MrPantsX = -100;
        }
        if(MrPantsY === 273) {
            keys();
        }
        if (MrPantsX > 248 && MrPantsX < 380) {
        MrPantsY -= 10;
        }
        if (MrPantsY < -100) {
            gamestatus = 6;
        }
    }
    
    if (gamestatus === 6) {
        //info forest
        forest(143, 112, 27, 142, 264, 142, 25, 146, 232, 22, 179, 30, 96, 90, 254, 99, 176, 100);
        fill(138, 115, 115);
        rect(0, 320, 400, 37);
        fill(209, 198, 198);
        rect(15, 19, 368, 39);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        fill(0, 0, 0);
        if (MrPantsY < 270) {
            MrPantsY += 10;
            MrPantsX = 12;
        }
        textSize(15);
        timer2 += 1;
        //text(timer2, 350, 17);
        if (timer2 > 0 && timer2 < 250) {
            text("Hm... It seems like the portal brought you to some forest", 18, 43);
        }
        if (timer2 > 250 && timer2 < 500) {
            text("Maybe that sign over there will give you more clues.", 32, 43);
        }
        if (timer2 > 500) {
            text("Use right and left keys to follow the footsteps", 55, 43);
        }
        if (timer2 > 250) {
            keys();
        }
        
        if (MrPantsX > 330 && MrPantsX < 390) {
            gamestatus = 9;
        }
        
    }
    
    if (gamestatus === 9) {
        //info page
        background(161, 104, 39);
        fill(255, 248, 166);
        textSize(23);
        text("Welcome to the Land of Riddles", 37, 72);
        textSize(15);
        fill(255, 255, 255);
        text("Deep in these depths lies whatever you may be seeking.", 16, 100);
        text("Whether it be fame or riches, these lands contain it all.", 20, 120);
        text("To obtain your desired prize, you must walk the entire", 25, 140);
        text("path; unfortunately, it is not so simple. Along the road,", 26, 160);
        text("there are dozens of questions and riddles that you must", 19, 180);
        text("successfully answer in order to proceed. Believe me, they", 14, 200);
        text("are not easy. If you manage to traverse through all three", 18, 220);
        text("lands, (the forest, the desert, and the mountains)", 43, 240);
        text("you may acquire your reward. However, if you fail to do,", 20, 260);
        text("you shall meet your doom.", 117, 280);
        text("Alas, it is time to start your quest, so begin!", 58, 306);
        noStroke();
        fill(255, 248, 166);
        rect(94, 319, 213, 34);
        fill(0, 0, 0);
        text("Commence", 159, 341);
        if (mouseIsPressed && mouseX > 94 && mouseY > 319 && mouseX < 94 + 213 && mouseY < 319 + 34) {
            gamestatus = 7;
        }
    }

    if (gamestatus === 7) {
        //forest 1
        forest(161, 141, 50, 110, 257, 155, 31, 106, 225, 25, 159, 43, 102, 97, 261, 103, 180, 109);
        if (MrPantsX > 329) {
            MrPantsX = 0;
        }
        fill(138, 115, 115);
        rect(0, 320, 400, 37);
        fill(209, 198, 198);
        rect(15, 19, 368, 39);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        keys();
        textSize(17);
        fill(0, 0, 0);
        text("Hey! Looks like that post marks the first riddle!", 29, 43);
        if (MrPantsX > 320 && MrPantsX < 325) {
            gamestatus = 8;
        }
    }
    
    if (gamestatus === 8) {
        //question 1
        question("Alice's mom has 4 kids:", 89, 55, 21, 17, "Nono", 268, 153, "John", 268, 213, "Steven", 86, 153, "Alice", 91, 213, "Nana, Nunu, Nini and ???", 82, 85);
        if (mouseIsPressed) {
            gamestatus = 12;
        } 
        bottomleft(11);
        
    }
    
    //corect screen
    if (gamestatus === 11) {
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 13;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    //gameover screen
    if (gamestatus === 12) {
        background(0, 0, 0);
        fill(255, 255, 255);
        textSize(40);
        text("GAME OVER", 76, 67);
        textSize(18);
        fill(212, 130, 130);
        text("YOU FAILED TO RETRIEVE YOUR FRIENDS!", 13, 99);
        fill(0, 255, 111);
        textSize(23);
        text("CLICK RESTART TO PLAY AGAIN", 18, 360);
        image(MrPants, 16, 157, 150, 150);
        noStroke();
        fill(255, 255, 255);
        ellipse(292, 160, 86, 83);
        ellipse(342, 181, 83, 77);
        ellipse(250, 181, 86, 84);
        ellipse(301, 198, 86, 92);
        ellipse(266, 191, 86, 92);
        ellipse(328, 191, 86, 92);
        ellipse(266, 169, 86, 92);
        ellipse(328, 171, 86, 92);
        ellipse(194, 202, 22, 22);
        ellipse(166, 209, 15, 15);
        ellipse(144, 216, 8, 8);
        image(hopper, 273, 180, 50, 50);
        image(OJ, 314, 145, 50, 50);
        image(oldSpice, 267, 123, 50, 50);
        image(femaleRobot, 224, 157, 50, 50);
    }
    
    if (gamestatus === 13) {
        //forest 2
        forest(161, 124, 74, 151, 337, 146, 20, 67, 203, 25, 139, 12, 145, 107, 279, 126, 208, 125);
        fill(138, 115, 115);
        rect(0, 320, 400, 37);
        fill(209, 198, 198);
        rect(15, 19, 368, 39);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        keys();
        textSize(17);
        fill(0, 0, 0);
        text("Congratulations! There's riddle number two!", 41, 43);
        if (MrPantsX > 320) {
            question("There were 42 cats and all but", 65, 61, 20, 14, "24", 280, 152, "42", 280, 213, "66", 106, 152, "18", 106, 213, "24 died... how many survived?", 68, 85);
        if (mouseIsPressed) {
            gamestatus = 12;
        } 
            topright(14);
        }
        
    }
    
    if (gamestatus === 14) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 15;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 15) {
        //forest 3
        forest(8, 124, 97, 113, 318, 153, 35, 43, 173, 25, 109, -100, 186, 122, 308, 135, 253, 133);
        fill(138, 115, 115);
        rect(0, 320, 400, 37);
        fill(209, 198, 198);
        rect(15, 19, 368, 39);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        keys();
        textSize(17);
        fill(0, 0, 0);
        text("Keep going!", 165, 43);
        if (MrPantsX > 320) {
            question("Who was the very first", 102, 61, 20, 14, "Not Applicable", 241, 152, "Pierre Trudeau", 242, 213, "John A. McDonald", 53, 151, "Stephen Harper", 62, 212, "president of Canada?", 106, 85);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            topright(16);
        }
        
    }
    
    if (gamestatus === 16) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 17;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 17) {
        MrPantsX = 0;
        forest(-15, 95, 47, 150, 324, 110, 35, -8, 132, -49, 73, -129, 227, 148, 330, 179, 284, 174);
        fill(255, 255, 255);
        timer4 += 1;
        fill(138, 115, 115);
        rect(0, 320, 400, 37);
        fill(209, 198, 198);
        rect(15, 19, 368, 39);
        fill(0, 0, 0);
        textSize(17);
        text("Hm?", 189, 44);
        footsteps(41, 331);
        footsteps(161, 331);
        
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        image(leafer, leaferX, 222);
        if (timer4 > 200) {
            leaferX -= 2;
        }
        if (leaferX < 157) {
            leaferX += 2;
        }
        
        fill(255, 255, 255);
        if (timer4 > 325) {
            ellipse(309, 228, 131, 59);
            triangle(289, 243, 318, 200, 240, 264);
        }
        
        textSize(23);
        fill(0, 0, 0);
        if (timer4 > 325 && timer4 < 450) {
            text("...", 300, 229);
        }
        textSize(12);
        if (timer4 > 450 && timer4 < 700) {
            text("Congratulations on", 257, 224);
            text("making it this far", 264, 238);
        }
        if (timer4 > 700 && timer4 < 900) {
            text("If you manage to", 264, 224);
            text("answer this question", 251, 238);
        }
        if (timer4 > 900 && timer4 < 1100) {
            text("You'll proceed to", 264, 224);
            text("the next stage:", 276, 238);
        }
        if (timer4 > 1100 && timer4 < 1400) {
            text("The Desert!", 275, 232);
        }
        if (timer4 > 1400 && timer4 < 1500) {
            text("Well... here it is:", 264, 232);
        }
        if (timer4 > 1500) {
            question("If 1 = 4, 2 = 8, and 3 = 12,", 82, 61, 20, 14, "4", 281, 152, "16", 280, 213, "1", 107, 151, "20", 104, 212, "then 4 = ?", 159, 85);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            topleft(18);
        }
    }
    
    if (gamestatus === 18) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 19;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 19) {
        timer5 += 1;
        //desert1
        desert(125, 162, 219, 217, 217, 106, 209, 192, 0, 146, 109, 67, 100, 100, 100);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        textSize(17);
        fill(0, 0, 0);
        if (timer5 > 0 && timer5 < 200) {
            textSize(12);
            text("Congratulations! You've made it to the second stage: The Desert!", 21, 42);
        }
        if (timer5 > 200) {
            keys();
            textSize(15);
            text("Keep trying to answer those questions correctly!", 46, 42);
        }

        if (MrPantsX > 320) {
            question("What can run but never walks, has a mouth", 38, 47, 17, 14, "A Car", 267, 152, "A Human", 260, 213, "A Cheetah", 79, 151, "A River", 91, 212, "but never talks, has a head but never weeps,", 36, 71);
            fill(255, 255, 255);
            textSize(17);
            text("and has a bed but never sleeps?", 74, 95);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            bottomleft(20);
        }
        
    }
    
    if (gamestatus === 20) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 21;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 21) {
        //desert1
        keys();
        desert(125, 140, 201, 218, 200, 111, 208, 182, 0, 174, 122, 207, 100, 189, 109);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        textSize(15);
        fill(0, 0, 0);
        text("You're doing extremely well!", 108, 42); 

        if (MrPantsX > 320) {
            question("A box without hinges, key or lid", 66, 63, 19, 14, "A Skull", 266, 152, "A Toilet", 266, 213, "An Egg", 88, 151, "A Jukebox", 79, 212, "yet golden treasure inside is hid.", 63, 88);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            topleft(22);
        }
        
    }
    
    if (gamestatus === 22) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 23;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 23) {
        //desert1
        keys();
        desert(89, 89, 179, 196, 172, 78, 191, 165, 19, 247, 122, 315, 134, 282, 130);
        footsteps(41, 331);
        footsteps(161, 331);
        sign(335, 277);
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        textSize(15);
        fill(0, 0, 0);
        text("You've almost made it to the third stage!", 68, 42); 

        if (MrPantsX > 320) {
            question("What walks on four feet in the morning, two feet", 9, 66, 18, 14, "A Caterpillar", 248, 152, "An Aging Human", 236, 213, "A Tree", 89, 151, "A Frog", 90, 212, "in the afternoon, and three feet at night?", 40, 91);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            bottomright(24);
        }
    }
    
    if (gamestatus === 24) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 25;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
    if (gamestatus === 25) {
        MrPantsX = 0;
        desert(72, 70, 135, 181, 159, 82, 168, 139, 10, 333, 128, 391, 144, 368, 148);
        fill(255, 255, 255);
        timer7 += 1;
        fill(0, 0, 0);
        textSize(17);
        text("What's happening?", 139, 42);
        footsteps(41, 331);
        footsteps(161, 331);
        
        image(MrPants, MrPantsX, MrPantsY, 75, 75);
        image(pice, piceX, 222);
        if (timer7 > 200) {
            piceX -= 2;
        }
        if (piceX < 157) {
            piceX += 2;
        }
        
        fill(255, 255, 255);
        if (timer7 > 325) {
            ellipse(309, 228, 131, 59);
            triangle(289, 243, 318, 200, 240, 264);
        }
        
        textSize(11);
        fill(0, 0, 0);
        if (timer7 > 325 && timer7 < 475) {
            text("Similarly to the final", 260, 222);
            text("question of the forest", 257, 237);
        }
        if (timer7 > 475 && timer7 < 650) {
            text("Answering this correctly", 251, 225);
            text("will bring you to the", 260, 239);
        }
        if (timer7 > 650 && timer7 < 825) {
            text("Very last stage:", 272, 225);
            text("The Mountains!", 272, 239);
        }
        if (timer7 > 825 && timer7 < 1000) {
            text("So without further ado,", 257, 225);
            text("Here it is:", 289, 239);
        }
        if (timer7 > 1000) {
            question("What is black and white,", 87, 66, 21, 17, "Zebra Painted Red", 217, 153, "Vintage Piano", 236, 213, "Penguin", 80, 153, "Newspaper", 68, 213, "and 'read' all over?", 110, 93);
            if (mouseIsPressed) {
                gamestatus = 12;
            } 
            bottomleft(26);
        }
    }
    
    if (gamestatus === 26) {
        if (timer3 > 125) {
            timer3 = 1;
        }
        noStroke();
        background(209, 198, 198);
        timer3 += 1;
        fill(115, 115, 115);
        rect(52, 144, 294, 89);
        fill(0, 0, 0);
        textSize(30);
        fill(x, y, x);
        textSize(44);
        text("CORRECT!", 84, 202);
        x -= 1;
        y += 1;
        fill(0, 0, 0);
        if (timer3 > 125) {
            MrPantsX = 0;
            gamestatus = 27;
        }
        if (x < 1) {
            x = 255;
        }
        if (y < 1) {
            y = 255;
        }
    }
    
};

