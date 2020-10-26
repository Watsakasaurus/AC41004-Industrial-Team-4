
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


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What does the South American snake Lachesis muta, commonly known as South American bushmaster, do when it feels threatened?', 'None of these', 'Its front legs are a little longer than the rear legs.','None of these', 'It has 16 teeth','It has a short tail','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of mammal is the Culpeo?', 'Wild dog', 'Beaver','Wild cat', 'Wild dog','Fox','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of the following is a characteristic of the tiger shark?', 'They give birth to live young.', 'They can breath above water.','They have eyelids.', 'They give birth to live young.','They have body hair.','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('How long is the gestation period for a female tiger shark?', '15-16 months', '15-16 months','20-21 months', '10-12 weeks','9-10 Months','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these statements is NOT true about the Common Raven, a popular omnivorous bird?', 'It wouldnt eat birds', 'It wouldnt reject carrion','It would feed on animal feces', 'It wouldnt eat birds','It feeds on human food waste','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these is not within the natural diet of the omnivorous Eastern Box Turtle?', 'Small amphibians', 'Small amphibians','Earthworms', 'Snails','Carrion','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What is the prevailing color of the fur of the Tasmanian devil?', 'Black', 'Grey','White', 'Brown','Black','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What bizarre food would pigs occasionally eat, being omnivores?', 'All of these', 'Tree bark','Their young', 'Rotting carcasses','All of these','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these are a part of an ant colony?', 'All of these', 'Workers','Drones', 'Drones','All of these','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these ways of defence and attack do ants use?', 'All of these', 'Biting','Stinging', 'Injecting or spraying chemicals','All of these','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Some small spider species, as well as the young of larger species, are known for floating in the wind. What is this activity commonly known as?', 'Ballooning', 'Jetting','Skydiving', 'Ballooning','Drifting','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which of these mollusks is able to glide over in air for up to 50 meters (164 feet)?', 'Squid', 'Oyster','Slug', 'Squid','Octopus','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('In what ocean can the 50 species of Exocoetidae, also known as flying fish, be found?', 'All of these', 'Atlantic ocean','All of these', 'Indian ocean','Pacific ocean','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Where are the gliding membranes of the Draco lizard species positioned?', 'On their elongated ribs', 'Between their fingers and toes','Between its front and hind legs', 'They do not have a gliding membrane','On their elongated ribs','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('The large tsetse fly, found in Africa, feeds on what?', 'Blood', 'Blood','All of these', 'Carrion','Nectar','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of animal is the dik-dik, indigenous to Africa?', 'Antelope', 'Cricket','Wild cat', 'Antelope','Rodent','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which whale expels a reddish-brown fluid when threatened, much like an octopus?', 'Pygmy sperm whale', 'Dwarf sperm whale','Pygmy sperm whale', 'Andrew’s beaked whale','Fin whale','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What animal is considered the smallest mammal in length on the planet?', 'Kittis Hog-nosed Bat', 'Kittis Hog-nosed Bat','Kittis Hog-nosed Bat', 'Pygmy Jerboa','Etruscan Shrew','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What kind of animal is the smallest known reptile on the planet?', 'Gecko', 'Lizard','Snake', 'Gecko','Turtle','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of insect is the smallest known insect on the planet?', 'fairy wasps', 'Cockroach','fairy wasps', 'Ant','Fly','animals')

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of animal is the smallest vertebrate?', 'Fish', 'Mammals','Reptiles', 'Fish','Amphibians','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('There are various theories for the origin of the word penguin, such the Latin word pinguis, which means what?', 'Fat', 'Swimmer','Fat', 'Upright','Diver','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of Indian animals are included in the so-called Big Four selection?', 'Poisonous snakes', 'Largest land animals','Most dangerous animals', 'Largest insects','Poisonous snakes','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What is the only place in the world you can see platypuses in the wild?', 'Australia and Tasmania', 'Australia and Tasmania','South-eastern Asia', 'South America','Hawaii Island','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What geographical region are chinchillas native to?', 'South America', 'North America','Africa', 'South America','Asia','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What type of food do chinchillas prefer to feed on in the wild?', 'All of these', 'Insects','Fruits', 'Plants','All of these','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This large cat breed, created in the United States, has rabbit-like fur of medium length, rectangular body, and a fatty pad in the lower abdomen.', 'Ragamuffin', 'Munchkin','Balinese', 'Ragamuffin','California Spangled Cat','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This very old cat breed, which occurred naturally in Turkey, has a slender body with medium length fur, usually white.', 'Turkish Angora', 'Ocicat','Selkirk Rex', 'Cymric','Turkish Angora','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('The feathers of adult male ostriches are primarily of this color.', 'Black', 'Brown','Gray', 'Black','White','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('How many toes do ostriches have?', 'One toe', 'Two toes','', 'Five toes','Tree toes','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What defense method do ostriches use when they are attacked or feel threatened?', '', 'Kicking','All of these', 'They bury their heads in the sand.','They use their wings to beat the enemy.','animals');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('How do elephants protect their skin from the aggressive UV-radiation?', 'By wallowing in mud', 'By wallowing in their own feces','None of these', 'By hiding in the shadow of thick branches','By wallowing in mud','animals');






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

-- start 2 bran teaser

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('One camera could take 350 pictures and Bob bought 3 cameras of the same type. How many pictures could he take?','1050','350','none','1050','700','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('There is a branch with 10 birds on it. I shot 2 of them and then 1 more. How many birds are left on the branch?','0','0','2','6','3','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What modern slang term once meant a carnival worker who performed disgusting tasks such as biting off the heads of live chickens?','Geek','Freak','Dork','Geek','Nerd','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('The vegetable rhubarb is delicious but its leaves are poisonous. What did rhubarb originally mean?','root of the barbarian','edible poison','beware','root of the barbarian','poisoned ruby','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('The king required FEALTY from all his vassals. What does the word fealty mean?','allegiance','food','allegiance','livestock','payment, rent','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This is what you can see once in a minute, twice in a moment, but never in a thousand years.','The letter M','A Solstice','The sun','An eclipse','The letter M','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('This is the smartest letter.','Y','A','Y','C','W','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What is the largest county in the US?','San Bernadino, CA','Bernalillo, NM','Dade, FL','Maricopa, AZ','San Bernadino, CA','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('What creature is responsible for the most human deaths?','The mosquito','The brown recluse spider','The great white shark','The mosquito','The hippo','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Take two apples from three apples and what do you have?','two apples','two apples','no apples','three apples','one apple','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('#Q A man buys a horse for $60. After a while he sells it for 70$. Some time passes and the man regrets his decision and goes to buy the horse again. But now he has to pay $80 for it and he does. After a while he regrets to have bought the horse back and sells it for $90. Now in total, how much loss/profit did the man make from the three transactions?','$10','0','- $20','$10','$20','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Two dice are randomly thrown. What is the possibility that the number, formed by the two digits that come form the dice, is a prime?','5:12','5:12','5:18','19:36','35:36','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A total of 15 delegates from Africa, Asia, America, and Europe meet at an international conference.
Each continent sends a different number of delegates, and each is represented by at least 1 delegate.
America and Asia send a total of 6 delegates.
Asia and Europe send a total of 7 delegates.
Which continent has sent 4 delegates?','Asia','America','Asia','Africa','Europe','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A famous playboy explained to a beautiful woman his system for playing roulette: In each round, I always bet half of the money I have at the time on red. Yesterday, I counted and I had won as many rounds as I had lost. Over the course of the night, did the gambler win, lose or break even?','lose','lose','break even','None of these','break even','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('One of these pairs of numbers has this strange characteristic - when you subtract one of them from the other you get a number equal to what you will get if you divide one by the other. Can you spot it?','25/4 and 5/4','30/6 and 36/6','25/4 and 5/4','3 and 2/12','24/6 and 24/8','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A driver noticed that the dashboard showed he had driven a total number of 15951 miles. He thought that this was a strange number because no matter in what direction it was read (from left to right or from right to left) it was the same. However, in two hours, the dashboard showed a number that had that same characteristic. What was the speed of the car?','55','450','65','110','55','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('A worm can gnaw through 1 mm of paper for a single day. On a bookshelf there are two volumes, each 4 cm thick. Each of the covers is 2 mm thick. How long will it take the warm to gnaw from the first page of the first volume to the last page of the second volume?','4 days','14 days','4 days','80 days','60 days','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES (' A squirrel finds a hollow log with 9 ears of corn in it.  If he can carry out 3 ears every day, how many days will it take him to empty the log?','9','6','9','None of these','3','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('I always go up and down the stairs without moving.','A rug','A rug','A scarf','A towel','A curtain','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('You always wear these flowers.','Tulips','Roses','Daises','Poppies','Tulips','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('My first stop was the supermarket.  When I had completed my shopping and was in the parking lot, I spied this snazzy auto with the following vanity plate: 10S42.  What sport is the driver of this vehicle most likely a fan of?','Tennis','Badminton','Bowling','Golf','Tennis','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('You are on your way to visit your Grandma, who lives at the end of the valley. Its her birthday, and you want to give her the cakes youve made.
Between your house and her house, you have to cross 7 bridges, and as it goes in the land of make believe, there is a troll under every bridge! Each troll, quite rightly, insists that you pay a troll toll. Before you can cross their bridge, you have to give them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake.
What is the minimum number of cakes you will have to leave home with to make sure that you arrive at Grandmas with exactly 2 cakes?','2','24','5','2','14','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Three goddesses were sitting in an old Indian temple. Their names were Truth (who always tells the truth), Lie (who is always lying) and Wisdom (who sometimes lies). In order to figure out which goddess was which you posed the following questions to each:
Asking the left one: Who is sitting next to you?
Truth, she answered.
Asking the middle one: Who are you?
Wisdom.
And at last question for the right one: Who is your neighbor?
Lie, she replied.
From left to right in what order are goddesses sitting?','1. Wisdom 2. Lie 3. Truth','1. Truth 2. Lie 3. Wisdom','1. Wisdom 2. Truth 3. Lie','1. Wisdom 2. Lie 3. Truth','1. Lie 2.Truth 3. Wisdom','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('','','','','','','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('We know very little about the life of the mathematician Diophantus (called the father of algebra) except that he lived around the year 250 B.C. Due to one admirer of his, who described his life by the means of an algebraic riddle, we can at least determine his age at death:
Diophantuss youth lasted 1/6 of his life. He had his first beard in the next 1/12 of his life. At the end of the following 1/7 of his life Diophantus got married. Five years from then his son was born. His son lived exactly 1/2 of Diophantuss life. Diophantus died 4 years after the death of his son.
How long did Diophantus live?','84 years','96 years','84 years','72 years','90 years','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES (' Two children were on their way to school, when they began to question what day of the week it was. They were so confused in their reckoning that one of them gave the following riddle to help sort the matter out: When the day after tomorrow is yesterday, then today will be as far from Sunday as that day was which was today when the day before yesterday was tomorrow!
On which day of the week were the children heading to school?','Sunday','Monday','Friday','Sunday','Saturday','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('I am related to the water but I am not wet.
I am related to a shadow but I am multicolored.
I create an illusion but show what is real. What am I?
',' a mirror','a bed','gold','shiny things','a mirror','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Im one of five, and Im not alive.
The one who sent me forth became king, 
the one who got me died.
What am I?','A stone','A boulder','A rock','A banana','A stone','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Each morning I appear 
To lie at your feet, 
All day I follow you 
No matter how fast you run, 
Yet I nearly die 
In the midday sun. 
What am I?','Your shadow','An apparition','Your shadow','Someone Elses shadow','A doppelganger','Brain Teasers');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES ('Which letter comes next in this series:
W-L-C-N-I-T-?','S','Z','W','T','S','Brain Teasers');






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

-- celebs start 2 
INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('hat was the name of Nicolas Cages character in the movie City of Angels?','Seth','Nathaniel','Nate','Seth','Steven','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Nicolas Cage won an Academy Award for his performance as a suicidal alcoholic in this movie.','Leaving Las Vegas','Wild at Heart','Adaptation','Leaving Las Vegas','8mm','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What was the full name of Hardy, of the famous comedy partnership, Laurel and Hardy?','Oliver Norwell Hardy','Oliver Norwell Hardy','Norton Oliver Hardy','Wendell Oliver Hardy','Oliver Wendell Hardy','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who co-starred with Elvis in Flaming Star?','Barbara Eden','Debra Paget','Juliet Prowse','Barbara Eden','Shelly Fabares','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This Hawaiian born actress/singer starred in A Knights Tale; Kiss, Kiss, Bang, Bang; and appeared as a guest star on several TV shows. She named her son Audio Science Clayton.','Henry Fonda','Kirk Douglas','Henry Fonda','John Wayne','Robert Mitchum','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Her name is Memphis Eve. Who is her famous dad?','Bono','Bono','Gregg Allman','Shaquille ONeal','Todd Rundgren','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which Australian born actress named her child Banjo?','Rachel Griffiths','Nicole Kidman','Rachel Griffiths','Naomi Watts','Toni Collette','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which Aerosmith song are the following lyrics from: Sing with me, sing for the year, sing for the laughter, sing for tear..?','Dream On','Rag Doll','I Dont Want To Miss A Thing','Walk This Way','Dream On','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What is the most popular nickname of TV talk show host Jay Leno?','The Chin','The Chin','The Wig','The Grandpa','The Boss','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Justin Timberlakes very curly blond hair has earned him this funny nickname.','Curly Spice','Perm','Surly-Curly','Curly Spice','Noddle Hair','celebrities');
INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What was the reason Madonna was called Madge in Great Britain?','It is short for Your Majesty','Because she resembles Mary Magdalene','It is short for Your Majesty','It is just a pet name for Madonna','Because she mentions Joe DiMaggio in her song Vogue','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('For which film did Frank Sinatra get his Oscar?','From Here to Eternity','Suddenly','Kings go Forth','From Here to Eternity','Can-Can','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('When and where was Robert Duvall born?','January 5, 1931in SanDiego, California','January 5, 1931in SanDiego, California','January 5, 1951in Dumont, Texas','January 5, 1956 in Des Moines, Iowa','January 5, 1941in Annapolis, Maryland','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('The following lyrics are from a song by the Rolling Stones, released in 1971 as the first single of the album, Sticky Fingers.  Name the song. Gold Coast slaveship bound for cotton fields
Sold in a market down in New Orleans
Scarred old slaver know hes doin alright
Hear him whip the women just around midnight','Brown Sugar','Brown Sugar','Beast of Burden','Its only rock and roll','Rough Justice','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In 1992  Bernie Mac made his film debut in this comedy about a con artist who gets a job at a credit card  company.','MoMoney','Im Gonna Git You Sucka','Above Heaven','Blankman','MoMoney','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In this movie Harrison Ford plays a man on vacation who gets involved in a terrorist attack on the U.K.s Royal Family.','Patriot Games','Patriotism','Patriot Games','The Patriot','Time of the Patriot','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('When was Harrison Ford born?','none of these','July 14, 1942','July 14, 1941','none of these','July 14, 1943','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('How tall is actor Will Ferrell?','6 3','65','6 3','510','60','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What disease is Meryl Streeps character in the 1998 movie One True Thing diagnosed with?','Cancer','Cancer','Diabetes','AIDS','Alzheimers disease','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In what Robert De Niro movie does Meryl Streep play a supporting role as the female character Linda?','The Deer Hunter','True Confessions','Angel Heart','Falling in Love','The Deer Hunter','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who is Jack Blacks partner in the duo Tenacious D?','Kyle Gas','Kyle Bass','Garth Brooks','Kyle Gas','Jack White','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Leonard Nimoy and fellow Star Trek actor William Shatner suffer from the same ailment. What is it?','Tinnitus','Peripheral neuropathy','Tinnitus','Diabetes','Shingles','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('For what movie did Robin Williams receive his first Academy Award?','Good Will Hunting','Good Will Hunting','Dead Poets Society','Patch Adams','Moscow on the Hudson','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('How does Chris find out that Mrs. Doubtfire is a man in the 1993 movie Mrs. Doubtfire, starring Robin Williams?','He catches her urinating upright.','He finds photos in her purse.','He finds photos in her purse.','He catches her urinating upright.','He hears her talk on the phone.','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What Academy Award-winning actor co-starred with Robin Williams in the 1990 drama movie Awakenings?','Robert De Niro','Dustin Hoffman','Christopher Walken','Tom Hanks','Robert De Niro','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('When was American actor Adam Sandler born?','September 9th, 1966','September 9th, 1966','September 11th, 1966','November 23,1971','October 5th, 1965','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What was the first movie Adam Sandler had a major role in?','Billy Madison','The WaterBoy','Billy Madison','8 crazie nights','Big Daddy','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What country was Heath Ledger born in?','Australia','New Zealand','England','Australia','Wales','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This well known Actor/ Director/ Producer  Icon was the co-star with Heath Ledger in the movie The Patriot.','Mel Gibson','James Cann','Mel Gibson','Will Smith','Robert Redford','celebrities');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In what 2000 TV series did Albert Finney play a Cornish country gentlemen looking after his grand nephew?','My Uncle Silas','Uncle, Uncle, Uncle','Tom Jones','My Uncle Silas','Cold Lazarus','celebrities');




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



-- start 2 literature 


INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This fun little charm from the Harry Potter series produces a lovely bouquet of flowers.','Orchideous','Confringo','Densaugeo','Petuniatum','Orchideous','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Most writers dream of making the New York Times Best-Seller List. Which one of these books spent the most weeks on the New York Times Best-Seller List?','The Da Vinci Code','The Lovely Bones','The Da Vinci Code','Into Thin Air','Harry Potter and the Goblet of Fire','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Neil Gaiman, a fantasy and science fiction writer was asked to name his top 10 New Classic Monsters.  Gaimans # 8 choice was a monster found in master horror writer Steven Kings novel It. In what shape did It come to terrorize the children of Derry?','Pennywise, the clown','Buick 8','Cujo','Pennywise, the clown','The Walking Dude','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In 2008, EW.com asked readers for their choice for favorite author of the last 25 years. Which author
received the most votes?','J. K. Rowling','Nora Roberts','John Grisham','J. K. Rowling','Steven King','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who were William Shakespeares parents?','John and Mary Shakespeare','William and Mary Shakespeare','John and Mary Shakespeare','John and Lyn Shakespeare','John and Jane Shakespeare','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In the poem The Rime of the Ancient Mariner, the Ancient Mariner tells his tale to a person he pulls aside from what event?','A wedding','A wedding','A dance','A play','A party','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What best-selling American author, born Howard Allen O’Brien, created the vampire Lestat de Lioncourt?','Anne Rice','Anne Rice','Dean Koontz','Stephen King','Stephenie Meyer','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which 19th century epistolary novel by Wilkie Collins is considered to be the first modern detective novel in the English language?','The Moonstone','A Study in Scarlet','The Count of Monte Cristo','Murder on the Orient Express','The Moonstone','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What is the slang term used for romance novels in literature?','Bodice Rippers','Chick Lit','Moonlighters','Bodice Rippers','Torrid Teasers','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which anti-war science fiction novel by Kurt Vonnegut follows the journeys through time of American soldier, Billy Pilgrim, mostly set in Dresden, Germany?','Slaughterhouse Five','Cats Cradle','Slaughterhouse Five','Mother Night','Breakfast of Champions','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which one of these fantasy books by Piers Anthony is not part of a series?','Mercycle','Ogre, Ogre','Juxtaposition','Mercycle','On a Pale Horse','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Apart from writing a bestselling horror fiction, he also worked as an acting and business manager of Irvings Lyceum Theatre, London. Who is he?','Bram Stoker','Nathaniel Hawthorne','James Joyce','William Hope Hodgson','Bram Stoker','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('According to many scholars, Miguel Cervantes penned the first modern novel. What is its title?','Don Quixote','Don Quixote','The Iliad','The Impossible Dream','La Galatea','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What white whale does Captain Ahab seek in Herman Melvilles novel Moby Dick?','Sperm Whale','Killer Whale','Pilot Whale','Blue Whale','Sperm Whale','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who penned the childrens story The Old Man of Lochnager?','Prince Charles','David Beckham','Harold Wilson','Prince Charles','Eric Clapton','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What is the first name of Mary Shelleys character Frankenstein, who creates a humanoid creature by stitching together pieces of human corpses?','Victor','Victor','William','Volfgang','Ernest','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What character, depicted by English writer H. G. Wells, discovers a formula capable of rendering a human being invisible?','Griffin','Dr. Moreau','Dr. Montgomery','Griffin','Professor Lidenbrock','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('The author of the best-selling novel, The Call of the Wild, was a war reporter, covering the Russo-Japanese War. Can you guess his name?','Jack London','Jack London','Jonathan Swift','O Henry','Charles Dickens','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('tephen King wrote about half of this novel in room 217 of the Stanely Hotel in Colorado.','The Shining','Misery','The Shining','Bag of Bones','Black House','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What is Romeos last name in Shakespeares play Romeo and Juliet?','Montague','Boleyn','Capulet','Montague','Valentine','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('What novel by Jane Austen was originally titled Elinor and Marianne?','Sense and Sensibility','Persuasion','Emma','Pride and Prejudice','Sense and Sensibility','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In the novels Eragon and Eldest, zarroc is the ancient language word translated as misery. What else does the word refer to?','a sword','a dragon','a dragon rider','a place','a sword','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This nature lover felt that poetry should reflect the simple tongue of the common man and that poetry is basically “emotion recollected in tranquility.” Which renowned poet penned “Tintern Abbey” and “I Wandered Lonely as a Cloud.”','William Wordsworth','William Wordsworth','Samuel Taylor Coleridge','Charles Lamb','William Blake','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This actress, who won an Oscar at the age of 10, wrote a scathing memoir titled A Paper Life.','Tatum ONeal','Angelica Huston','Murial Hemingway','Drew Barrymore','Tatum ONeal','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Name the first novel of a popular series which has a main character named Twig.','Beyond the Deep Woods','Pure dead magic','Wizard of Earthsea, A',' Moorchild, The','Beyond the Deep Woods','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Luke is the main character in which of the following books?','Among the Hidden','Turnabout','Double identity','Running out of Time','Among the Hidden','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In what year did William Wordsworth write the poem Ode, Intimations of Immortality from Recollections of Early Childhood?','1803','1800','1810','1803','1799','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('In 1931 the Province of Hunan, China banned this book.','Alices Adventures in Wonderland','1984','Go Ask Alice','Alices Adventures in Wonderland','Alices Restaurant','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('This famous anti-war novel by Erik Marie Remarque was banned in Nazi Germany.','All Quiet on the Western Front','To Hell and Back','1984','Dr. Caligari','All Quiet on the Western Front','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Who is the author of the poems Meeting at Midnight and Parting in Morning?','Robert Browning','Emily Bronte','Walt Whitman','Robert Browning','Elizabeth Browning','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which poet wrote the poem beginning with the words-Success is counted sweetest...?','Emily Dickinson','Elizabeth Browning','Carol Channing','Emily Bronte','Emily Dickinson','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which of these fairy tales by Hans Christian Andersen starts with a woman who longs to have a child and is given a magic seed by a witch?','Thumbelina','The Princess and the Pea','The Wild Swans','Thumbelina','The Angel','literature');

INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('Which of these fairy tales by Hans Christian Andersen ends with the death of a poor girl in the streets?','The Little Match Girl','The Little Match Girl','The Shadow','The Happy Family','The Story of a Mother','literature');
/*
INSERT INTO quiz(question, answer, option1, option2, option3, option4, category)
VALUES('','','','','','','literature');
*/