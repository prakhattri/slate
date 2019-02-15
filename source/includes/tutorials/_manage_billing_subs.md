# Manage Billing & Subscription

### Setting up Payment Information

Invoice payment can be made through credit card or EFT( Electronic Funds Transfer)

![alt_text](images/card-listing.png)

We accept Master, Visa and Amex type of credit cards.

![alt_text](images/add-card.png)

Workspace payment mapping. Each workpsace can be configured to used different credit cards.

![alt_text](images/workspace-payment-mapping.png)

## Charges
	
	Charges can be configured on either per API  or Slab wise. Charges can be configured differently for each plan.
	
### Per API
	
	Based on the total api usage , workspace charges will be calculated.

- For First n API  , the base charge will be charged. For any api usage greater than n [usage > n], Per api charge will be applied. that is [usage-n] > n , then 
- (usage-n) * per api charge

- Total Charge  = the base charge for n api + [usage -n] * per api

- Ex: For First 50 API the base charge is $5 and for per api $0.1, then

- For 100 API total charge will be $10 [$5 for 50 and $5 for another 50]

### Slab

- For total api usage,

- For First n API  , the base charge will be charged and then api's will be chargeb based on the slab's

- Total Charge = the base charge of first n api + [usage-n] slab charged

-  Ex: For First 50 API the base charge is $5 and then slabs are

-                                  Next 1-10 APIs charge is $0.5
-                                  Next 11-20 APIs charge is $1

- For 100 API, total charge will be $7.5 [$5 for 5 and $2 for 10-20 [2 * slaps 2 ] + $ 0.5 for 1-10 [1 * slaps1]]

- The charges will be defined based on the plans. We are supporting 3 plans

 		FREE -- for first 30 days after that it has to be upgraded to BASIC or PREMIUM else it will get expired
 		BASIC -- 
 		PREMIUM --



## Managing Plans

We have the following paid plans whose charges will be differ.

**Free**
**Basic**
**Premium**

User can upgrade from FREE -> BASIC, BASIC -> PREMIUM but can't downgrade

![alt_text](images/plan-selection.png)

## Managing Invoices

The Invoice will be generated on 1st of every month for the previous month workspace usage. Each workspace assigned a payment method and can be changed.

![alt_text](images/invoice_listing.png)
 

Invoice contains the details like total api consumed, domain charges, discount if applicable and taxes and email will be sent to the registed user email id.

The invoice amount will be charged on the same day of invoice generation. If Invoice amount is not paid with 3 attempts, then the workspace will be marked as BLOCKED. 

Once the invoice amount is paid through Pay Now option, then workspace status will be changed to ACTIVE.