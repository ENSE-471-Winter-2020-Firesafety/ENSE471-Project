# fire-safety
This folder is the home of the demo fire-safety application, and any installation or usage of the app should start here. 
Our app uses the [Ionic](https://ionicframework.com/) framework to build cross platform web/mobile apps. Currently, we only have a web version and an android version available.

## How-To
For a walk through of our application, go to the 'How-to Document' in the 'Deliverable 4' section.

## Installation
Our app uses [Node.js](https://nodejs.org/en/) in order to function. 

### Installing Node.js
To install Node.js, follow [this link](https://nodejs.org/en/) and download the LTS version of node.
To verify that Node.js was correctly installed on Windows, type 
```cmd``` into the start menu and it should start the Command Prompt application. 
Typing the command `npm -v` will print the current version of node that is installed.

### Downloading (Cloning) our fire-safety application
To download our application, go back to the [main page of our repository]('../') and click the "Clone or Download" option. Here you are able to download a zipped version of our project. This is what should be displayed before downloading:

![alt text](https://github.com/RayK3/ENSE471-Project/blob/master/Deliverable%204/installation-photos/git-clone.PNG "Cloning From GitHub")

Extract the project from the zipped folder, and maneuver into the extracted folder within the Command Prompt. Type or copy/paste in `cd fire-safety` to change into the application folder. 

The only step left for downloading our app is to download all of the other software packages that our app uses. This can be done with the command `npm install`.

## Running the application
Assuming that the downloading and installing of packages succeeded, the app should be ready to launch. Make sure you have a browser open (like this one) because the app will attempt to make a new tab to run off of.

To start the app, make sure you are in the `fire-safety` directory, and type or copy/paste the command `ionic serve`. This will open a new tab in the browser running the app. 

### Running on Android and iOS
Currently the application only supports running on an Android device, but the process to set up an emulator and the required software is beyond the scope of these instructions. 
