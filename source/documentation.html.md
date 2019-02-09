---
layout: documentation

title: Documentation

search: true
---

# Overview
--Triniti.ai

# Quick Start
Crafting intelligent micro conversations

#Concepts
##Workspaces
##Intents
##Entities
##Dialog
##Acronymns
##Fullfillment
##SmallTalk
##CognitiveQnA (FAQ)
##Channels
##Training & Provisioning
##Analytics
##Reports
##Settings
##Versioning

# How To / Tutorials

-A triniti Guide

## Overview
This tutorial walks you through the process of building a workspace from scratch. It also provides you the best practices in designing a workspace.

## Manage Your Account


![Account Setup](account.gif)

### Signup for a New Account




You can register to [triniti.ai](#https://triniti.ai) by following these steps.

* Open a new tab from your browser.
* Type in [https://developer.triniti.ai](#https://developer.triniti.ai)
* Then, click on “Create Account” on top.

1.	Open URL: <https://developer.triniti.ai/>
2.	Click on the “Create Account” link.
3.	Enter First name, Last name, Email id, Mobile number & your desired password.
(CreateAccount1.png)
(CreateAccount2.png)
... (Note: All fields are mandatory)
4.	Password should be 

- should be 8 characters long
- at least one ‘upper case letter’
- at least one ‘small case letter’
- at least one ‘Special Character’( @, #, $ .. )
- at least one ‘Number’

5.	Click on the “Create Account” button.
6.	An email notification will be sent to the registered email address.(CreateAccount3.png)(CreateAccount4.png)
7.	Access your registered email & click on the “Verify Email” button.
8.	Verification will be completed successfully & the Home page will be displayed.
(CreateAccount5.png)


> At the moment, we accept only sign ups using corporate email addresses. Triniti portal does not recognise emails created via free service such as  example@gmail.com, example@yahoo.com or any other similar Id.

* Fill in the form. 


> While creating your password, make sure to make it at least eight characters long with at least one special character.

* Once you fill in the form, carefully go through the Terms of Services. By selecting ‘proceed’, you are giving us an acknowledgement that you have successfully read our terms and conditions.
* Select the ‘Create Account’ button.

A veriﬁcation email will be sent to the email address you have used, to create your triniti account. Open the email and follow the instructions given to complete creating your account. This will lead you to the Triniti website’s home page.


Congratulations. You have created your first triniti account! 

We are so happy to welcome you onboard. Eagerly looking forward to collaborate and grow along with you! 

### Login to your triniti account

> If you already have an account, select the ‘login’ button on top where it reads "Already have an account? Login"

* Open a new tab from your browser.
* Type in [https://developer.triniti.ai](#https://developer.triniti.ai)
* Enter your email id and password and select the  “Login” button. 

### Recover your Triniti account

To recover your triniti account, 

* Open a new tab from your browser.
* Type in [https://developer.triniti.ai](#https://developer.triniti.ai)
* Select ‘Recover Account’ at the login page 
* Enter the email id you used to created your triniti account.
* Click on “Recover”.

An email will be sent to your mail address. Follow the instructions given in the email to recover your triniti account.


1.	Open a browser on your laptop/desktop.
2.	Enter the URL & press enter.
3.	Click on the “Recover Account”
4.	Enter your registered email address & “Send email” button.(RecoverAccount1.png)

- Password reset confirmation will be displayed with an option of “Resending email” in case email not received in your registered mail id.(RecoverAccount2.png)
- An email notification will be sent to your registered email address with further details(RecoverAccount3.png)
- Click on the “Reset password” button on the email notification.
- Password reset option will be displayed on the browser.
- Enter your new password & confirm.
(RecoverAccount4.png)


##Manage Your WorkSpace


### Create a Workspace

**Workspace** as the name indicates, is a space that triniti provides you for you to do the bot building process. It is similar to a digital folder that you will be provided with, upon purchase to start with building your bot. 
> Before you could start, make sure you have a Triniti.ai account. If you do not have an account, go to triniti’s login page and create an account.

This section describes how to create and try out your first triniti.ai workspace.


![Create Workspace](workspace-creation.gif)

* Open a new tab and log in to triniti.ai Login webpage.
* Once you have gained access to our Trinti dashboard, click on “Create Workspace +”.
* Type in your workspace name, choose your preferred language, your country and choose the project type you want to create and select the “Next” button.
* We provide three types of workspace.
 - [Cognitive QnA](#faq-workspace)
 - [Conversational AI](#conversational-ai-workspace)
 - [Cognitive QnA & Conversational AI](#faq-workspace)


> Refer to (project types)[#projecttypes] to understand each of its features.
 
* Along with different base data sets to bootstrap your workspace. (Just that the questions will be treated in that domain and our bot will understand words that make sense in that domain.)
 - [Retail-Banking](#retail-banking)
 - [Corporate-Banking](#corporate-banking)
 - [Wallets](#wallets)
 - [Insurance](#insurance)
 - [Medical](#medical)
 - [Custom](#custom)
* We provide multiple plans in order to target your specific needs. Please go through the [features](#features) section to understand our offerings. We have the following payment plans.
 - [Free](#free)
 - [Basic](#basic)
 - [Premium](#premium)

> Depending on the plan you choose, the costs may vary. Look into the (pricing section)[#pricingsection]  for details.

Once you have chosen your plan, go ahead and create your first workspace by selecting the ‘Create Workspace’ button.

Congratulations!!! You have now created your very first workspace !!!

## Manage users for a Workspace

## Delete a Workspace

## Manage Settings 

## Manage Messages 

## Manage FAQ

### Adding New FAQ's


#### How to setup FAQ (import from excel, csv or from website URL)?

1.	Click on workshop name, and import the FAQ to Train 
2.	On Importing the File, the list of Added FAQ is shown in the FAQ page
3.	On importing from URL, copy paste the website FAQ page URL
4.	Select Import button
(ImportFAQ1.png)

#### How to change the FAQ response format?

1.	Add New question in user asks field, add the answer in Bot Answer field and select default channel.
2.	Click on Add Question Set.
(FAQResponseFormat1.png)
3.	Click on Change format to view different available formats.
(ImportFAQ3.png)

A.	Plain Text:

- Enter the answer in write answer field and click on Add question set for creating the new question.
(ImportFAQ4.png)

B.	Buttons:

- Enter the title and click on Button to select Link or post back.(ImportFAQ5.png)
- Selecting the Link, add type button title, and enter the URL.(ImportFAQ6.png)

C.	Carousel / List:

- Click on carousel or List button in change format view page  (ImportFAQ7.png)
- Click on Add card(carousel), Add Item (List), enter the image URL, Title and subtitle(ImportFAQ8.png)
- Click on Add Button, select Link or Post back and enter button title and button URL(ImportFAQ9.png)

D.	Image:

- Select Response format as “Image”.
- Copy paste the image URL.(ImportFAQ10.png)

E.	SSML:

- Click on SSML by selecting change format, enter the SSML answer in write answer field.(ImportFAQ11.png)

#### How to add Quick replies:

- Click on Add Quick replies, enter the title and pay load in the fields type quick reply title and type quick payload respectively.(ImportFAQ12.png)
- For all question able to add tags, below the bot answer.(ImportFAQ13.png)
- Once after adding the user ask, bot answer and tag field click on Add question set for creating the FAQ.(ImportFAQ14.png)

#### How to add Smalltalk?

a.	Select Smalltalk option from the left menu
b.	Click on view to edit the answer.
(SmallTalk1.png)

#### How to set the minimum confidence score?

We can set the Minimum confidence score to get the answers from bot. If user utterances are less than the minimum confidence score configured then then error message will be displayed.

a.	Select the Setting icon image displayed beside bot in left menu.
b.	Select General tab.
c.	Set minimum confidence score as 65.
d.	Configure “Default Error” message from messages tab.
(General1.png)
(General2.png)
(General3.png)

#### How to customise websSDK?

We can customise the webSDK look and feel.

a.	Select “Channels” from left menu
b.	Select the “Settings” icon displayed in webSDK channel.
(Channel1.png)
(Channel2.png)
(Channel3.png)

#### How to embed webSDK into website?
#### Code Snippet?

### Managing KeyPhrases
### Handling Unknown Words
### Formatting FAQ Responses
### Redirecting FAQ's to Workflows
### Setting up Channel Specific Responses
### Handling Ambiguity
### Managing FAQ Settings
### Fine Tuning FAQ's

## Define Intents

### Adding Intents
### Annotating & Linking Entities
### Importing & Exporting Intents

## Manage Dialogs

### { Direct Link } to Concept

## Definine Entities

### Adding Entities
### Managing Dictionary Entities
### Managing XXX Entities
### Importing & Exporting Entities
### Default Entities

## Manage Small Talk

### { Direct Link } to Concept

## Define Acronymns

### { Direct Link } to Concept

## Manage Fullfillment via Webhooks

### Defining a Webhook
### Webhook Signature
### Conversational Workflow Framework
### Handling Responses

## Manage Fullfillment via Workflows


### Defining a Workflow
### Configuring a Workflow
### Handling Validations
### Business Logic via Webhooks
### Scripting via Javascript
### Scripting via Groovy
### Conversation Model Reference
### Handling Responses
### Debugging Workflows

## Manage Channels

### Managing Web & Hybrid
### Customizing Web & Hybrid Channels
### Managing Android 
### Managing IOS 
### Managing Facebook Messenger
### Managing Line
### Managing Telegram
### Managing Viber
### Managing Slack
### Managing Skype
### Managing Skype for Business
### Managing Slack
### Managing Cortana
### Managing Alexa
### Managing Google Assistant & xx
### Managing Twilio
### Managing AWS Connect
### Managing Twilio XXX
### Managing Jio
### Managing Livebank
### Managing WeChat
### Managing Authentication for Social Channels
### Managing Authentication for IOT Channels

## Train ,Deploy & Publish your Workspace


### Training your Workspace
### Starting your Workspace
### Publishing your Workspace

## Manage Self Learning 

### Analysing the Report
### Incorporating Intent Utterances
### Incorporating Dialog Utterances
### Incorporating SmallTalk Utterances
### Incorporating FAQ Utterances

## Manage Customers & Support

### Analysing the Report
### Customer Profile
### Customer Conversation History

## Manage Metrics

## Manage Billing & Subscription

### Setting up Profile
### Setting up Payment Information
### Managing Plans
### Managing Invoices


## Debug Issues

### Using SmartView
### Using SmartAssist
### Cognitive QnA Issues
### Classifier Issues
### NLP Issues
### NLU Issues
### Context Issues
### Small Talk Issues

## Improve Accuracy 

### Using SmartAssist
### Finetuning Settings


## Manage Updates & Upgrades

## Use Pre Built Domains

### Cross Link

## Manage Ontology

## Migrate from other Platforms

### Migrating from Watson
### Migrating from Luis
### Migrating from Api.ai



# API
# Pre Built Domains
## Retail Banking (Intents - Supported Entities + Modifiers)

# Data 

## General Guidelines
## Guidelines for Intents
## Guidelines for Dialogs
## Guidelines for Entities
## Guidelines for CognitiveQnA
## Guidelines for SmallTalk

# Reference

## Triniti API SDK

## Fulllfillment Response JSON Structure
## Fulllfillment Response SDK
## Webhook Signature
## Workflow Script Reference
## Webhook Reference
## HelloTicket
## HelloWorld
## Channel SDK's - Web
## Channel SDK's - IOS Hybrid
## Channel SDK's - Android Hybrid


# Examples

## HelloTicket
## HelloWorld

# Resources
## Language Support
## Infrastructure / Hosting
## Pricing & Limits
## Release Notes
## Roadmap
## Blog

# Academy

## Webinars
## Videos

# Support

## Forums
## KnowledgeBase
## AskUs
## SLA's








---
