## Managing IOS 

**Overview**

iOS SDK provides a lightweight conversational / messaging UX interface for users to interact to the Triniti Platform. The SDK enables rich conversation components to be embedded in existing iOS Mobile Apps.


**Prerequisites**



*   OS X (10.11.x)
*   Xcode 8.3 or higher
*   Deployment target - iOS 8.0 or higher 


**Install and configure dependencies** 

**1. Install Cocoapods**

`CocoaPods` is a dependency manager for Objective-C, which automates and simplifies the process of using 3rd-party libraries in your projects.  `CocoaPods` is distributed as a ruby gem, and is installed by running the following commands in Terminal App:


```
$ sudo gem install cocoapods
$ pod setup
```

**2. Update .netrc file**

The Morfeus iOS SDK are stored in a secured artifactory. Cocoapods handles the process of linking these frameworks with the target application. When artifactory requests for authentication information when installing `MFSDKWebKit`, cocoapods reads credential information from the file` .netrc`, located in `~/ directory`.

The `.netrc` file format is as explained: we specify machine(artifactory) name, followed by login, followed by password, each in separate lines. There is exactly one space after the keywords machine, login, password.


```
machine <NETRC_MACHINE_NAME>
login <NETRC_LOGIN>
password <NETRC_PASSWORD>
```

One example of .netrc file structure with sample credentials is as below. Please check with the development team for the actual credentials to use.


<img src="images/ios_config1.png" alt="drawing" width="400"/>


**Steps to create or update .netrc file**

1.  Start up Terminal in mac
2.  Type "`cd ~/`" to go to your home folder
3.  Type "`touch .netrc`", this creates a new file, If a file with name `.netrc` not found.
4.  Type "`open -a TextEdit .netrc`", this opens `.netrc` file in TextEdit
5.  Append the machine name and credentials shared by development team in above format, if it does not exist already.
6.  Save and exit TextEdit

**3. Install the pod**

To integrate `'MFSDKWebKit'` into your Xcode project, specify the below code in your Podfile


```
source 'https://github.com/CocoaPods/Specs.git'
#Voice support is available from iOS 8.0 and above
platform :ios, '7.1'

target 'TargetAppName' do
pod '<COCOAPOD_NAME>'
end
```

Once added above code, run install command in your project directory, where your "`podfile`" is located.

```
$ pod install
```

If you get an error like "Unable to find a specification for <pod-name>", then run below command to update your specs to latest version.


```
$ pod repo update
```

When you want to update your pods to latest version then run below command.

```
$ pod update
```


Note: If we get "401 Unauthorized" error, then please verify your `.netrc` file and the associated credentials.

**4. Disable bitcode**

Select target open "`Build Settings`" tab and set "`Enable Bitcode`" to "`No`".


![alt_text](images/ios_config2.png)


**5. Give permission**

Search for ".plist" file in the supporting files folder in your Xcode project. Update NSAppTransportSecurity to describe your app's intended HTTP connection behavior. Please refer [apple documentation](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) and choose the best configuration for your app. Below is one sample configuration.



```
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>
```


**6. Invoke the SDK**

To invoke chat screen, create MFSDKProperties, MFSDKSessionProperties and then call the method showScreenWithBotID:fromViewController:withSessionProperties to present the chat screen. Please find below code sample.


```
// Add this to the .h of your file
#import "ViewController.h"
#import <MFSDKMessagingKit/MFSDKMessagingKit.h>
@interface ViewController ()<MFSDKMessagingDelegate>
@end

// Add this to the .m of your file
@implementation ViewController
// Once the button is clicked, show the message screen -(IBAction)startChat:(id)sender
{
MFSDKProperties *params = [[MFSDKProperties alloc] initWithDomain:@"<END_POINT_URL>"];
[params addBot:@"<BOT_ID>" botName:@"<BOT_NAME>"]; 
params.messagingDelegate = self;
[[MFSDKMessagingManager sharedInstance] initWithProperties:params];

MFSDKSessionProperties *sessionProperties = [[MFSDKSessionProperties alloc]init];
sessionProperties.userInfo = [[NSDictionary alloc] initWithObjectsAndKeys:@"KEY",@"VALUE", nil];
[[MFSDKMessagingManager sharedInstance] showScreenWithBotID:@"<BOT_ID>" fromViewController:self withSessionProperties:sessionProperties];
}

@end
```


**Properties:**

|Property|Description
|-|-|
|BOT_ID|The unique ID for the bot
|BOT_NAME|The bot name to display on top of chat screen.
|END_POINT_URL|The bot API URL

Above properties you can get through nevigating to Channels > iOS click on settings icon.

![alt_text](images/ios_config3.png)

**Compile and Run**

Once above code is added we can build and run. On launch of chat screen, welcome message will be displayed.


![alt_text](images/ios_welcome.jpg)


**Providing User/Session Information**

You can pass set of key value pairs to the MFSDK using userInfo(NSDictionary) in MFSDKSessionProperties. In following example we are passing Customer ID, Session ID to MFSDK.

```
 MFSDKSessionProperties *sessionProperties = [[MFSDKSessionProperties alloc]init];
 sessionProperties.userInfo = @{@"CUSTOMER_ID": @"<CUSTOMER_ID_VALUE>", @"SESSION_ID": @"<SESSION_ID_VALUE>", nil];
 [[MFSDKMessagingManager sharedInstance] showScreenWithBotID:@"<BOT_ID>" fromViewController:self withSessionProperties:sessionProperties];
```

**Retrieve Close Event**

To retrieve close event, implement the MFSDKMessagingDelegate. MFSDK will call onChatClose method when user touches back button, which results in closure of chat screen. 

Please check following code sample.


```
// Add this to the header of your file
#import "ViewController.h"
#import <MFSDKMessagingKit/MFSDKMessagingKit.h>
@interface ViewController ()<MFSDKMessagingDelegate>
@end
@implementation ViewController 
-(IBAction)startChat:(id)sender
{
    ...
    //Show chat screen
}
  
-(void)onChatClose
{
    NSLog(@"Chat screen closed, perform necessary action");
}
@end
```


**Close Chat Screen**

To close the chat screen without animation call closeScreenWithBotID:withAnimation: with the botId as first parameter and boolean value NO as second parameter.

```
 [[MFSDKMessagingManager sharedInstance] closeScreenWithBotID:@"<BOT_ID>" withAnimation:NO];
```

**Enable voice chat**

**Provide Speech API Key**

MFSDKWebKit supports text to speech and speech to text feature. The minimum iOS deployment target for voice feature is iOS 8.0. The pod file also needs to be updated with the minimum deployment target for voice feature. Speech API key can be passed using speechAPIKey in MFSDKSessionProperties as below. 


```
   MFSDKSessionProperties *sessionProperties = [[MFSDKSessionProperties alloc]init];
...
   sessionProperties.speechAPIKey = @"<YOUR_SPEECH_API_KEY>";
...
  [[MFSDKMessagingManager sharedInstance] showScreenWithBotID:@"<BOT_ID>" fromViewController:self withSessionProperties:sessionProperties];
```


Search for ".`plist`" file in the supporting files folder in your Xcode project. Add needed capabilities like below and appropriate description.


```
<key>NSSpeechRecognitionUsageDescription</key>
<string>SPECIFY_REASON_FOR_USING_SPEECH_RECOGNITION</string>

<key>NSMicrophoneUsageDescription</key>
<string>SPECIFY_REASON_FOR_USING_MICROPHONE</string>
```


**Set Speech-To-Text language**

English(India) is the default language set for Speech-To-Text. You can change STT language by passing valid language code using `speechToTextLanguage property of MFSDKSessionProperties.` You can find list of supported language code [here](https://cloud.google.com/speech-to-text/docs/languages).


```
MFSDKSessionProperties *sessionProperties = [[MFSDKSessionProperties alloc]init];
   sessionProperties.shouldSupportMultiLanguage = YES;
   sessionProperties.speechToTextLanguage = @"en-IN";
```

**Set Text-To-Speech language**

English(India) is the default language set for Text-To-Speech. You can change STT language by passing valid language code using `textToSpeechLanguage property of MFSDKSessionProperties.`Please set language code as per apple guidelines.


```
MFSDKSessionProperties *sessionProperties = [[MFSDKSessionProperties alloc]init];
   sessionProperties.shouldSupportMultiLanguage = YES;
   sessionProperties.textToSpeechLanguage = @"en-IN";
```

**Provide Speech Suggestions**

You can provide additional contextual information for processing user speech. To provide speech suggestions add list of words and phrases into `MFSpeechSuggestion.json` file and add it to main bundle of your target. You can add maximum 150 phrases into` MFSpeechSuggestion.json`. To see sample `MFSpeechSuggestion.json`, please download it from [here](http://artifacts.active.ai/artifactory/android-sdk-release/com/morfeus/android/voice/MFSDKVoice/MFSpeechSuggestion.json)<span style="text-decoration:underline;">.</span>



**Enable Analytics**				

By default, analytics is disabled in SDK. To enable analytics set enableAnalytics to YES` `and pass analytics provider and id detail with MFSDKProperpties. Please check the following code snippet to enable analytics


```
// Add this to the header of your file
#import "ViewController.h"
#import <MFSDKMessagingKit/MFSDKMessagingKit.h>
@interface ViewController ()<MFSDKMessagingDelegate>
@end
@implementation ViewController 
-(IBAction)startChat:(id)sender
{
    MFSDKProperties *params = [[MFSDKProperties alloc] initWithDomain:@"<END_POINT_URL>"];
    params.enableAnalytics = YES;
    params.analyticsProvider = @"YOUR_ANALYTICS_PROVIDER_CODE";
    params.analyticsId = @"YOUR_ANALYTICS_ID";
    ...    
    [[MFSDKMessagingManager sharedInstance] initWithProperties:params];
    ...
    //Show chat screen
}
@end
```