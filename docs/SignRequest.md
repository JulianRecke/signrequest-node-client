# SignrequestClient.Signrequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_email** | **String** | Email of user sending the SignRequest (must be a validated email) | [optional] 
**from_email_name** | **String** | Name to be used in the &#x60;From&#x60; email header, e.g. &#x60;{from_email_name} &lt;no-reply@signrequest.com&gt;&#x60; | [optional] 
**is_being_prepared** | **Boolean** | Have the sender of a SignRequest prepare the document before sending the request out, see: [prepare using the web interface](#section/Preparing-a-document/Prepare-using-the-web-interface) | [optional] 
**prepare_url** | **String** |  | [optional] 
**redirect_url** | **String** | URL at which SignRequest will redirect to when a document is signed | [optional] 
**required_attachments** | [**[RequiredAttachment]**](RequiredAttachment.md) |  | [optional] 
**disable_attachments** | **Boolean** | Disable uploading/adding of attachments | [optional] 
**disable_text_signatures** | **Boolean** | Disable usage of signatures generated by typing (text) | [optional] 
**disable_text** | **Boolean** | Disable adding of text | [optional] 
**disable_date** | **Boolean** | Disable adding of dates | [optional] 
**disable_emails** | **Boolean** | Disable all SignRequest status emails as well as the email that contains the signed documents | [optional] 
**disable_upload_signatures** | **Boolean** | Disable usage of uploaded signatures (images) | [optional] 
**subject** | **String** | Subject of SignRequest email | [optional] 
**message** | **String** | Message to include in SignRequest email, may contain the following html tags: &#x60;a&#x60;, &#x60;abbr&#x60;, &#x60;acronym&#x60;, &#x60;b&#x60;, &#x60;blockquote&#x60;, &#x60;code&#x60;, &#x60;em&#x60;, &#x60;i&#x60;, &#x60;ul&#x60;, &#x60;li&#x60;, &#x60;ol&#x60;, and &#x60;strong&#x60; | [optional] 
**who** | **String** | &#x60;m&#x60;: only me, &#x60;mo&#x60;: me and others, &#x60;o&#x60;: only others | [optional] 
**send_reminders** | **Boolean** | Automatically remind signers to sign a document | [optional] 
**signers** | [**[Signer]**](Signer.md) |  | [optional] 
**uuid** | **String** |  | [optional] 


<a name="WhoEnum"></a>
## Enum: WhoEnum


* `m` (value: `"m"`)

* `mo` (value: `"mo"`)

* `o` (value: `"o"`)




