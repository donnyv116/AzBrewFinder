

use azBrewFinderDB;

create table users(
	id mediumint(11) auto_increment not null,
	firstName varchar(10) not null,
	lastName varchar(10) not null, 
	email varchar(10) not null,
	password varchar(10) not null,
	createdAt timestamp not null,
	updatedAt timestamp not null,
	primary key(id)      
);

create table breweries(
	id mediumint(11) auto_increment not null,
    breweryName varchar(100) not null,
    brewImageURL varchar(100) not null,
    createdAt timestamp not null,
    primary key(id)
);

insert into Breweries(breweryName, brewImageURL)
values("Barrio Brewing","http://barriobrewing.co/wp-content/plugins/ageverify-custom/includes/AVlogo.pngDesert",'2018-03-02 00:48:45'),
("Eagle Brewing", "http://www.deserteaglebrewing.com/wp-content/uploads/2017/02/debc_logo.png",'2018-03-02 00:48:45'),
("Flagstaff Brewing Company", "http://flagbrew.com/wp/wp-content/uploads/2015/03/fbc-logo-200.png",'2018-03-02 00:48:45'),
("Four Peaks Brewing", "http://www.chooseazbrews.com/wp-content/uploads/2016/04/four-peaks-logo.jpeg",'2018-03-02 00:48:45'),
("Huss Brewing", "http://www.hussbrewing.com/wp-content/uploads/2016/08/header_logo-e1473797565710.png",'2018-03-02 00:48:45'),
("Mudshark Brewery", "http://mudsharkbeer.com/wp-content/uploads/2016/10/mudsharklogo.png",'2018-03-02 00:48:45'),
("Nimbus Brewing Company", "http://www.chooseazbrews.com/wp-content/uploads/2016/01/nimbus-brewing-logo.jpg",'2018-03-02 00:48:45'),
("Oak Creek Brewery", "http://oakcreekgrill.com/images/ocb%20grill%20logo193x210.jpg",'2018-03-02 00:48:45'),
("Phoenix Ale Brewery", "http://phoenixale.com/wp-content/uploads/2015/09/phoenix-ale-copy.png",'2018-03-02 00:48:45'),
("Prescott Brewing Company", "https://www.prescottbrewingcompany.com/cache/widgetkit/gallery/1/PBC-hops-tm-0ea1faf6ed.jpg",'2018-03-02 00:48:45'),
("Rock Bottom Brewery", "http://www.chooseazbrews.com/wp-content/uploads/2016/01/rock_bottom_logo.jpeg",'2018-03-02 00:48:45'),
("Santan Brewery", "http://santanbrewing.com/wp-content/uploads/2016/04/STB-Horizontal-White-Chandler.png", '2018-03-02 00:48:45');

select * from Breweries;