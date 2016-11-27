#Culture Map


Culture Map was created as part of an installation for the project "Fusion of Art and Technology" (FAT) for Saxion University. It consists of several different components working with each other, most notably:


* JavaScript, PHP and MySQL running on the web
* HTML, CSS and jQuery running for the front-end interface
* Processing running on the physical interface
* Arduino's Java-based language running on the installation
The code was written by 3 programmers: Ronald Zuidinga, Malte Grapentin and myself.




My part was in Processing and getting the back-end of the web service working. Before I explain what I had to built, I'll describe in short what the goal of the installation was: we had 3D printed various venues located in Enschede, the Netherlands, ranging from theaters, bars and more, which would then be placed on top of our map of Enschede. The user would then be able to "tap" on top of each venue, to then see on a screen which event was coming up in that venue. Moreover, if the user went to our website, they would be able to select a venue again, but then be displayed a list of **all** the events that that venue had placed. There was also a page where the users could see which venue was selected the most often as an indicator of popularity. 


#Behind the Scenes


Processing had to call a couple of functions every time a venue was selected, one of them was to send that specific venue data to our server. The server had to intercept the data that was being sent from Processing, store it in a MySQL database, port it to JavaScript which then used that data to retrieve relevant Facebook event data, and also update a tracker that was keeping track of which type of venue/data was being sent for data visualization purposes. 


In order order to achieve this, I had used a HTTP library inside Processing, that would be called everytime a venue was selected, then sent the name of that specific venue to the server. PHP's $_POST *(antertain/php/getGroup.php)* command was then used to intercept this data, find the same venue name in the database, add a "+1" to that record. Moreover, that name would also be send to a JSON file that would return the data of the upcoming event at that venue to be displayed on the screen.


When the user was on the website, they had the option to select one of the venue's by name. Once they had done this, the "retrieveEvents()" function would be called, which makes of Facebook's API to retrieve all the events of that venue. The function would then format all that data and display it on the webpage. A limitation (or better said, privacy issue) that we had encountered was that each user would need to login to their Facebook's account for Facebook's API to work. We did find some solutions to this issue (CRON jobs or a dummy account, explained in *"antertain/js/events.js"*) but we didn't have enough time at this stage to implement them.


The data visualization *(antertain/vis.php)* runs a loop every second that calls the number of times that a venue had been clicked which is stored inside our database, and adjust the CSS of each venue's bubble accordingly. 




#Conclusion


This had been a fairly challenging project, having to work with so many different platforms, moving data around so extensively, and having to work with Facebook's API which wasn't working 100% at the time (approximately May-June 2016) was a huge frustration, but very rewarding to get working. Best practices aren't applied everywhere, regrettably, but they were noted and will absolutely be implemented in the following projects to come. 


