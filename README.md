![](https://cdn-images-1.medium.com/max/800/1*YoRclV107T0W_erX7mJTTA.jpeg)

### Amazon Alexa Tutorial: Build Your Own Skill 

The Alexa Skills Kit (ASK) allows developers to leverage Amazon’s knowledge and
pioneering work in the field of voice design to create custom solutions, or
skills, that that can be used with Amazon devices such as the Echo and Dot.

![](https://cdn-images-1.medium.com/max/800/1*f81pj9phkW4V5n-5bKaAlQ.png)

<br> 

To assist the development community Amazon has created a collection of
self-service APIs, tools, documentation, and code samples they dubbed the Alexa
Skills Kit (ASK) that makes it fast and easy for you to create your own custom
skills. Skills are equivalent to apps for Amazon’s voice-powered platforms.

![](https://cdn-images-1.medium.com/max/800/1*XlHvsU3ejM4PF6YDjFGgig.png)

Today we’ll focus on building your first custom skill that you can run on your
favorite Alexa device. We’ll be working from this GitHub repository. The **app**
directory is for you to work in and the **solution** directory has the completed
code that you can use as a reference.

### The result

<br> 

### What you’ll need

* [Amazon Developer Portal Account](http://developer.amazon.com/)
* [Amazon Web Services Account](http://aws.amazon.com/)
* The sample code on
[GitHub](https://github.com/alexa/alexa-cookbook/tree/master/handling-responses/dialog-directive-delegate).

### Step 1: Define your skill at developer.amazon.com

We start by defining our new skill on the Amazon developer site. Go to
[developer.amazon.com](https://developer.amazon.com) and click the “Sign In”
link on the top right. When you’re asked to sign in you should use the same
credentials you used when configuring your Alexa device. That way, the skills
you build will automatically be available to your device. 

![](https://cdn-images-1.medium.com/max/800/1*GfF1rOJRVU8TY7-9_IzoQA.png)

If you don’t have a developer account yet you’ll be asked to fill out some
information before proceeding. Finish filling out the required information and
then click on the “Alexa” tab.

![](https://cdn-images-1.medium.com/max/800/1*AgNfwr_iz5fXhurBbyZVxg.png)

Next, you will click on the Alexa Skills Kit “Get Started” button.

![](https://cdn-images-1.medium.com/max/800/1*i1ZPm_uFkKVLx10DBo-6nA.png)

Then on the following page click the “Add a New Skill” button on the right
towards the top.

![](https://cdn-images-1.medium.com/max/800/1*c9Jq4E28gv3mWkbkgsCzow.png)

Now we can begin filling out information about the skill we are going to create.
We are going to completely control the skill so select “Custom Interaction
Model”. The other options, Smart Home and Flash Briefing, gives you less control
over the user’s experience with a trade off of development simplicity but are
very specific in nature. In our case, we don’t want to control a home device or
create a news briefing, we want to create a simple skill that will tell us what
NBA games are being played today. So let’s name our skill “My NBA”. A user will
activate the skill by referencing it when speaking to the Alexa. For example:

> “Alexa, ask My NBA if there are any games tonight”<br> “Alexa, ask My NBA what
> channel the Laker game is on”

Hit “Save” once you fill in the form.

![](https://cdn-images-1.medium.com/max/800/1*ubQ-eUxhoJP4HN7QKWNesg.png)

<br> 

### Step 2: Create and host your skill’s code at aws.amazon.com 

<br> 

![](https://cdn-images-1.medium.com/max/800/1*HveRDXC-v21ID9Rlyr3pww.gif)

1.  node.js — to code and test your skill locally before putting it on aws
1.  alexa packages — to assist intents and utterances and testing locally
1.  review folder structure
1.  show code for simple example, point out code for 3rd party packages and explain
that’s the reason why you have to zip and upload vs use online editor
1.  run in browser and show intents, slots, utterances and response
1.  prep for zip upload by doing npm install
1.  compress to zip
1.  show how to upload on aws
1.  now modify code to show “conversational” app by setting value from true to false
1.  also add reprompt text
1.  add slots in the code
1.  show how to accomodate slots on the interaction model at developer.amazon.com
1.  don’t forget to point out setting the handler on aws to the name of zip file

### Usefull Links

[https://github.com/rvanderwerf/grails-alexa-skills](https://github.com/rvanderwerf/grails-alexa-skills)
(a bunch of good links at the bottom.

