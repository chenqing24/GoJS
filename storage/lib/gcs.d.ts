export interface DiagramFile {    id: string;    name: string;    path: string;    token?: string;    parentReference?: Object;}export interface DeferredPromise {    promise: any;}export declare class GoCloudStorage {    private _managedDiagrams;    private _clientId;    private _isAutoSaving;    private _currentDiagramFile;    private _ui;    private _defaultModel;    protected _serviceName: string;    protected _deferredPromise: DeferredPromise;    private _iconsRelativeDirectory;    constructor(managedDiagrams: go.Diagram | go.Diagram[], defaultModel?: string, clientId?: string, iconsRelativeDirectory?: string);    managedDiagrams: go.Diagram[];    defaultModel: string;    iconsRelativeDirectory: string;    readonly clientId: string;    currentDiagramFile: DiagramFile;    isAutoSaving: boolean;    readonly serviceName: string;    readonly ui: HTMLElement;    authorize(refreshToken?: boolean): Promise<{}>;    makeDeferredPromise(): Promise<Object>;    getUserInfo(): Promise<{}>;    hideUI(isActionCanceled?: boolean): void;    checkFileExists(path: string): Promise<{}>;    getFile(path: string): Promise<{}>;    showUI(action: string): Promise<{}>;    create(path?: string): Promise<{}>;    protected makeSaveFile(): string;    protected loadFromFileContents(fileContents: string): void;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    load(path: string): Promise<{}>;    loadWithUI(): Promise<{}>;    remove(path: string): Promise<{}>;    removeWithUI(): Promise<{}>;}export declare class GoCloudStorageManager {    private _storages;    private _currentStorage;    private _menu;    private _deferredPromise;    private _iconsRelativeDirectory;    constructor(storages: go.Set<gcs.GoCloudStorage> | gcs.GoCloudStorage[], iconsRelativeDirectory?: string);    readonly storages: go.Set<gcs.GoCloudStorage>;    iconsRelativeDirectory: string;    readonly menu: HTMLElement;    currentStorage: gcs.GoCloudStorage;    create(): Promise<{}>;    load(): Promise<{}>;    remove(): Promise<{}>;    save(isSaveAs?: boolean): Promise<{}>;    showMessage(msg: string, seconds?: number): void;    selectStorageService(): Promise<{}>;    hideMenu(): void;    private currentStorageNeedsAuth();    handleAction(action: string): Promise<{}>;}export declare class GoDropBox extends gcs.GoCloudStorage {    private _dropbox;    private _menuPath;    private static _MIN_FILES_IN_UI;    constructor(managedDiagrams: go.Diagram | go.Diagram[], clientId: string, defaultModel?: string, iconsRelativeDirectory?: string);    readonly dropbox: any;    menuPath: string;    authorize(refreshToken?: boolean): Promise<{}>;    getUserInfo(): Promise<{}>;    showUI(action: string, path?: string, numAdditionalFiles?: number): any;    hideUI(isActionCanceled?: boolean): void;    processUIResult(action: string): void;    checkFileExists(path: string): Promise<{}>;    getFile(path: string): any;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    loadWithUI(): Promise<{}>;    load(path: string): Promise<{}>;    removeWithUI(): Promise<{}>;    remove(path: string): Promise<{}>;}export declare class GoGoogleDrive extends gcs.GoCloudStorage {    private _pickerApiKey;    private _oauthToken;    private _scope;    private _gapiClient;    private _gapiPicker;    constructor(managedDiagrams: go.Diagram | go.Diagram[], clientId: string, pickerApiKey: string, defaultModel?: string, iconsRelativeDirectory?: string);    readonly pickerApiKey: string;    readonly scope: string;    readonly gapiClient: any;    readonly gapiPicker: any;    authorize(refreshToken?: boolean): Promise<{}>;    createPicker(cb: Function): void;    getUserInfo(): Promise<{}>;    getFile(path: string): Promise<{}>;    checkFileExists(path: string): Promise<{}>;    showUI(): any;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    loadWithUI(): Promise<{}>;    load(path: string): Promise<{}>;    removeWithUI(): Promise<{}>;    remove(path: string): Promise<{}>;}export declare class GoLocalStorage extends gcs.GoCloudStorage {    private _localStorage;    private static _MIN_FILES_IN_UI;    constructor(managedDiagrams: go.Diagram | go.Diagram[], defaultModel?: string, iconsRelativeDirectory?: string);    readonly localStorage: Storage;    authorize(refreshToken?: boolean): Promise<{}>;    showUI(action: string, numAdditionalFiles?: number): any;    processUIResult(action: string): void;    getFile(path: string): Promise<{}>;    checkFileExists(path: string): Promise<{}>;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    loadWithUI(): Promise<never>;    load(path: string): Promise<never>;    removeWithUI(): Promise<{}>;    remove(path: string): Promise<{}>;}export declare class GoNetCore extends gcs.GoCloudStorage {    private static _MIN_FILES_IN_UI;    private _rootEndpoint;    constructor(managedDiagrams: go.Diagram | go.Diagram[], rootEndpoint: string, defaultModel?: string, iconsRelativeDirectory?: string);    readonly rootEndpoint: string;    authorize(refreshToken?: boolean): Promise<{}>;    showUI(action: string, numAdditionalFiles?: number): any;    processUIResult(action: string): void;    getFile(path: string): Promise<{}>;    getFiles(): Promise<{}>;    checkFileExists(path: string): Promise<{}>;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    loadWithUI(): Promise<never>;    load(path: string): Promise<never>;    removeWithUI(): Promise<{}>;    remove(path: string): Promise<{}>;}export declare class GoOneDrive extends gcs.GoCloudStorage {    private _oneDriveFilepicker;    private _oauthToken;    constructor(managedDiagrams: go.Diagram | go.Diagram[], clientId: string, defaultModel?: string, iconsRelativeDirectory?: string);    oauthToken: string;    readonly oneDriveFilepicker: any;    authorize(refreshToken?: boolean): Promise<{}>;    getUserInfo(): Promise<{}>;    checkFileExists(path: string): Promise<{}>;    getFile(path: string, token?: string): Promise<{}>;    showUI(): any;    saveWithUI(): Promise<{}>;    save(path?: string): Promise<{}>;    loadWithUI(): Promise<{}>;    load(path: string, token?: string): Promise<{}>;    removeWithUI(): Promise<{}>;    remove(path: string, token?: string): Promise<{}>;    generateGraphUrl(driveItem: Object, targetParentFolder: boolean, itemRelativeApiPath: boolean): string;}