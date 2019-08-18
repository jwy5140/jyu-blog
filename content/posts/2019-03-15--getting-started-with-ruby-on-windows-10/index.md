---
title: Setting up Windows Subsystem for Linux and Ruby on Windows 10
category: Windows
cover: w-10-logo-red.jpeg
author: Jeffrey Yu
---

![windows-10-logo](./w-10-logo-red.jpeg "Windows 10 Logo")
Ruby development has long been dominated by MacOS and Linux - with good reason. With just a few commands, you can have your Ruby environment set up with the Rails framework and begin developing. MacOS, being unix based, also fits well with Rails commands. This has lead to little support existing online for the Windows user. However, with the introduction of Windows Subsystem for Linux, the door to Ruby and Rails has opened wide for those who lack access to MacOS.

## Enable Windows Subsystem for Linux

This is easy -- you will need Windows 10 with the Fall Creators Update (version #1709). Check your updates/versions by going to:
If your version is not correctly updated to #1709 or later, go ahead and click "Check for updates" now.
With a correct version of Windows, the next step is to enable Developer Mode on your system. This can be done from the same Settings window, as seen below:
Lastly, to enable Windows Subsystem for Linux, go to:
Scroll down to "Windows Subsystem for Linux" and check-mark to enable it.

## Install and Set Up Ubuntu

With Windows Subsystem for Linux enabled, we are now ready to install our Linux distribution.
For the purpose of this tutorial, we will be using Ubuntu as our distribution.
Installation is nice and easy -- go to the Microsoft store, search for Ubuntu, and once at the product page, simply click get/install! Once it is installed, go ahead and search for "Ubuntu" on your system. Open the application, which will launch the terminal. The first time launching, you will be prompted to enter a username and password for your user account on Ubuntu. 

Once finished, we just need to update/upgrade. To begin, enter the following command in the terminal:

```javascript
$ sudo apt-get update
```

This should prompt you for your user account password. Go ahead and enter it in.

_NOTE: No placeholder characters are shown while entering in your password. It will look as if your typing is not being registered._

You should see the packages and dependencies that are outdated. The databases for these should be updated now. 

To actually upgrade, enter:
```javascript
$ sudo apt-get upgrade
```
_NOTE: Whenever you enter a command appended by "sudo" at the beginning, it is considered an administrative command, and will require your user password._

Once this is done - we can get started with installation of Ruby!

## Install and Set Up rbenv

An easy way to install Ruby is through rbenv. Rbenv is a powerful tool that allows you to have multiple versions of Ruby installed, as well as switch between them as you wish. To install the current version of rbenv, enter the following command into your terminal:
```javascript
$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash
```
Once installed, you will have to navigate through your Ubuntu folder to get to your $HOME folder. To do so, navigate as below, replacing the **Usernames**:

C:\Users\\**Your-Username**\AppData\Local\Packages\
CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\
rootfs\home\\**Your-UBUNTU-Username**

_NOTE: The Appdata folder is a hidden folder, if you choose to navigate manually._

Once in your $HOME folder, you should see the .bash_profile file. Open this in any text editor, and add the following:
```javascript
export PATH="$HOME/.rbenv/bin:$HOME/.rbenv/shims:$PATH"
eval "$(rbenv init -)"
```
This adds rbenv to your $PATH, as well as starts rbenv automatically when opening the terminal.

## Install Ruby

Before installing Ruby, you must first install its build dependencies. Enter into your terminal:
```javascript
$ sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm5 libgdbm-dev
```
Once installed, we can get right to the point, install ruby by entering the following, replacing <VERSION> with the most current Ruby version:
```javascript
$ rbenv install -v <VERSION>
```
The "-v" is optional, and only stands to output all installation information as it occurs, in order to track installation progress.
As of this guide, the most current version of Ruby is 2.6.2, and so the command to install would be:
```javascript
$ rbenv install -v 2.6.2 
```
However, you may check all available versions through the command:
```javascript
$ rbenv install -l
```
After Ruby is finished installing, we can easily add Rails. To do so, input:
```javascript
$ gem install rails
```
_If you are unfamiliar with Rails, Ruby on Rails is a web-application framework written in Ruby, which provides a immense amount of resources when dealing with databases. It is indispensable when working with Ruby!_

Lastly, to update gems and finalize the Ruby installation progress, input:
```javascript
$ gem update
$ rbenv rehash
```
## OPTIONAL: Install and Set Up Git in Ubuntu

_For new users, Git is a version control system commonly used by developers to coordinate projects. Projects are commonly set up on GitHub, a hosting website. It has its own shell (Git Bash) for Windows. However, we will make things simpler and set it up in Ubuntu. If you would like to continue, you will need to set up a Github account first._

First, in your Ubuntu terminal, enter the following command to install Git:
```javascript
$ sudo apt-get install git
```
We then want to set up our username and user email. This will be your Github username and the email used to set up your Github account.
```javascript
$ git config --global user.name "your Github username"
$ git config --global user.email "your email address"
```
We are not done yet! We will need to set up a SSH key to gain access to your Github projects.
SSH, or "Secure Shell Protocol", is just a network tool to establish secure connections. It authenticates what we are connecting to, as well as our own computers, to protect at both ends.

First, generate a key through the following command in terminal:
```javascript
$ ssh-keygen
```
You will be asked to specify the filename for the key. Unless you have already generated a key through this method, just pressing enter will work.
There should be a prompt to create a password for the key. This is optional, and you may press enter to skip. However, this will leave you vulnerable as it is essentially a backdoor onto your computer. For those who choose to create a password, it will seem like you are prompted for a password every 5 minutes. Thankfully, we can automate this with a program called **Putty**, so that you only enter a password once.
If you chose not to create a password for your key, navigate to the file location, and open the ".pub" file in a text editor. The file should begin with "ssh-rsa". This is considered your public key. Copy the contents. Go to your Github account settings, to the section labeled "SSH and GPG keys", and add the key.
You are now able to access your Github files through Ubuntu!

## OPTIONAL: Auto-login with PuTTY

The first step here is to, well, install PuTTY. Make sure you get the correct version for your OS.
Once installed, check your folder. You should have the following files:
Go ahead and open up PuTTYgen. Once inside the program, go ahead and select "Load". You will want to then select and open the ssh key that you previously generated. Remember, this will be through this filepath:

C:\Users\\**Your-Username**\AppData\Local\Packages\ CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\
rootfs\home\\**Your-UBUNTU-Username**

Your ssh key will be in the ".ssh" folder.
Once loaded, your public key should be loaded in the box at the top (the same one added to your Github keys). Click "Save Private Key" and name your file appropriately.
You can now exit out of PuTTYgen. Open up Pageant (same folder as PuTTYgen). In Pageant, click "Add key". It will prompt you for the password associated with the key. Enter it in. Now, you will only ever be prompted for your password after first starting your computer. PuTTY will take care of the rest! Ya' did it!