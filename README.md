# About _Workshop Manager client_ application (Angular 9)

This project provides user web interface which exposes features of _Workshop Manager_ features (features are presented in "card" elements at the screenshot of the Home page added below). Application communicates with remote server powered by Node.js (I used Express.js library to implement web server). This project serves to me as a way to learn Angular framework. I use RxJs library because I want also to learn/master my reactive programming skills. I am also considering embedding app-state-store mechanism (based on Redux or Angular's NgRx), for persisting user authentication state/data and for example settings of paginated list of orders. I use SASS preprocessor to handle application stylesheets, and I am concentrated on Responsive Web Desgin when I implement new components.

#  Current project status - can I verify how it works/look?

I am aware that it would be best, to host this project on some server to set it available to You (it also would require setup of serverside including MSSQL database), so You would be able to examine how it works e.g. if it works in responsive manner in different devices. But unfortunately, project is still not finished and verified.

<b>However, I invite you to look at the sample app screens - please check Screenshots paragraph listed below.</b>

I try to extend this project at my free time, but every new feature need to be implemented by me both in server-side and client-side (client-side is covered by this repository itself) and in some cases, some changes in database (MSSQL) are required. In addition, each feature is carefully planned by me - so it tooks a lot of my time.

I plan every feature both of logical and design aspect, as I implement software using relative new stack tech for me - I am looking for best practices how to use it (e.g. reactive forms, RxJs library, angular app structure...). 

Below I posted example logical scheme of some component tree which is included in application:

![alt text](/doc/ordermodule_v1.png)

#  Some of implemented features

- JWT based authentication with Http requests interception - token is attached "in flight" to request header - so when user is authenticated, request will be positive verified by server side, if it is not expired.
- Home page which utilize NgMasonry feature.
- Role based navigation menu (allowed options depends on roles possesed by user).
- Logical modularization - app is divided into three logical modules which are lazy loaded.
- RxJs based "lazy loaded" scrollable list of Orders (repairments) - where I don't fetch all of the orders from database at once - but, as user scrolls down - next five orders are fetched - under the hood, server invokes my  SQL stored procedure (check how it looks here: https://github.com/RobertMalina/WorkshopManager.sql/blob/master/OrdersOfPage.tab.sql) which takes such params as itemsOnPage, Page (and filter params).

# Screenshots

Because "alive" application is still not available, I decided to post a bunch of screenshots, which I hope, will give You some taste of how it looks and works.

## Login page (desktop, shrinked mode)
<p align="center">
  <img src="/doc/login-page.PNG" alt="WorkshopManager.ng" width="500px" height="400px">
</p>

## Login page (mobile, emulated in GC Dev Tools)
<p align="center">
  <img src="/doc/login-page.mobile.PNG" alt="Login page (mobile)" width="300px" height="400px">
</p>

## Home page - with priviledged user logged in, desktop mode.
<p align="center">
  ![alt WorkshopManager.ng](/doc/home-page.PNG)
</p>

## Home page - ngMasonry cards with features detailed description.
<p align="center">
  ![alt WorkshopManager.ng](/doc/home-page-cards.PNG)
</p>

## Home page (mobile, emulated in GC Dev Tools)
<p align="center">
  <img src="/doc/home-page-mobile.PNG" alt="Login page (mobile)" width="300px" height="400px">
</p>

## Home page ngMasonry cards with features detailed description (mobile, emulated in GC Dev Tools)
<p align="center">
  ![alt Home page-cards-mobile](/doc/home-page-mobile-card.PNG)
</p>

## Responsive navigation menu behaviour (mobile)
<p align="center">
  ![alt Orders list](/doc/home-page-mobile-menu-expanded.PNG)
</p>

## Orders list (desktop)
<p align="center">
  ![alt Orders list](/doc/orders-preview.PNG)
</p>

## Orders list (mobile)
<p align="center">
  <img src="/doc/orders-preview-mobile.PNG" alt="Login page (mobile)" width="300px" height="400px">
</p>
