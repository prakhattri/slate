## Managing Android 

**Overview**

Android SDK provides a lightweight conversational / messaging UX interface for users to interact to the Triniti Platform. The SDK enables rich conversation components to be embedded in existing Android Mobile Apps.

**Pre Requisites**



*   Android Studio 2.3+
*   Android 4.4.0+

**Install and configure dependencies**

**Download SDK**

Download the Morfeus SDK from the given URL or other channels communicated to you. Extract MorfeusAndroidSDK_Hybrid.zip file which you have downloaded.

**Add SDK to your Android Studio project**



1.  Open your application's Android Studio project.
1.  Copy `MFSDKHybridKit.aar` file to project's `app/libs` folder.
1.  Create a new libs folder under app directory if it does not exist.
1.  Add the following dependencies to your app level `build.gradle` file.

```
dependencies {
...
// Voice SDK
compile ('com.morfeus.android.voice:MFSDKVoice:1.1.3')
// gRPC
compile 'io.grpc:grpc-okhttp:1.13.1'
compile 'io.grpc:grpc-protobuf-lite:1.13.1'
compile 'io.grpc:grpc-stub:1.13.1'
compile 'io.grpc:grpc-android:1.13.1'
compile 'javax.annotation:javax.annotation-api:1.2'

// OAuth2 for Google API
compile('com.google.auth:google-auth-library-oauth2-http:0.7.0') {
exclude module: 'httpclient'
}
compile(name: 'MFSDKHybridKit', ext: 'aar')
compile 'com.google.guava:guava:20.0'
compile 'com.android.support:appcompat-v7:25.0.0'
...
}
repositories {
flatDir {
dirs 'libs'
}
}
```

Note:If you get 64k method limit exception during compile time then add following code into your app-level build.gradle file.

```
android {
defaultConfig {
multiDexEnabled true
}
}
dependencies {
compile 'com.android.support:multidex:1.0.1'
}
```
Add the following lines to your project level `build.gradle` file.

```
allprojects {
repositories {
google()
jcenter()
maven {
   url "http://artifacts.active.ai/artifactory/android-sdk-release"
   credentials {
       username = "artifactory_username"
       password = "artifactory_password"
   }
}
}
}
```

**Initialize the SDK**

To initialize Morfeus SDK pass given `BOT_ID`, `BOT_NAME` and `END_POINT_URL` to `MFSDKMessagingManagerKit`. You must initialize Morfeus SDK once across the entire application.

Add following lines to your Activity/Application where you want to initialize the Morfeus SDK.` onCreate() `of Application class is best place to initialize. If you have already initialized MFSDK, reinitializing MFSDK will throw `MFSDKInitializationException`.


```
try {
// Properties to pass before initializing sdk
MFSDKProperties properties = new MFSDKProperties
	    .Builder(END_POINT_URL)
	    .addBot(BOT_ID, BOT_NAME)
	    .setSpeechAPIKey("YourSpeechAPIKey")
	    .build();

// sMFSDK is public static field variable
sMFSDK = new MFSDKMessagingManagerKit
	    .Builder(applicationContext)
	    .setSdkProperties(properties)
	    .build();

// Initialize sdk
sMFSDK.initWithProperties();

} catch (MFSDKInitializationException e) {
Log.e("MFSDK", e.getMessage());
}
```


**Properties:**


|Property|Description|
|-----|-|
|BOT_ID|The unique ID for the bot.
|BOT_NAME|The bot name to display on top of chat screen.
|END_POINT_URL|The bot API URL.

Above properties you can get through nevigating to Channels > Android click on settings icon.

![alt_text](images/android_config1.png)

**Invoke Chat Screen**

To invoke chat screen call `showScreen()` method of `MFSDKMessagingManagerKit`. Here, `sMSDK` is an instance variable of `MFSDKMessagingManagerKit`.

```
// Open chat screen
sMFSDK.showScreen(activityContext, BOT_ID);
```

You can get instance of `MFSDKMessagingManagerKit` by calling `getInstance() `of `MFSDKMessagingManagerKit`. Please make sure before calling `getInstance()` you have initialized the MFSDK. Please check following code snippet. 


```
try {
// Get SDK instance
MFSDKMessagingManager mfsdk = MFSDKMessagingManagerKit.getInstance();

// Open chat screen
mfsdk.showScreen(activityContext, BOT_ID);

} catch (Exception e) {
// Throws exception if MFSDK not initialised.
}
```

**Compile and Run**

Once above code is added you can build and run your application. On launch of chat screen, welcome message will be displayed. 


![alt_text](images/android_welcome.jpg)


**Providing User/Session Information**

You can pass set of user/session information to the MFSDK using `MFSDKSessionProperties` builder. In following example we are passing Customer ID to MFSDK.


```
HashMap<String, String> userInfoMap      = new HashMap();
userInfo.put("CUSTOMER_ID", customerID);
userInfo.put("SESSION_ID", sessionID); // Pass your app sessionID

MFSDKSessionProperties sessionProperties = new MFSDKSessionProperties
				      .Builder()
				      .setUserInfo(userInfoMap)
				      .build();

// Open chat screen 
mMFSdk.showScreen(LoginActivity.this, BOT_ID,  sessionProperties);
```

**Close chat screen with/without animation**

To close the chat screen call ` closeScreen(String botId, boolean withAnimation) `method of `MFSDKMessagingManager` with/without exit animation. Set second parameter to false to close screen without animation. 

```
// Close chat screen without exit animation
sMFSdk.closeScreen(BOT_ID, false);
```

**Enable voice chat**

If you haven't added required dependencies for voice than please add following dependencies in your project's build.gradle file. 

app/build.gradle

```
dependencies {
...
// Voice SDK dependencies
compile ('com.morfeus.android.voice:MFSDKVoice:1.1.3')
compile 'io.grpc:grpc-okhttp:1.13.1'
compile 'io.grpc:grpc-protobuf-lite:1.13.1'
compile 'io.grpc:grpc-stub:1.13.1'
compile 'io.grpc:grpc-android:1.13.1'
compile 'javax.annotation:javax.annotation-api:1.2'
compile('com.google.auth:google-auth-library-oauth2-http:0.7.0') {
exclude module: 'httpclient'
}
...
}

repositories {
flatDir {
dirs 'libs'
}
}
```
project/build.gradle

```
allprojects {
repositories {
google()
jcenter()
maven {
   url "http://artifacts.active.ai/artifactory/android-sdk-release"
   credentials {
       username = "artifactory_username"
       password = "artifactory_password"
   }
}
}
}
```


Call `setSpeechAPIKey(String apiKey)` method of` MFSDKProperties` builder to pass speech API key. 


```
try {
// Set speech API key
MFSDKProperties properties = new MFSDKProperties
	    .Builder(END_POINT_URL)
	    ...
	    .setSpeechAPIKey("YourSpeechAPIKey")
	    ... 
	    .build();

} catch (MFSDKInitializationException e) {
Log.e("MFSDK", e.getMessage());
}
```

**Set Speech-To-Text language**

In MFSDKHybridKit, English(India) is the default language set for Speech-To-Text. You can change STT language by passing valid language code using `setSpeechToTextLanguage("lang-Country") `method of` MFSDKProperties.Builder.` You can find list of supported language code [here](https://cloud.google.com/speech-to-text/docs/languages).


```
try {
// Set speech to text language
MFSDKProperties properties = new MFSDKProperties
	    .Builder(END_POINT_URL)
	    ...
	    .setSpeechToTextLanguage("en-IN")
	    ... 
	    .build();

} catch (MFSDKInitializationException e) {
Log.e("MFSDK", e.getMessage());
}
```


**Set Text-To-Speech language**

English(India) is the default language set for Text-To-Speech. You can change TTS language by passing valid language code using setTextToSpeechLanguage(`"lang-Country"`) method of `MFSDKProperties.Builder. `You can find list of supported language code [here](https://www.oracle.com/technetwork/java/javase/javase7locales-334809.html#util-text).


```
try {
// Set text to speech language
MFSDKProperties properties = new MFSDKProperties
	    .Builder(END_POINT_URL)
	    ...
	    .setTextToSpeechLanguage("en_IN")
	    ... 
	    .build();

} catch (MFSDKInitializationException e) {
Log.e("MFSDK", e.getMessage());
}
```

**Provide Speech Suggestions**

You can provide additional contextual information for processing user speech. To provide speech suggestions add list of words and phrases into `MFSpeechSuggestion.json` file and place it under assets folder of your project. You can add maximum 150 phrases into` MFSpeechSuggestion.json`. To see sample `MFSpeechSuggestion.json`, please download it from [here](http://artifacts.active.ai/artifactory/android-sdk-release/com/morfeus/android/voice/MFSDKVoice/MFSpeechSuggestion.json)<span style="text-decoration:underline;">.</span>


**Enable Analytics**

By default, analytics is disabled in SDK. To enable analytics set `enableAnalytics(true)` and pass analytics provider and id detail with `MFSDKProperpties`. Please check the following code snippet to enable analytics.


```
try {
// Pass analytics properties
MFSDKProperties properties = new MFSDKProperties
	    .Builder(END_POINT_URL)
	    ...
	    .enableAnalytics(true)
	    .setAnalyticsProvider("Your Analytics provider code")
	    .setAnalyticsId("Your Analytics ID")
	    ... 
	    .build();

} catch (MFSDKInitializationException e) {
Log.e("MFSDK", e.getMessage());
}
```