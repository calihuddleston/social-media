# Social-Media

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Table of Contents

- [Description](#description)
- [Installation](#install)
- [Screenshots](#screenshots)
- [Test-Instructions](#test)
- [Technology Used](#techused)
- [Contact-Information](#email)

## Description:

Keep track of users with associated thoughts and reactions. Able to delete users and their associated thoughts. Post new users, thoughts, and reactions and update as well.

## Installation:

Clone Repository:

1. Open terminal.
2. In terminal, type or copy and paste: git clone `git@github.com:calihuddleston/social-media.git`
3. Hit enter.

NPM Packages:

- All NPM packages required for this API (Express, Nodemon, MongoDB) are already listed as dependencies in the package.json file.
- Ensure that Node.js is installed on your machine (you can check this by running `node -v` in the terminal). The `social-media` API will be invoked by entering `npm start` in the command line. Node.js Download: https://nodejs.org/en/download/

1. In the terminal, `cd` into the `social-media` directory.
2. Run `npm i` or `npm install` to install dependency node-modules.

Start Application:

1. You'll see the `API server running on http://localhost:3001` in the terminal console. You can view the app on http://localhost:3001/

## Screenshots:
![social-media](https://user-images.githubusercontent.com/102004484/217681731-5275f3d5-113f-4f60-95b3-5d7a65291657.png)

https://watch.screencastify.com/v/dIT9gabYOaqdaD774fWa

## Test Instructions:

1. Ensure Insomnia is installed. 
2. If above application is not installed - follow installation instructions and install. 
    Insomnia: https://insomnia.rest/
3. Open Insomnia.
4. In the upper right corner of Insomnia - click `+ Create` dropdown menu.
5. Click `Request Collection.`
6. Name request collection and click `Create.`
7. Click `New HTTP Request.`
8. In the URL box, ensure HTTP request is set to desired request form (GET, PUT, DELETE, etc).
9. In the URL box, type the URL `localhost:3001/api/users`
10. Have fun with the API and play around!

If you'd like to add users or thoughts: 
1. Ensure the HTTP request is set to `POST`
2. Ensure the URL box contains the URL `localhost:3001/api/users`
3. Below the URL box, ensure the `BODY` is set to `JSON`
4. In the JSON body give the parameters of "name" and "email"
      example: 
      <Code>
        {
            "username": "test-user",
	          "email": "test-user@email.com"
        }
</Code>

## Technology Used:
  	- Node.js 
 	- Express.js 
 	- MongoDB 
  	- Nodemon

## Contact Information:

GitHub Username: calihuddleston
GitHub Profile: https://www.github.com/calihuddleston
Email: calihuddleston@gmail.com
