/**
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthToken', 'model/Document', 'model/DocumentAttachment', 'model/DocumentSearch', 'model/DocumentSignerTemplateConf', 'model/Event', 'model/FileFromSf', 'model/InlineDocumentSignerIntegrationData', 'model/InlineIntegrationData', 'model/InlinePrefillTags', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/InlineResponse201', 'model/InlineResponse2011', 'model/InlineSignRequest', 'model/InlineTeam', 'model/InlineTeamMember', 'model/InviteMember', 'model/Placeholder', 'model/RequiredAttachment', 'model/SignRequest', 'model/SignRequestQuickCreate', 'model/Signer', 'model/SignerAttachment', 'model/SignerInputs', 'model/SigningLog', 'model/Signrequest', 'model/Team', 'model/Team1', 'model/TeamMember', 'model/Template', 'model/User', 'model/WebhookSubscription', 'api/ApiTokensApi', 'api/DocumentAttachmentsApi', 'api/DocumentsApi', 'api/DocumentsSearchApi', 'api/EventsApi', 'api/SignrequestQuickCreateApi', 'api/SignrequestsApi', 'api/TeamMembersApi', 'api/TeamsApi', 'api/TemplatesApi', 'api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthToken'), require('./model/Document'), require('./model/DocumentAttachment'), require('./model/DocumentSearch'), require('./model/DocumentSignerTemplateConf'), require('./model/Event'), require('./model/FileFromSf'), require('./model/InlineDocumentSignerIntegrationData'), require('./model/InlineIntegrationData'), require('./model/InlinePrefillTags'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/InlineResponse2009'), require('./model/InlineResponse201'), require('./model/InlineResponse2011'), require('./model/InlineSignRequest'), require('./model/InlineTeam'), require('./model/InlineTeamMember'), require('./model/InviteMember'), require('./model/Placeholder'), require('./model/RequiredAttachment'), require('./model/SignRequest'), require('./model/SignRequestQuickCreate'), require('./model/Signer'), require('./model/SignerAttachment'), require('./model/SignerInputs'), require('./model/SigningLog'), require('./model/Signrequest'), require('./model/Team'), require('./model/Team1'), require('./model/TeamMember'), require('./model/Template'), require('./model/User'), require('./model/WebhookSubscription'), require('./api/ApiTokensApi'), require('./api/DocumentAttachmentsApi'), require('./api/DocumentsApi'), require('./api/DocumentsSearchApi'), require('./api/EventsApi'), require('./api/SignrequestQuickCreateApi'), require('./api/SignrequestsApi'), require('./api/TeamMembersApi'), require('./api/TeamsApi'), require('./api/TemplatesApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, AuthToken, Document, DocumentAttachment, DocumentSearch, DocumentSignerTemplateConf, Event, FileFromSf, InlineDocumentSignerIntegrationData, InlineIntegrationData, InlinePrefillTags, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, InlineResponse201, InlineResponse2011, InlineSignRequest, InlineTeam, InlineTeamMember, InviteMember, Placeholder, RequiredAttachment, SignRequest, SignRequestQuickCreate, Signer, SignerAttachment, SignerInputs, SigningLog, Signrequest, Team, Team1, TeamMember, Template, User, WebhookSubscription, ApiTokensApi, DocumentAttachmentsApi, DocumentsApi, DocumentsSearchApi, EventsApi, SignrequestQuickCreateApi, SignrequestsApi, TeamMembersApi, TeamsApi, TemplatesApi, WebhooksApi) {
  'use strict';

  /**
   * API client for SignRequest.com.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SignrequestClient = require('index'); // See note below*.
   * var xxxSvc = new SignrequestClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SignrequestClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SignrequestClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SignrequestClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken: AuthToken,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The DocumentAttachment model constructor.
     * @property {module:model/DocumentAttachment}
     */
    DocumentAttachment: DocumentAttachment,
    /**
     * The DocumentSearch model constructor.
     * @property {module:model/DocumentSearch}
     */
    DocumentSearch: DocumentSearch,
    /**
     * The DocumentSignerTemplateConf model constructor.
     * @property {module:model/DocumentSignerTemplateConf}
     */
    DocumentSignerTemplateConf: DocumentSignerTemplateConf,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The FileFromSf model constructor.
     * @property {module:model/FileFromSf}
     */
    FileFromSf: FileFromSf,
    /**
     * The InlineDocumentSignerIntegrationData model constructor.
     * @property {module:model/InlineDocumentSignerIntegrationData}
     */
    InlineDocumentSignerIntegrationData: InlineDocumentSignerIntegrationData,
    /**
     * The InlineIntegrationData model constructor.
     * @property {module:model/InlineIntegrationData}
     */
    InlineIntegrationData: InlineIntegrationData,
    /**
     * The InlinePrefillTags model constructor.
     * @property {module:model/InlinePrefillTags}
     */
    InlinePrefillTags: InlinePrefillTags,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201: InlineResponse201,
    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011: InlineResponse2011,
    /**
     * The InlineSignRequest model constructor.
     * @property {module:model/InlineSignRequest}
     */
    InlineSignRequest: InlineSignRequest,
    /**
     * The InlineTeam model constructor.
     * @property {module:model/InlineTeam}
     */
    InlineTeam: InlineTeam,
    /**
     * The InlineTeamMember model constructor.
     * @property {module:model/InlineTeamMember}
     */
    InlineTeamMember: InlineTeamMember,
    /**
     * The InviteMember model constructor.
     * @property {module:model/InviteMember}
     */
    InviteMember: InviteMember,
    /**
     * The Placeholder model constructor.
     * @property {module:model/Placeholder}
     */
    Placeholder: Placeholder,
    /**
     * The RequiredAttachment model constructor.
     * @property {module:model/RequiredAttachment}
     */
    RequiredAttachment: RequiredAttachment,
    /**
     * The SignRequest model constructor.
     * @property {module:model/SignRequest}
     */
    SignRequest: SignRequest,
    /**
     * The SignRequestQuickCreate model constructor.
     * @property {module:model/SignRequestQuickCreate}
     */
    SignRequestQuickCreate: SignRequestQuickCreate,
    /**
     * The Signer model constructor.
     * @property {module:model/Signer}
     */
    Signer: Signer,
    /**
     * The SignerAttachment model constructor.
     * @property {module:model/SignerAttachment}
     */
    SignerAttachment: SignerAttachment,
    /**
     * The SignerInputs model constructor.
     * @property {module:model/SignerInputs}
     */
    SignerInputs: SignerInputs,
    /**
     * The SigningLog model constructor.
     * @property {module:model/SigningLog}
     */
    SigningLog: SigningLog,
    /**
     * The Signrequest model constructor.
     * @property {module:model/Signrequest}
     */
    Signrequest: Signrequest,
    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team: Team,
    /**
     * The Team1 model constructor.
     * @property {module:model/Team1}
     */
    Team1: Team1,
    /**
     * The TeamMember model constructor.
     * @property {module:model/TeamMember}
     */
    TeamMember: TeamMember,
    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template: Template,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The WebhookSubscription model constructor.
     * @property {module:model/WebhookSubscription}
     */
    WebhookSubscription: WebhookSubscription,
    /**
     * The ApiTokensApi service constructor.
     * @property {module:api/ApiTokensApi}
     */
    ApiTokensApi: ApiTokensApi,
    /**
     * The DocumentAttachmentsApi service constructor.
     * @property {module:api/DocumentAttachmentsApi}
     */
    DocumentAttachmentsApi: DocumentAttachmentsApi,
    /**
     * The DocumentsApi service constructor.
     * @property {module:api/DocumentsApi}
     */
    DocumentsApi: DocumentsApi,
    /**
     * The DocumentsSearchApi service constructor.
     * @property {module:api/DocumentsSearchApi}
     */
    DocumentsSearchApi: DocumentsSearchApi,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi,
    /**
     * The SignrequestQuickCreateApi service constructor.
     * @property {module:api/SignrequestQuickCreateApi}
     */
    SignrequestQuickCreateApi: SignrequestQuickCreateApi,
    /**
     * The SignrequestsApi service constructor.
     * @property {module:api/SignrequestsApi}
     */
    SignrequestsApi: SignrequestsApi,
    /**
     * The TeamMembersApi service constructor.
     * @property {module:api/TeamMembersApi}
     */
    TeamMembersApi: TeamMembersApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The TemplatesApi service constructor.
     * @property {module:api/TemplatesApi}
     */
    TemplatesApi: TemplatesApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
