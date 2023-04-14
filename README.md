# Module 05 Challenge

## Description

- I created an event planner labeled with normal business hours (9am-5pm) indicating hours in grey as past time blocks, red for the current time block, and green as future time blocks to ensure events are recorded to keep track of my busy schedule!
- This planner was created to record and keep track of events into local storage, so that I can refer back to my scheduled events.
- The color-coded time blocks are labeled in order to make reading the planner easier to diffrentiate the events in accordance to the current work day and current time, as well as the events recorded that are already passed in the work day, and the events that are upcoming.

## Installation

My development environment was created in Visual Studio Code to write and correct my code, while simultanenously running the program live through the browser via the index.html file to test my code.
Then, deploying my finished code live onto the website will be accessed through my code's URL on Github Pages.

## Usage
- When the planner webpage is opened, the current date will be displayed  in the header in MM/DD/YYYY dayjs().format
- Below the header, you can scroll to view the color of the time blocks from 9am to 5pm, indicating if the event inside the timeblock container is upcoming(green), inside the present hour(red), or in the past(gray).
- Once you click into the timeblock container, you are able to record an event for your planner to store into localStorage when you click the save button.
- Then, when you refresh the page, the event will stay where you recorded it thanks to local storage!

- (These screenshots were taken late at night, so hours 9am-5pm were all future (green) events!)

![alt text](./Screen%20Shot%202023-04-13%20at%2011.55.06%20PM.png/screenshot.png)

![alt text](./Screen%20Shot%202023-04-14%20at%2012.11.16%20AM.png)

## License
See Repository