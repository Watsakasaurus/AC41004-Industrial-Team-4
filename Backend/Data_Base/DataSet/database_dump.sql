
 DROP TABLE IF EXISTS quiz;

CREATE TABLE quiz(
quizId SERIAL PRIMARY KEY, 
question TEXT NOT NULL, 
answer TEXT NOT NULL, 
option1 TEXT NOT NULL, 
option2 TEXT NOT NULL,
option3 TEXT NOT NULL,
option4 TEXT NOT NULL,
category TEXT NOT NULL

);

/* Category animals*/
INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Three of these animals hibernate. Which one does not?', 'Sloth', 'Mouse', 'Sloth', 'Frog', 'Snake','animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('All of these animals are omnivorous except one.', 'Snail', 'Fox', 'Mouse', 'Opossum', 'Snail', 'animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Three of these Latin names are names of bears. Which is the odd one?','Felis silvestris catus','Melursus ursinus','Helarctos malayanus','Ursus minimus','Felis silvestris catus', 'animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Representatives of three of these species produce venom of their own. Which is the odd species?', 'Mosquitos', 'Lizards', 'Scorpions','Frogs','Mosquitos','animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Three of these species shed their skin. Which one does not?','Penguins', 'Penguins','Snakes','Insects', 'Crustaceans','animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('All of these animals have large ears (relative to their size) except one.','Polar bears', 'Foxes','Bats','Elephants' ,'animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A specialist in snakes is called one of these.','Ophiologist', 'Pisciculturist', 'Ornithologist','Ophiologist', 'Herpetologist','animals');


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('One of the following snakes does not belong to the Viperidae family.', 'Grass snake', 'Horned adder', 'Grass snake', 'Viper','Asp','animals'); 


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What was the largest  eagle ever found on Earth?', 'Haasts Eagle', 'Golden Eagle','Harpy Eagle','Haasts Eagle', 'Bald Eagle','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What color is the head of the South American stork Jabiru, whose body is predominantly white?', 'Black', 'Purple','Green', 'Black','Red','animals');


/* Category brain teasers*/

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these is true about the sleep of zebras?','They sleep standing up.','All of these','They sleep standing up.','They would fall asleep every 5 to 6 hours.','They need more than 12 hours of sleep a day.','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A farmer had 12 sheep and 3 cows. All of the animals except 9 sheep died. How many animals did he have left in his farm?','9 sheep','5 cows and 1 sheep','9 sheep','2 cows','none','Brain Teasers'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('I dont speak, I cannot hear, but I always tell the truth.','The Mirror','The watch','Fish','The Mirror','Old granny','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('How does this proverb continue: The squeaking wheel gets ...','The grease','The rust','Removed','The broken','The grease','Brain Teasers'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A contestant on a TV show had to answer 26 questions. For each correct answer he received 8 points, while a wrong answer penalized him 5 points. How many answers did the man answer correctly, bearing in mind that he eventually had 0 points?','10', '12', '8', '16','10','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('You have a square and a circle and the perimeter of the square is equal to the circumference of the circle. Which of the two figures covers a bigger area?','The circle','The square','The circl','No conclusions can be drawn from the given information', 'Both cover the same area','Brain Teasers'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What on earth could dance, and live and die?
Without legs, or lungs, or being alive?','Fire','Water','Darkness','Darkness','Wind','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('I have eight to spare, in case I lose my one.
Im not a number.
What am I?.','a cat','a dog','one','nine','a cat','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('How long did the Hundred years war last?','116 years','110 years','98 years','116 years','116 years','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What food can be Chinese, Jerusalem and Globe?','Artichoke','Artichoke','Curry','Cracker','Pork','Brain Teasers');
/* Category celebrities*/

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('One of Johnny Depps earliest film roles was as Gator Lerner in what 1986 movie?','Platoon','The Color of Money','Platoon','Top Gun', 'BAliens','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This Scottish author, portrayed by Johnny Depp in the movie Finding Neverland, created the fictional character Peter Pan.','James Barrie','John Dunne','George Eliot','Joseph Grimm', 'James Barrie','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('When was Elvis born?','January 8, 1935','January 8, 1935','January 8, 1977','August 16, 1935', 'August 8, 1977','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('He played Nicholas Bradford on the ultra popular 70s sitcom Eight is Enough.','Adam Rich','Jason Bateman','Adam Rich','Meeno Peluce', 'Ralph Macchio','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Rapper turned actor Will Smith married this actress in 1997','Jada Pinkett','Brandy Norwood','Nia Long','Jada Pinkett', 'Shia LeBeouf','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What famous actor did Catherine Zeta Jones marry in 2000?','Michael Douglas','Kirk Douglas','Michael Douglas','Jeff Bridges', 'Lloyd Bridges','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Singer Jennifer Lopez married this famous singer in 2004.','Mark Anthony','Dave Grohl','Enrique Iglesias','Gavin Rossdale', 'Mark Anthony','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Actor Ben Stiller married this actress in 2000.','Christine Taylor','Pam Anderson','Nikki Taylor','Christine Taylor', 'Heather Graham','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This actor made his film debut in Rubberface and followed it with appearances in Copper Mountain, Once Bitten and Peggy Sue Got Married before he hit the big time.','Jim Carrey','Dean Cain','Jim Carrey','Matt Dillon', 'Alan Cumming','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This British actor is the eldest of a pair of twins and who played George Weasley in the Harry Potter series of films.','Oliver Phelps','Orlando Bloom','Sean Astin','Garrett Hedlund', 'Garrett Hedlund','celebrities'); 

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This American is an actor, producer, director and general philanthropist.  He is responsible for setting up the Sundance Independent Film Festival.','Robert Redford','Stephen Dorff','Matthew Broderick','Nick Nolte', 'Robert Redford','celebrities'); 

/*Category literature  */

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What language can Harry Potter speak?','Parseltounge','Goblin','Elvish','Mermish','Parseltounge','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Hermione was supposed to turn into this person after drinking the Polyjuice Potion.','Millicent Bulstrode','Crabbe','Millicent Bulstrode','Millie Vanilli','Pansy Parkins','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What was Hagrid buying in Knockturn Alley?','Flesh-Eating Slug Repellent','Fresh-Skin Slug Repellent','Flesh-Eating Ant Repellent','Flesh-Eating Slug Repellent','Flesh-Eating Slug Repellent','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This book tells the story of two women who meet and fall in love with each other. They openly declare their homosexuality to family and friends. Thats why the Kansas school system ordered the removal of all copies of this book from high school libraries.','Annie on My Mind','Daddys Roommate','Annie on My Mind','Andersonville','Catch 22','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This book by Judy Blume was censored as it discussed adolescent sexuality in too much detail.','Forever','Forever','Grapes of Wrath','Lolita','Freedom and Order','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This book by George Orwell was banned as it was pro-communist.','1984','The Sun Also Rises','1984','Coming Up for Air','Delivarance','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Its translation into local languages was forbidden in Burma.','The Bible','The Quran','The Cabala','Arabian Nights','The Bible','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This book was censored in 1985 in Cairo, Egypt as it contained obscene passages which posed a threat to the countrys moral fabric.','Arabian Nights','Analects','Arabian Nights','Don Quixote','Brave New World','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who is the Shakespearean villain who had his own brother executed and innocent children killed because they were hindrances to his kingly ambition?','Richard III','Richard III','Edmund','Aaron the Moor','Othello','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('The famous evil female Baba Yaga comes from:','Russian folklore','A Norse legend','An Uzbekistanian fairy-tale','A Moroccan song','Russian folklore','literature');


/*
INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('','','','','','','literature');
*/