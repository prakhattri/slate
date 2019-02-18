# Manage Fullfillment via Webhooks

## Introduction
A webhook is nothing but an endpoint or an API that can be summoned to fulfill a particular task or in AI terminology, a particular intent. The primary motive to have webhook as a mode of fulfillment is to call an API that can be written in Java or node or any other language and be hosted on a server and be accessible irrespective of the scope of the classes calling it.
In this doc we'll go through this feature to see how it can be leveraged to define a fulfillment for your intent.
## Defining a Webhook
A webhook is fairly easy to define. It just requires a url and a secret key that is used to validate the requester of the API being accessed. Triniti.ai leverages the use of this feature to support vanilla fulfillment via webhooks and as part of other fulfillments as well, namely, Workflow. One can define a webhook as fulfillment for an intent and in the same way a webhook can be called for a particular node's implementation within a workflow. Refer to document on workflow for better understanding of workflow basics.
## Webhook Signature
A Webhook signature has two components, namely,
* Webhook Url : the url of the webhook/API called to fulfill the intent.
* Webhook Secret Key : a string value that is used to validate the requester by matching the values of the secret key in the signature and the one defined in the API.

To create a fulfillment via webhook for a particular intent you can click on the "call webhook" button seen at the bottom of the page once you navigate to any intent, along with other fulfillment options.

![Setup webhook fulfillment](images/webhook-setup.gif)

## Conversational Workflow Framework
Please refer to the article on workflow for detailed understanding of dialog flow management in Triniti.ai. 

Other than acting as a method of fulfillment for an intent all by itself, webhook can also be leveraged to support certain parts of steps within a workflow. As we know that workflow is essentially a sequential and logical implementation of steps (nodes), it might be required to have complex logical checks to be made to decide which step (node) to call next. It may not always be the best idea to perform these tasks within the static scripts within a node, or worse in multiple nodes. 

This is where webhooks come into the picture. you can define a webhook to implement "scipt", "pipeline", "validation" or "output" of a node in workflow. The definition/signature of the webhook is the same as above i.e. a url and a secret key, just the purpose changes. 

![Setup webhook in a workflow node](images/workflow-webhook.gif)  

## Handling Responses

Webhook response has most of the components that are generic but some are specific to its implementation within the workflow. 

####Generic Webhook Response Format
```
{
    "messages": [{
        "type": "text",
        "content": "<text_message>",
        "quick_replies": [{
            "type": "text",
            "title": "Search",
            "payload": "<POSTBACK_PAYLOAD>",
            "image_url": "http://example.com/img/red.png"
        }, {
            "type": "location"
        }]
    }, {
        "type": "list",
        "content": {
            "list": [{
                "title": "",
                "subtitle": "",
                "image": "",
                "buttons": [{
                    "title": "",
                    "type": "<postback|weburl|>",
                    "webview_type": "<COMPACT,TALL,FULL>",
                    "auth_required": "",
                    "life": "",
                    "payload": "",
                    "postback": "",
                    "intent": "",
                    "extra_payload" :"",
                    "message": ""
                }]
            }],
            "buttons": []
        },
        "quick_replies": []
    }, {
        "type": "button",
        "content": {
            "title": "",
            "buttons": []
        },
        "quick_replies": []
    }, {
        "type": "carousel",
        "content": [{
            "title": "",
            "subtitle": "",
            "image": "",
            "buttons": []
        }],
        "quick_replies": []
    }, {
        "type": "image",
        "content": "",
        "quick_replies": []
    }, {
        "type": "video",
        "content": "",
        "quick_replies": []
    }, {
        "type": "custom",
        "content": {}
    }],
    "render": "<WEBVIEW|BOT>",
    "keyboard_state": "<ALPHA|NUM|NONE|HIDE|PWD>",
    "status": "<SUCCESS|FAILED|TFA_PENDING|TFA_SUCCESS|TFA_FAILURE|PENDING|LOGIN_PENDING>",
    "expected_entities": [],
    "extra_data": [],
    "audit": {
        "sub_intent": "",
        "step": "",
        "transaction_id": "",
        "transaction_type": ""
    }
}
```

The Response is a serializable POJO and the structure above is a generic one. This is response structure is what is expected as part of webhook fulfillment response. 
It has provision to accept responses of multiple types, namely : 

* Text : a simple text response
* List : a vertical list-like-template showing list of cards/pictures.
* Button : a button that on being clicked sends back a response to the bot.
* Carousel : a horizontal-list-like-template showing a scrollable list of cards/pictures.
* Image : a simple image
* Video : a simple video

Find below the definition of all these types of templates :

###Templates 
Model Template definitions 

####1. quickReplyTextTemplate

test data : 

```
{
  "button":["Select"],"title":"XXXX 5100"
}
```
####2. imageTemplate

test data :

```
{
  "image":"imgs/card.png"
}
```

####3. buttonTemplate

test data : 

```
{
  "buttons" : [ {
    "title" : "yes"
  } ]
}
```

####4. carouselTemplate

test data :

```
[
  {
    "buttons" : [ {
      "title" : "yes"
    }
                ],
    "image" : "https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg",
    "title" : "head",
    "subtitle" : "subtitle"
  }
]
```

####5. listTemplate

test data :

```
{
  "list": [
    {
      "image": "imgs/card.png",
      "buttons": [
        "button"
      ],
      "subTitle": "XXXX 5100",
      "title": "VISA"
    },
    {
      "image": "imgs/card.png",
      "buttons": [
        "button"
      ],
      "subTitle": "XXXX 5122",
      "title": "VISA"
    },
    {
      "image": "imgs/card.png",
      "buttons": [
        "button"
      ],
      "subTitle": "XXXX 5133",
      "title": "VISA"
    }
  ]
}
``` 

####6. videoTemplate

test data :

```
{
  "video": "https://www.w3schools.com/html/mov_bbb.mp4"
}
```

####7. custom

This type can have user defined json payload to render a user defined template. The above templates are what are provided to the user by triniti.ai but user is free to define his/her own templates/response types and populate them from his/her API.

####Other components of response :

* render : tell where to render the response, as part of webview (a new dialof boz with text fields coving the entire chat space) or normally as part of chat window (like any other chat inside the wondow).
* keyboard_state : type of keyboard for the response (ALPHA|NUM|NONE|HIDE|PWD)
* status : shows the status of the API call (sucess/failure).
* expected_entities : is a list of string with all the entities that the intent is expecting to be picked up by the AI engine.
* extra_data : extra data that one wants to be the part of response.
* audit : step ID etc. defined for auditing purposes.

As part of Workflow, Webhook responses have some additional fields, namely :

* goto : if the user wants to branch to another step after the logical execution of the current step, this feature can be used for the backend to understand which step it needs to execute next.
* gotoType : pass the type of goto you are defining (e.g. to branch to another step, type = "node")
* gotoLinkedType : tell the backend if the user wants to have some kind of linking ot his logical decision outcome. It is used for back-editing. If the user wants to revisit a particular step to get the entity filled with another value this feature can be used (e.g. gotoLinkedType = "backlink")
* expected_entities : this feature we've discussed above as part of webhook fulfillment but this is also handy in case of workflow as this can tell the server that a particular entity needs to be filled before crossing the current step. It is particularly helpful in case of validation where in case of failure one can define the entity name so that the server makes it a point to get that entity populated by the user before moving on.

####Auditing
#####Security

The HTTP request will contain an X-Hub-Signature header which contains the SHA1 signature of the request payload, using the app secret as the key, and prefixed with sha1=. Your webhook endpoint can verify this signature to validate the integrity and origin of the payload

Please note that the calculation is made on the escaped unicode version of the payload, with lower case hex digits. For example, the string äöå will be escaped to \u00e4\u00f6\u00e5. The calculation also escapes / to \/, < to \u003C, % to \u0025 and @ to \u0040. If you just calculate against the decoded bytes, you will end up with a different signature.
