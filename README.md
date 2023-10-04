## 在 Angular 使用 Material CDK 來實作拖曳功能的使用者介面

在網頁上實作可拖曳的使用者介面可大符增加應用程式使用操作的友善性。

透過拖放，使用者可以使用滑鼠或觸控板點擊檔案並將其拖曳到可放置元素（放置區域），然後透過釋放滑鼠按鈕來「放置」檔案。這使您可以相對輕鬆地建立非常直觀的用戶體驗。 

要在 angular app 上實現這樣的功能除了可以透過第三方的 UI Component (如：igniteui、ngx-drag-drop)的支援外，最方便的解決方案是使用 Angular 內建的功能 Material CDK 來實作。

Angular Drag and Drop CDK（元件開發套件）提供自由拖曳、清單內排序、清單之間移動項目、動畫、觸摸裝置、自訂拖曳手把(handle)等的支援。

在下面的實作過程將會使用到下列技術:

- Angular cli 16
- Bootstrap 5 (UI Framework)
- Angular 16
    - Router
    - Standalone component
- Angular Material CDK
    - CdkDrag
    - CdkDragHandle
    - CdkDropList
    - CdkDropListGroup
    - moveItemInArray
