---

layout: api

title: API Reference

language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

search: true
---
<h1 id="triniti-ai">Triniti.ai v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Triniti Api Documentation

Base URLs:

* <a href="https://api.triniti.ai/v2">https://api.triniti.ai/v2</a>

<h1 id="triniti-ai-default">Default</h1>

## post__process

> Code samples

```shell
# You can also use wget
curl -X POST https://api.triniti.ai/v2/process \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: string' \
  -H 'X-Api-Secret: string' \
  -H 'X-User-Id: string' \
  -H 'X-Session-Id: string'

```

```http
POST https://api.triniti.ai/v2/process HTTP/1.1
Host: api.triniti.ai
Content-Type: application/json
Accept: application/json
X-Api-Key: string
X-Api-Secret: string
X-User-Id: string
X-Session-Id: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'string',
  'X-Api-Secret':'string',
  'X-User-Id':'string',
  'X-Session-Id':'string'

};

$.ajax({
  url: 'https://api.triniti.ai/v2/process',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "input": "I want to send to Amol",
  "previous-inputs": [
    "I want to transfer 50 rs"
  ],
  "prompt": "who do you want to transfer to?",
  "current-intent": "txn-moneymovement",
  "expected-entities": [
    "banking.payee_name",
    "sys.amount",
    "banking.from_account"
  ],
  "triniti-state-context": "",
  "client-state-context": {
    "user": "a",
    "txn": 124345
  },
  "options": [
    "similar",
    "fragment",
    "compression",
    "debug",
    "semantics",
    "discourse",
    "expansion"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'string',
  'X-Api-Secret':'string',
  'X-User-Id':'string',
  'X-Session-Id':'string'

};

fetch('https://api.triniti.ai/v2/process',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Api-Key' => 'string',
  'X-Api-Secret' => 'string',
  'X-User-Id' => 'string',
  'X-Session-Id' => 'string'
}

result = RestClient.post 'https://api.triniti.ai/v2/process',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Api-Key': 'string',
  'X-Api-Secret': 'string',
  'X-User-Id': 'string',
  'X-Session-Id': 'string'
}

r = requests.post('https://api.triniti.ai/v2/process', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("https://api.triniti.ai/v2/process");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"string"},
        "X-Api-Secret": []string{"string"},
        "X-User-Id": []string{"string"},
        "X-Session-Id": []string{"string"},

    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.triniti.ai/v2/process", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /process`

*Analyse the provided text using triniti v2 API engine.*

> Body parameter

```json
{
  "input": "I want to send to Amol",
  "previous-inputs": [
    "I want to transfer 50 rs"
  ],
  "prompt": "who do you want to transfer to?",
  "current-intent": "txn-moneymovement",
  "expected-entities": [
    "banking.payee_name",
    "sys.amount",
    "banking.from_account"
  ],
  "triniti-state-context": "",
  "client-state-context": {
    "user": "a",
    "txn": 124345
  },
  "options": [
    "similar",
    "fragment",
    "compression",
    "debug",
    "semantics",
    "discourse",
    "expansion"
  ]
}
```

<h3 id="post__process-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|true|Api key of the workspace that you want to analyse|
|X-Api-Secret|header|string|true|Api Secret of the workspace|
|X-User-Id|header|string|true|User-ID that you want to associate the request with|
|X-Session-Id|header|string|true|Session-ID to associate the context of the logged in user.|
|body|body|[RequestObject](#schemarequestobject)|true|The endpoint is used to process the natural language in the form of text. The response contains structured information which can be used to perform appropriate actions.|

> Example responses

> 200 Response

```json
{
  "version": "string",
  "client-state-context": "string",
  "query-processor": {
    "input": "string",
    "corrected": "string",
    "normalised": "string",
    "punctuated": "string",
    "compressed": "string",
    "cleaned": "string"
  },
  "output": [
    {
      "query": "string",
      "expanded": "string",
      "expansion-confidence": 0,
      "adversity": 0,
      "emotion": "string",
      "emotion-score": 0,
      "subject-of-emotion": "string",
      "intention": {
        "confirmation": true,
        "cancellation": true,
        "negation": true
      },
      "product-actions": {
        "products": "string",
        "actions": "string"
      },
      "semantic-roles": {
        "general-purpose": [
          "string"
        ],
        "cause": [
          "string"
        ],
        "direction": [
          "string"
        ],
        "discourse-marker": [
          "string"
        ],
        "extent": [
          "string"
        ],
        "location": [
          "string"
        ],
        "manner": [
          "string"
        ],
        "modal-verb": [
          "string"
        ],
        "negation-marker": "string",
        "purpose": [
          "string"
        ],
        "predication": [
          "string"
        ],
        "reciprocal": [
          "string"
        ],
        "temporal": [
          "string"
        ]
      },
      "context-changed": true,
      "discourse-relationship": {
        "temporal-asynchronous": 0,
        "temporal-synchronous": 0,
        "contingency-cause": 0,
        "contingency-pragmatic-cause": 0,
        "comparison-contrast": 0,
        "comparison-concession": 0,
        "expansion-conjunction": 0,
        "expansion-instantiation": 0,
        "expansion-restatement": 0,
        "expansion-alternative": 0,
        "expansion-list": 0
      },
      "semantics": {
        "sentence-type": "string",
        "response-type": "string",
        "response-grain": "string",
        "event-tense": "string",
        "semantic-parse": "string"
      },
      "top-intent": {
        "name": "string",
        "confidence": 0
      },
      "all-intents": [
        {
          "name": "string",
          "confidence": 0
        }
      ],
      "fragment": [
        {
          "expansion": "string"
        }
      ],
      "modifiers": [
        "string"
      ],
      "entities": [
        {
          "name": "string",
          "modifier": "string",
          "value": "string",
          "confidence": 0
        }
      ],
      "triniti-state-context": "string",
      "response": {
        "message": "string",
        "confidence": 0
      },
      "user-options": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "similar": [
        {
          "id": "string",
          "query": "string",
          "answer": "string",
          "confidence": 0
        }
      ],
      "debug": {
        "faq-subtopic": "string",
        "faq-subtopic-confidence": 0,
        "faq-topic": "string",
        "faq-topic-confidence": 0,
        "faq-products": "string",
        "faq-candidates": "string"
      }
    }
  ]
}
```

<h3 id="post__process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResponseObject](#schemaresponseobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSrequestobject">RequestObject</h2>

<a id="schemarequestobject"></a>

```json
{
  "input": "I want to send to Amol",
  "previous-inputs": [
    "I want to transfer 50 rs"
  ],
  "prompt": "who do you want to transfer to?",
  "current-intent": "txn-moneymovement",
  "expected-entities": [
    "banking.payee_name",
    "sys.amount",
    "banking.from_account"
  ],
  "triniti-state-context": "",
  "client-state-context": {
    "user": "a",
    "txn": 124345
  },
  "options": [
    "similar",
    "fragment",
    "compression",
    "debug",
    "semantics",
    "discourse",
    "expansion"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|Input query string in natural language as specified by the user|
|previous-inputs|[string]|false|none|Previous input stringd in the same session.|
|prompt|string|false|none|The query that was posted to the user before he queried|
|current-intent|string|false|none|The current intent of the transaction. if any|
|expected-entities|[string]|false|none|none|
|triniti-state-context|string|true|none|none|
|client-state-context|string|true|none|Serialized string which will be returned back after processing|
|options|[string]|false|none|none|

<h2 id="tocSresponseobject">ResponseObject</h2>

<a id="schemaresponseobject"></a>

```json
{
  "version": "string",
  "client-state-context": "string",
  "query-processor": {
    "input": "string",
    "corrected": "string",
    "normalised": "string",
    "punctuated": "string",
    "compressed": "string",
    "cleaned": "string"
  },
  "output": [
    {
      "query": "string",
      "expanded": "string",
      "expansion-confidence": 0,
      "adversity": 0,
      "emotion": "string",
      "emotion-score": 0,
      "subject-of-emotion": "string",
      "intention": {
        "confirmation": true,
        "cancellation": true,
        "negation": true
      },
      "product-actions": {
        "products": "string",
        "actions": "string"
      },
      "semantic-roles": {
        "general-purpose": [
          "string"
        ],
        "cause": [
          "string"
        ],
        "direction": [
          "string"
        ],
        "discourse-marker": [
          "string"
        ],
        "extent": [
          "string"
        ],
        "location": [
          "string"
        ],
        "manner": [
          "string"
        ],
        "modal-verb": [
          "string"
        ],
        "negation-marker": "string",
        "purpose": [
          "string"
        ],
        "predication": [
          "string"
        ],
        "reciprocal": [
          "string"
        ],
        "temporal": [
          "string"
        ]
      },
      "context-changed": true,
      "discourse-relationship": {
        "temporal-asynchronous": 0,
        "temporal-synchronous": 0,
        "contingency-cause": 0,
        "contingency-pragmatic-cause": 0,
        "comparison-contrast": 0,
        "comparison-concession": 0,
        "expansion-conjunction": 0,
        "expansion-instantiation": 0,
        "expansion-restatement": 0,
        "expansion-alternative": 0,
        "expansion-list": 0
      },
      "semantics": {
        "sentence-type": "string",
        "response-type": "string",
        "response-grain": "string",
        "event-tense": "string",
        "semantic-parse": "string"
      },
      "top-intent": {
        "name": "string",
        "confidence": 0
      },
      "all-intents": [
        {
          "name": "string",
          "confidence": 0
        }
      ],
      "fragment": [
        {
          "expansion": "string"
        }
      ],
      "modifiers": [
        "string"
      ],
      "entities": [
        {
          "name": "string",
          "modifier": "string",
          "value": "string",
          "confidence": 0
        }
      ],
      "triniti-state-context": "string",
      "response": {
        "message": "string",
        "confidence": 0
      },
      "user-options": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "similar": [
        {
          "id": "string",
          "query": "string",
          "answer": "string",
          "confidence": 0
        }
      ],
      "debug": {
        "faq-subtopic": "string",
        "faq-subtopic-confidence": 0,
        "faq-topic": "string",
        "faq-topic-confidence": 0,
        "faq-products": "string",
        "faq-candidates": "string"
      }
    }
  ]
}

```

*ResponseObject*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|This provides the Triniti Version that is processing this request.  Triniti upgrades within a major release 2.X.X are backward compatible for response structure.|
|client-state-context|string|false|none|This simply returns the Client-State-Context passed in the process request parameters. This is usually used when calling application does not want to maintain state or have implemented someone sort of call back.|
|query-processor|[QueryProcessor](#schemaqueryprocessor)|false|none|Output of query processor engine|
|output|[[Output](#schemaoutput)]|false|none|Analysis of the input query split based on sentence.|

<h2 id="tocSqueryprocessor">QueryProcessor</h2>

<a id="schemaqueryprocessor"></a>

```json
{
  "input": "string",
  "corrected": "string",
  "normalised": "string",
  "punctuated": "string",
  "compressed": "string",
  "cleaned": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|This is the input provided in the query parameters. Returned for purposes for reference and for use in stateless implementations|
|corrected|string|false|none|This is the intermediate output after spelling correction and acronym expansion.|
|normalised|string|false|none|This is the final output used for processing further. After performing Date and Number processing into standard formats.|
|punctuated|string|false|none|The normalised input is punctuated to identify multiple sentences and for removal of noise by means of compression|
|compressed|string|false|none|The punctuated input is compressed to remove all informative parts.|
|cleaned|string|false|none|Not Implemented|

<h2 id="tocSoutput">Output</h2>

<a id="schemaoutput"></a>

```json
{
  "query": "string",
  "expanded": "string",
  "expansion-confidence": 0,
  "adversity": 0,
  "emotion": "string",
  "emotion-score": 0,
  "subject-of-emotion": "string",
  "intention": {
    "confirmation": true,
    "cancellation": true,
    "negation": true
  },
  "product-actions": {
    "products": "string",
    "actions": "string"
  },
  "semantic-roles": {
    "general-purpose": [
      "string"
    ],
    "cause": [
      "string"
    ],
    "direction": [
      "string"
    ],
    "discourse-marker": [
      "string"
    ],
    "extent": [
      "string"
    ],
    "location": [
      "string"
    ],
    "manner": [
      "string"
    ],
    "modal-verb": [
      "string"
    ],
    "negation-marker": "string",
    "purpose": [
      "string"
    ],
    "predication": [
      "string"
    ],
    "reciprocal": [
      "string"
    ],
    "temporal": [
      "string"
    ]
  },
  "context-changed": true,
  "discourse-relationship": {
    "temporal-asynchronous": 0,
    "temporal-synchronous": 0,
    "contingency-cause": 0,
    "contingency-pragmatic-cause": 0,
    "comparison-contrast": 0,
    "comparison-concession": 0,
    "expansion-conjunction": 0,
    "expansion-instantiation": 0,
    "expansion-restatement": 0,
    "expansion-alternative": 0,
    "expansion-list": 0
  },
  "semantics": {
    "sentence-type": "string",
    "response-type": "string",
    "response-grain": "string",
    "event-tense": "string",
    "semantic-parse": "string"
  },
  "top-intent": {
    "name": "string",
    "confidence": 0
  },
  "all-intents": [
    {
      "name": "string",
      "confidence": 0
    }
  ],
  "fragment": [
    {
      "expansion": "string"
    }
  ],
  "modifiers": [
    "string"
  ],
  "entities": [
    {
      "name": "string",
      "modifier": "string",
      "value": "string",
      "confidence": 0
    }
  ],
  "triniti-state-context": "string",
  "response": {
    "message": "string",
    "confidence": 0
  },
  "user-options": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "similar": [
    {
      "id": "string",
      "query": "string",
      "answer": "string",
      "confidence": 0
    }
  ],
  "debug": {
    "faq-subtopic": "string",
    "faq-subtopic-confidence": 0,
    "faq-topic": "string",
    "faq-topic-confidence": 0,
    "faq-products": "string",
    "faq-candidates": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Queries section will have upto 2 queries in case user provides a compound sentence. This “Query” show the first/second query.|
|expanded|string|false|none|This is the contextually expanded query that is used for further processing.|
|expansion-confidence|integer|false|none|Not Implemented|
|adversity|integer|false|none|This returns the probability of the query being invalid or out of domain that the classifier has been trained for.  Anything above 0.5 is to be considered as an adversarial input.|
|emotion|string|false|none|This returns if the emotion of the input is “positive” or “Negative”|
|emotion-score|integer|false|none|This return the emotion score on scale of 0.0 - 1.0. 0.0 being extremely negative and 1.0 being extremely positive|
|subject-of-emotion|string|false|none|This return the subject of emotion if available based on users input. This is typically the noun phrases such as “card”, “service” etc.|
|intention|[Intention](#schemaintention)|false|none|List of intentions|
|product-actions|[ProductActions](#schemaproductactions)|false|none|List of products and actions|
|semantic-roles|[SemanticRoles](#schemasemanticroles)|false|none|List of semantic roles|
|context-changed|boolean|false|none|Return True if the current input from the user is not in context of the conversation|
|discourse-relationship|[DiscourseRelationship](#schemadiscourserelationship)|false|none|This return the top 3 probable relationships between the users previous input and the current one.|
|semantics|[Semantics](#schemasemantics)|false|none|none|
|top-intent|[Intent](#schemaintent)|false|none|This is the Top Intent that the classifier has identified.  It has “name” of the intent and the “confidence”|
|all-intents|[[Intent](#schemaintent)]|false|none|This is a collection of upto 3 intents which were returned by the classifier.  If available.|
|fragment|[[Fragment](#schemafragment)]|false|none|List of fragments|
|modifiers|[string]|false|none|List of Modifier String that were found in users utterance|
|entities|[[Entities](#schemaentities)]|false|none|List of entities|
|triniti-state-context|string|false|none|This is returned by triniti at times to remember the state of the conversation.  This value must be passed back on the subsequent call of triniti for that user session.|
|response|[Response](#schemaresponse)|false|none|none|
|user-options|[[UserOptions](#schemauseroptions)]|false|none|List of user options|
|similar|[[Similar](#schemasimilar)]|false|none|none|
|debug|[Debug](#schemadebug)|false|none|This contains debug information, that can communicate errors, exceptions and other information that can be useful to debug and behaviour from triniti.|

<h2 id="tocSintention">Intention</h2>

<a id="schemaintention"></a>

```json
{
  "confirmation": true,
  "cancellation": true,
  "negation": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmation|boolean|false|none|Return True if user provides an input that denotes confirmation of the bots confirmation.|
|cancellation|boolean|false|none|Returns True if user expresses his wish to abort the current conversation|
|negation|boolean|false|none|Returns True if user negates his input. Such as “the amount is not 400”|

<h2 id="tocSproductactions">ProductActions</h2>

<a id="schemaproductactions"></a>

```json
{
  "products": "string",
  "actions": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|string|false|none|List of Product Strings that were mentioned in the users input|
|actions|string|false|none|List of Action Verbs mentioned in the users input.|

<h2 id="tocSsemanticroles">SemanticRoles</h2>

<a id="schemasemanticroles"></a>

```json
{
  "general-purpose": [
    "string"
  ],
  "cause": [
    "string"
  ],
  "direction": [
    "string"
  ],
  "discourse-marker": [
    "string"
  ],
  "extent": [
    "string"
  ],
  "location": [
    "string"
  ],
  "manner": [
    "string"
  ],
  "modal-verb": [
    "string"
  ],
  "negation-marker": "string",
  "purpose": [
    "string"
  ],
  "predication": [
    "string"
  ],
  "reciprocal": [
    "string"
  ],
  "temporal": [
    "string"
  ]
}

```

*Returns list of Semantic Roles applicable in the given input and the phrases performing that role.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|general-purpose|[string]|false|none|none|
|cause|[string]|false|none|none|
|direction|[string]|false|none|none|
|discourse-marker|[string]|false|none|none|
|extent|[string]|false|none|none|
|location|[string]|false|none|none|
|manner|[string]|false|none|none|
|modal-verb|[string]|false|none|none|
|negation-marker|string|false|none|none|
|purpose|[string]|false|none|none|
|predication|[string]|false|none|none|
|reciprocal|[string]|false|none|none|
|temporal|[string]|false|none|none|

<h2 id="tocSdiscourserelationship">DiscourseRelationship</h2>

<a id="schemadiscourserelationship"></a>

```json
{
  "temporal-asynchronous": 0,
  "temporal-synchronous": 0,
  "contingency-cause": 0,
  "contingency-pragmatic-cause": 0,
  "comparison-contrast": 0,
  "comparison-concession": 0,
  "expansion-conjunction": 0,
  "expansion-instantiation": 0,
  "expansion-restatement": 0,
  "expansion-alternative": 0,
  "expansion-list": 0
}

```

*This return the top 3 probable relationships between the users previous input and the current one.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temporal-asynchronous|integer|false|none|none|
|temporal-synchronous|integer|false|none|none|
|contingency-cause|integer|false|none|none|
|contingency-pragmatic-cause|integer|false|none|none|
|comparison-contrast|integer|false|none|none|
|comparison-concession|integer|false|none|none|
|expansion-conjunction|integer|false|none|none|
|expansion-instantiation|integer|false|none|none|
|expansion-restatement|integer|false|none|none|
|expansion-alternative|integer|false|none|none|
|expansion-list|integer|false|none|none|

<h2 id="tocSsemantics">Semantics</h2>

<a id="schemasemantics"></a>

```json
{
  "sentence-type": "string",
  "response-type": "string",
  "response-grain": "string",
  "event-tense": "string",
  "semantic-parse": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentence-type|string|false|none|Returns “information” for inputs that are informative in nature. “instruction” for queries, transactions. This may be ignored if the input is smalltalk.|
|response-type|string|false|none|none|
|response-grain|string|false|none|none|
|event-tense|string|false|none|Returns “past” or “present” denoting the tense of the user input|
|semantic-parse|string|false|none|none|

<h2 id="tocSintent">Intent</h2>

<a id="schemaintent"></a>

```json
{
  "name": "string",
  "confidence": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|confidence|integer|false|none|none|

<h2 id="tocSfragment">Fragment</h2>

<a id="schemafragment"></a>

```json
{
  "expansion": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expansion|string|false|none|Provides upto 3 expansion options to make the users input complete and classifiable. This can be presented to the user if needed to let them make the choice on how their input should be interpreted.|

<h2 id="tocSentities">Entities</h2>

<a id="schemaentities"></a>

```json
{
  "name": "string",
  "modifier": "string",
  "value": "string",
  "confidence": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the Entity|
|modifier|string|false|none|Modifier Attached to the entity “to”, “from”|
|value|string|false|none|Value of the Entity that is extracted|
|confidence|integer|false|none|Confidence Level  on a scale of 0-1|

<h2 id="tocSresponse">Response</h2>

<a id="schemaresponse"></a>

```json
{
  "message": "string",
  "confidence": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|confidence|integer|false|none|none|

<h2 id="tocSuseroptions">UserOptions</h2>

<a id="schemauseroptions"></a>

```json
{
  "label": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label of the user options to be presented to the user.|
|value|string|false|none|Value to be sent back to triniti if the user selects that option.|

<h2 id="tocSsimilar">Similar</h2>

<a id="schemasimilar"></a>

```json
{
  "id": "string",
  "query": "string",
  "answer": "string",
  "confidence": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of similar question as what the user asked|
|query|string|false|none|The question that is similar|
|answer|string|false|none|Answer to be shown if user selects this question.|
|confidence|integer|false|none|Score between 0 - 1.0 denoting the similarity of the question user asked and this one.|

<h2 id="tocSdebug">Debug</h2>

<a id="schemadebug"></a>

```json
{
  "faq-subtopic": "string",
  "faq-subtopic-confidence": 0,
  "faq-topic": "string",
  "faq-topic-confidence": 0,
  "faq-products": "string",
  "faq-candidates": "string"
}

```

*This contains debug information, that can communicate errors, exceptions and other information that can be useful to debug and behaviour from triniti.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|faq-subtopic|string|false|none|none|
|faq-subtopic-confidence|integer|false|none|none|
|faq-topic|string|false|none|none|
|faq-topic-confidence|integer|false|none|none|
|faq-products|string|false|none|none|
|faq-candidates|string|false|none|none|
