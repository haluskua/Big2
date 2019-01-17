
// Leraning sass with gulp and NPM

An online portfolio for Omphalus Kua

.. since the start of this project I have learned a lot as
I am a web developer enthusiast


*** sidenote --

    Since updates for NODE and gulp

    i ran into the messages such as "gulp[28624]: src\node_contextify.cc:633: Assertion `args[1]->IsString()' failed."
    when I try running gulp on the terminal

in gitbash

#Solution
I tried running npm i natives
I deleted package-lock.js
I ran $ rm -rf node_modules
then
npm install

This fixed the bug - as in I was able to run gulp with no errors..
Still there are few deprecated modules that needed to be updated
