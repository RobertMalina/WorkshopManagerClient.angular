# About _Workshop Manager client_ application (implementation based on Angular 9)

This project provides user web interface which exposes features of _Workshop Manager_ features (features are presented in "card" elements at the screenshot of the Home page added below). Application communicates with remote server powered by Node.js (I used Express.js library to implement web server). This project serves to me as a way to learn Angular framework. I use RxJs library because I want also to learn/master my reactive programming skills. I am also considering embedding app-state-store mechanism (based on Redux or Angular's NgRx), for persisting user authentication state/data and for example settings of paginated list of orders. I use SASS preprocessor to handle application stylesheets, and I am concentrated on Responsive Web Desgin when I implement new components.

#  Current project status - can I verify how it works/look?

I am aware that it would be best, to host this project on some server to set it available to You, so You would be able to examine how it works e.g. if it works in responsive manner in different devices. But unfortunately, project is still not finished and verified.

I try to extend this project at my free time, but every new feature need to be implemented by me both in server-side and client-side (client-side is covered by this repository itself) and in some cases, some changes in database (MSSQL) are required. In addition, each feature is carefully planned by me - so it tooks a lot of my time.

I plan every feature both of logical and design aspect, as I implement software using relative new stack tech for me - I am looking for best practices how to use it (e.g. reactive forms, RxJs library, angular app structure...). 

Below I posted example logical scheme of some component tree which is included in application:

![alt text](/doc/ordermodule_v1.png)
