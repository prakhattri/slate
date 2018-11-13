---
layout: documentation

title: Documentation

search: true
---

# Testing something out
_Triniti.ai_ allows you to create applications for users to be able to converse with triniti engine. You can create varied ranges of chatbot such as a pizzabot, a carbot, a phonebot etc. To learn how to create a chatbot from scratch for your company’s online services, click [her                 e](#Overview)

---
# Overview

##Create intelligent bots without coding - A how to guide
This tutorial shows you how to build a simple triniti.ai workspace, walking you through the most important features of triniti. You'll learn how to:  

* [Create a triniti.ai account](#sample) and [your first triniti.ai workspace](Sample1), which lets you define a natural language understanding model.

* [Extract parameters](#sample2), which let you define how data is extracted from user utterances(what an user says) using intents and entities.Understanding Intents and entities is a very important part in chatbot making.  Entities let you categorize important parts of user utterances. Intent lets you extract the goal/action to be done from a specific utterance, giving you more flexibility.

* [Manage states with contexts](#sample3), which lets you persist conversation state across turns of a conversation.

* Integrate with the Google Assistant, which lets you deploy your triniti.ai agent as actions that users can invoke through the Assistant.
---

# How to create a triniti.ai account

This page describes how to create and log in to a triniti account.

##Create a triniti.ai account
* Click **Create account**.

* Fill in the details, check the **I am not a robot** box and select **Create Account**.
> **Note:** You can create an account only using your _company email address_. Triniti portal does not recognise emails created via free service. (example@gmail.com, example@yahoo.com etc. will not be accepted.)

* A verification email from us would be sent to your email address. Open the email and follow the instructions given in the email to complete creating an account.

##Login to the triniti.ai account
You can directly login to the triniti portal if you are already a user. If not, login to the portal by following these steps.

* Type in the email address with which you created an account and its password.

* Select **login**.

You have now successfully logged into the triniti portal. Refer [Extract parameters](#sample1)

---
# Create your first triniti.ai workspace

This page describes how to create and try out your first triniti workspace.

>**Note:** Before you start, make sure you've created a Triniti.ai account.

* Open a browser and [log in to triniti.ai][Login].

[Login]: https://dev.triniti.ai/login

* Click ** Workspace +** in the left menu.

* Click **Add workspace**. Type in your workspace name, select preferred language, your country and select the **Next** button.

* Choose the project type you wish for and select the **Next** button again. Refer to [project types](#projecttypes) to understand what each project type has, to offer you.

* Choose the feature you require and check **I am not a robot** box. Refer to [features](#features) to understand what each feature has in store for you. Based on the feature selection, the costs may vary. Look at the [pricing section](#pricingsection) for its details.

* Now select **Create**.
#####Congratulations!!! You have now created your very first bot. It is as simple as that!

>**Natural Language Understanding**
Workspaces are best described as **NLU** (Natural Language Understanding) modules. These can be included in your app, product, or service and transform natural user requests into actionable data.

---
# Extract parameters

---

# Concepts

##Intents:

Probably all kind of sentences should have an intent. Intent describes **an action that should be done**. They can be called as the _goal or purpose_ of what the user says to the bot.

#####For example,
* When the user says, “I want to order a pizza pepperoni with extra cheese.” to the chatbot, the intent here is to ‘**Order**’.(Since, order is the action that needs to be done here).

* You don't necessarily need to know what order or any other factors.

* For every intent, the user provides a set of sample sentences to train on under ‘[user says](#usersays)’. A minimum of 20 user utterances (What the user says) for every intent is required to produce a quality bot.

###How to create intents:
* Go to **intents/use cases** on the left.
* Select ‘**add new intent**’.
* Name the intent for example, ‘Order’. Keep in mind while naming intents you can use letters, numbers, underscore and dashes but not spaces. For a pizzabot, intents will include ‘Delivery’, ‘Pricing’, ’cancel’, ’billing’ etc. Type in all possible  ‘user says’ for each of them.

>Naming intents is for the bot to understand that the particular user’s utterance’s “intent” is to order.This will enable the bot to convert this piece of information into acctionable data.

___
##User says:

_Different variations_ of how the same question can be asked by a user. The more variation is added, the better the agent can understand. To order a pizza ([Intent](#intent)-order), a user can say

         I want to order a pizza Margarita with extra cheese.
         Can I have a small Margarita, please?
         A pizza Margarita, thanks.
         I want a Margarita, medium.
         I would like a Margarita.
         I am in a mood to have a margarita with extra cheese
         Give me a margarita please
         Your margarita tastes good. I would like to have one of that now.
         Margarita large, please.
         One margarita.
         I would like to eat a margarita now with extra cheese.
         I am hungry.I need some Margarita
         I would love to have a margarita
         I am in for a margarita
         Can you bring me one margarita with extra cheese thin crust
         Ordering one cheese burst margarita.

These sentences have to be fed in the triniti engine under the console option **Intents>Add new intent>user says** with entities inside each of these utterances, if any.

---

##Entities:  

Entities are a general term which will have many specific values to it. An entity represents **a term or object in user says, that provides clarification or specific context** for a particular intent. By recognizing the entities that are mentioned in user says, the Triniti service can identify the required parameters to fulfil the action.

###Entity - representation
Entities have to be mentioned within curved brackets **{}**. Keep in mind while naming entities you can use letters, numbers, underscore and dashes but not spaces.

#####Example:

‘I would like to eat a margarita now with extra cheddar cheese’.

Here, the specific values for the intent "order" are **margarita** and **extra cheddar cheese**.These are henceforth called values for the entities {Pizza-name} and {Extra-Topping}

Entities and values corresponding to a pizzabot will include,

| Entity 1 = Pizza-Name|Entity 2 = Extra-toppings|Entity 3 = Sauce|
|----|---|---|
|Margarita|Feta|Pesto|
|Buffalo Chicken Pizza|Goat cheese|Bechamel
|BBQ Bacon Cheeseburger Pizza|Mozzarella|Pumpkin Pizza Sauce|
|Meat Lovers Pizza|cheddar|Thai Chili Sauce|
|Premium Garden Veggie Pizza|Caramelized onion|Curry Sauce|
|Pepperoni Pizza|Pepperoni|Tandoori|
|Italian Meatball Pizza|Bacon|Alfredo Sauce|
|Chicken-Bacon Parmesan Supreme Pizza|Buffalo chicken|Sun-Dried Tomato Sauce|
|Bacon Spinach Alfredo Pizza|corn|Wasabi Sauce|
|Mozzarella Crust Pizza|Pineapple|Thai Peanut Sauce|
|Supreme Pizza|Jalapeno|Zaatar|

|Entity 4 = Crust-Thickness|Entity 5 = Size|
|--|--|
|Thin Crust|Medium - 10" / 25 cm|
|Authentic Wood Fired Crust|Italian - 12" / 30 cm|
|Thick Crust|Large - 14" / 35 cm|
|Stuffed crust|Family XXL - 16" / 40cm|

Hence, while typing out user utterances under intents, you should mention the entities along with them.

‘I would like to eat a {Pizza-Name}now with {extra-toppings}’ is the correct input .

Each entity can have one to many values. Once you add an entity, it will get saved under use-cases.The ADD+ icon appears as soon as you open the curved bracket.

>One most important thing is to note how you frame the user utterances for a particular intent. For a given intent you should specify as many user utterances as you can with all the entities in it.

###Types of Entities
Entities in triniti.ai are of three types
#####Dictionary based entity.
Entities that are there in a dictionary. It mainly contains text such as the person(Adult or infant), names-of-restaurants, names-of-airlines, size-of-pizza etc.You need to add value to the entity once it is created. Values can include only a finite set.

#####Pre-Built entity.
For your convenience, all the infinite set values such as numbers,date,time and money and finite set values such as any city,state or country in the world will be pre-built by us. These are called pre-built entities. You just have to use them in your utterances. To view and download pre-built entities, click here.
#####Regular expression based entity.
This will contain all the detection logics where identification can be done using patterns or regular expressions. For example, email, phone_number, PNR, Pan card number etc.

##Prompts
A prompt is used whenever a bot needs input from the user .

* **Invocation prompt:** Any chatbot must have an invocation. It is similar to saying hello to a friend. Before a user starts a conversation, the bot should introduce itself, tell the user about it’s functionality and motivate the user.

 For example, for a pizzabot,
Answer: Hey, welcome to triniti’s ‘kenpizzapoint’. I am triniti. May I take your order?
Click on the link below to get to the menu card.

Whenever you need input from a user, you can send a prompt, wait for the user to respond with input, and then process the input and send a response to the user.

###How to add prompts

As you add entities to an intent, it will keep them saved below use cases. Click on the entit one by one and mention their respective prompts and its user says.

Let's go back to our pizzabot example.

When the user says,
‘I would like to eat a margarita now with extra cheddar cheese’,
'Extra large'

   * The **intent** will be recognized as **order**
   * Entities, pizza name, extra toppings and size will be identified.
   * Entities crust thickness and sauce would be found missing.

* #####for crust thickness, you can type out the prompt as,
‘In our Pizzeria, we serve thin, thick, flatbread crust and authentic wood fired crust.Our restaurant is widely known for its authentic wood fired crust. Which one do you prefer?’

* #####For Sauce, you can type out the prompt as
‘What sauce would you prefer. Our restaurant has the most diverse sauce choices in the heart of Italy. You can choose between Pesto, Bechamel, Pumpkin Pizza Sauce, Thai Chili Sauce, Curry Sauce, Alfredo Sauce, Sun-Dried Tomato Sauce, Wasabi Sauce, Thai Peanut Sauce Zaatar or Tandoori.

Now give a minimum of 20 utterances/user says for each prompt.This is just for cross checking. Give utterances with the missing entities.


###Invalid prompt
If your bot does find an entity, but it’s not present in the list of values of your entity type, the invalid prompt is reached.This bot only serves pizza, so if a user says “Hi, I want to order a hamburger”, the bot would know hamburger is not a valid entity.

---
## Small talk:
You may configure to define responses for little chitchats that the user might want to have.

How to train the bot for small talk.
* Click **Small talk** in the left console
* Click on **add new catagory** .
* Type **invocation**(say).
* Press **enter**.
* Click on the catagory **invocation** and add its relevant question and answers.
* Click **save** .

You can repeat this process for as many catagories as you want.  Type all the possible user asks in question and bot’s answer in answer.

Here are some examples for small talk categories with examples

**Anything else**

 #####Example1:
Question: How are you?
Answer: Wonderful as always. Thanks for asking.

 #####Example2:
Question: You're so sweet.
Answer: Thanks! The feeling is mutual.

**End conversation**

 #####Example:
Question: Thank you. Good bye.
Answer: Thank you for choosing us. We hope you enjoy your meal. See you again. Take care. :)

>Small talk is used to provide responses to casual conversation. This feature can greatly improve a user's experience when talking to your user.

_____
#Project types
##Custom Workspace
>Before entering into this section, please look into [concepts](#concepts) and have a thorough understanding of intents, entities, small talks, prompts and user says

###The Triniti console

When you click on the custom workspace that you created, you should see the Triniti console and the menu panel on the left.

For a custom workspace, you will see custom project type console. Refer to the right side diagram.

###How to develop a Custom workspace

* Click on the **workspace name** on the console bar and click on **Add New Intent**
* Type in the **usecase name** and **user says**.
* Think well and name as many varied intents/use cases as your can..
* Type in the user ytterances for each of them along with entities, prompts and its user says.
* Click **Save**.

___
## FAQ workspace

###The Triniti console

When you click on the FAQ workspace that you created, you should see the Triniti console and the menu panel on the left.

For a FAQ workspace, you will see FAQ project type console. Refer to the right side diagram.

FAQ knowledge bots may simply aim to answer frequently asked questions. Questions having static response comes under FAQ workspace. FAQ bot has the built-in ability to scrape questions and answers from an existing FAQ site, plus it also allows you to manually configure your own custom list of questions and answers.This is different from custom workspace in a way that it does not convert user requests into actionable data.It simply gives the data.Hence, intent and entities are not a part of Faq workspace.

FAQ workspace sample question and ansers,if it were a pizzabot


|Example questions|Example answers|
|---|---|
|When will your shop open?|The shop opens at 7:30 in the morning. Shop is closed on saturdays.|
|Do you accept Paypal?|Customers will need to choose PayPal as a payment option in Kenny’s pizza point's app, which only allows customers to use PayPal or Kenny’s pizza point gift cards to make purchases. Kenny’s pizza point does not currently accept BitPay|
|Is Kenny’s pizza point delivery free?|Kenny’s pizza point Offers 'Free' Delivery (But There's A Catch).Kenny’s pizza point has announced it will no longer charge a delivery fee for online orders, which can save customers up to $8.|
|How many slices are on a large Kenny’s pizza point pizza?|8 slices. Medium and large pizzas from Kenny’s pizza point both have 8 slices, but the large slices are obviously bigger.Kenny’s pizza point has awesome offers going on, did you know?|
|How big are Kenny’s pizza point pizzas?|A medium pizza is 12 inches in diameter, or about 113 square inches. A large pizza is 14 inches in diameter, or about 154 square inches. A PANalicious (rectangular) pizza is 8.5 x 12 inches, or about 102 square inches.


###How to develop a FAQ workspace

* Click on the **workspace name** on the console bar and click on **Add new product** and type the **product name**.
* Type any other name you find synonymous to the name of the product created, in synonyms column(optional)
* Frame your questions and answers by clicking on **Add Question Set**. You can add as many question sets as you want.
* Click **Save**.

>You can also export or import the products along with the question sets using the two small square icons to the top right.



###Generate Variants

We provide additional tools to help you create content better. ‘Generate variants’ which appears when you click on ‘Add question set’ is incredibly helpful in a way that, it can be used to produce different ways of forming a single question.This helps you save a lot of time and also lets you create a more user-friendly bot. It is also capable of generating the question by itself if you provide just the answer.

---

# Deploy and Launch
* Select ‘Deploy to your bottom left.
(Deploy trains the triniti.ai bot to learn what has been feeded to the question sets.Our unique approach to natural language yields faster deployment, regardless of how much data is available to configure machine learning. Standard responses for questions, statements, errors, and warnings can be randomized to provide a much fulfilling experience.)

* Select ‘Launch’ to your bottom right. (Launch lets you test the workspace you had created.Once your test workspace is ready, you can click on it to test your bot.)

---
# Customize your app
You might want to customize the way your chatbot looks on the webpage and the exact brand colour scheme is important to you. For this, choose **Customize** on the left sidebar. Customize lets you choose your template, create your title name and welcome message, choose primary colour and finally your logo. Your nice looking bot is now ready to function.
(The web SDK source code is available in github if you wish to customize templates.)

---
# Make Public
Making it public is a very simple thing to do.Click **Publish** on the left hand side bar. Note that every deploy creates a snapshot of the existing workspace which can be reverted to at any time. You can choose a specific snapshot and make it live/test it within the workspace. **Make public** lets you access your bot beyond Triniti.ai.You can also test different versions after going live.

---
# Enable Channels
The channels include many popular services, such as Facebook Messenger, Slack, Skype,Web HDK and several others. It is very easy to assign a bot to a channel. Click **Channels** option on the left hand side bar and click the channel through which you want to make your bot go live.  WebSDK, facebook messenger and telegram are pre-configured for you in triniti.ai.

Follow these instructions to connect your workspaces to your web SDK, facebook messenger and telegram bot.

## Telegram
* Launch your workspace and keep it ready.
* Get a Telegram access token from BotFather.
* Insert it in the **Telegram Token** field.
* Click **Start**.

## WebSDK
* Design and test your workspace.
* Launch your Messenger bot.
* Under Channels>Web SDK, a message endpoint code will be generated.
* Message endpoint code takes the command or data, makes it into a message, and sends it on a particular messaging channel. Look at api reference for more information .
* A demo chat url will also be generated.

This is a simple web chat. Share the URL to your webpage. Note that it is just a demo and not a real chat.

## Facebook messenger
* Design and test your workspace.
* Launch your Messenger bot.
* Get your Facebook Page Access Token and insert it in the field below.
* Create your own Verify Token (can be any string).
* Click **Start**.
Use the Callback URL and Verify Token to create an event in the Facebook Messenger Webhook Setup.

You have now successfully connected your bot to channels.

---
