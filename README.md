# Social-Media

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Table of Contents

- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Guidelines](#guidelines)
- [Test-Instructions](#test)
- [Technology Used](#techused)
- [Contact-Information](#email)

## Description:

Keep track of users with associated thoughts and reactions. Able to delete users and their associated thoughts. Post new users, thoughts, and reactions and update as well.

## Installation:

1. Open terminal.
2. In upper corner of GitHub repo, click < Code > dropdown menu. 
3. Copy the SSH link.
4. In terminal, type "git clone" and paste the SSH link afterwards. 
5. Hit enter. 

** API repo should successfully be on your desktop or downloads as a directory folder.

## Usage:
![social-media](https://user-images.githubusercontent.com/102004484/217681731-5275f3d5-113f-4f60-95b3-5d7a65291657.png)

https://watch.screencastify.com/v/dIT9gabYOaqdaD774fWa

## Guidelines:

NA

## Test Instructions:

1. Ensure Insomnia is installed. 
2. If above application is not installed - follow installation instructions and install. 
    Insomnia: https://insomnia.rest/
3. Once installed - open terminal and cd into `social-media` directory.
4. Run `npm start` to begin local host server.
5. Open Insomnia.
6. In the upper right corner of Insomnia - click `+ Create` dropdown menu.
7. Click `Request Collection.`
8. Name request collection and click `Create.`
9. Click `New HTTP Request.`
10. In the URL box, ensure HTTP request is set to desired request form (GET, PUT, DELETE, etc).
11. In the URL box, type the URL `localhost:3001/api/users`
12. Have fun with the API and play around!

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
