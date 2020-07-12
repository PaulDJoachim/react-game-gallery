-- CREATE DATABASE "react-gallery";

-- Table structure
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	"path" VARCHAR,
	title VARCHAR(80) NOT NULL,
	"description" VARCHAR NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO gallery ("path", "title", "description")
VALUES
('images/myst.jpg', 'Myst', 'Myst was unlike anything before, it created a new genre of adventure game and was pretty much all I could think about in kindergarden. With stunning visuals and an atmospheric soundtrack, Myst topped video game sales records for almost a decade, and is partially responsible for the widespread adoption of the CD-ROM drive.'),
('images/duckGame.jpg', 'Duck Game', 'I''ve played about 2,500 hours of Duck Game. It''s a multi-player game where everyone is a cute duck with a funny hat and also you''re all trying to kill each other. It has a button for quacking, so most of the audio is mix of gunfire, explosions, and duck quacks. It''s the stupidest funniest game I''ve ever seen!'),
('images/cavesOfQud.jpg', 'Cave of Qud',  'Caves of Qud is an incredible roguelike set in an amazing post-human world where water is the only currency. The player takes the role of a mutated techno-augmented wanderer and digs through artifacts of ancient civilizations to learn the rich lore of the world.'),
('images/darkSouls.jpg', 'Dark Souls',  'Dark souls redefined difficulty in video games, and showed developers that many players still want challenging games. It also took up way too much of my time during college.'),
('images/portal.jpg', 'Portal',  'Portal is a perfect synthesis of humor and puzzle-solving. It introduced moveable portal mechanics which allowed players to move through a game world in ways that had never been seen before.'),
('images/witness.jpg', 'The Witness',  'The Witness is a puzzle game that slowly teaches players its own symbolic syntax without using words. The way you learn to read its puzzles reminds me of programming languages.'),
('images/beatSaber.jpg', 'Beat Saber',  'Beat Saber is an excellent VR rhythm game that helps keep me in shape! It''s so fun that you won''t even realize you''re exhaused until you collapse on the floor!'),
('images/baldursGate.jpg', 'The Witness',  'From the makers of ''Fallout'', Baldur''s Gate founded the genre of the isometric D20 system D&D RPG. With beautiful artwork and masterful storytelling the Baldur''s Gate series was a milestone in the history of gaming.'),
('images/factorio.jpg', 'Factorio',  'Factorio is a logistical planning game that requires the player to build massive factories on an alien planet. Similar to programming, it forces you to invent novel solutions to interesting problems.'),
('images/kenshi.jpg', 'Kenshi',  'Kenshi is an unusual hybrid of the RPG and city-building generes. It''s unique engine allows for the control of multiple characters across a massive game world.'),
('images/sunlessSea.jpg', 'Sunless Sea',  'Sunless Sea is a moody, story-driven game where you play as the captain of ship sailing a subterranean ocean. Lovecraftian horror fans will thoroughly enjoy this one.'),
('images/fallout.jpg', 'Fallout',  'Fallout is a retrofuturistic post-apocalyptic RPG. It gave players a vibrant scorched wasteland to explore and told a rich story about the remains of humanity after nuclear war.');