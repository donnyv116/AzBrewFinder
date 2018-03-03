

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
values("Barrio Brewing","http://barriobrewing.co/wp-content/plugins/ageverify-custom/includes/AVlogo.pngDesert"),
("Eagle Brewing", "http://www.deserteaglebrewing.com/wp-content/uploads/2017/02/debc_logo.png"),
("Flagstaff Brewing Company", "http://flagbrew.com/wp/wp-content/uploads/2015/03/fbc-logo-200.png"),
("Four Peaks Brewing", "http://www.chooseazbrews.com/wp-content/uploads/2016/04/four-peaks-logo.jpeg"),
("Huss Brewing", "http://www.hussbrewing.com/wp-content/uploads/2016/08/header_logo-e1473797565710.png"),
("Mudshark Brewery", "http://mudsharkbeer.com/wp-content/uploads/2016/10/mudsharklogo.png"),
("Nimbus Brewing Company", "http://www.chooseazbrews.com/wp-content/uploads/2016/01/nimbus-brewing-logo.jpg"),
("Oak Creek Brewery", "http://oakcreekgrill.com/images/ocb%20grill%20logo193x210.jpg"),
("Phoenix Ale Brewery", "http://phoenixale.com/wp-content/uploads/2015/09/phoenix-ale-copy.png"),
("Prescott Brewing Company", "https://www.prescottbrewingcompany.com/cache/widgetkit/gallery/1/PBC-hops-tm-0ea1faf6ed.jpg"),
("Rock Bottom Brewery", "http://www.chooseazbrews.com/wp-content/uploads/2016/01/rock_bottom_logo.jpeg"),
("Santan Brewery", "http://santanbrewing.com/wp-content/uploads/2016/04/STB-Horizontal-White-Chandler.png");

select * from Breweries;