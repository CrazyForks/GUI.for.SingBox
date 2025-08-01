export {}

declare module 'vue' {
  export interface GlobalComponents {
    Button: (typeof import('./Button/index.vue'))['default']
    Card: (typeof import('./Card/index.vue'))['default']
    CheckBox: (typeof import('./CheckBox/index.vue'))['default']
    CodeViewer: (typeof import('./CodeViewer/index.vue'))['default']
    Confirm: (typeof import('./Confirm/index.vue'))['default']
    CustomAction: (typeof import('./CustomAction/index.vue'))['default']
    Divider: (typeof import('./Divider/index.vue'))['default']
    Dropdown: (typeof import('./Dropdown/index.vue'))['default']
    Empty: (typeof import('./Empty/index.vue'))['default']
    Icon: (typeof import('./Icon/index.vue'))['default']
    Input: (typeof import('./Input/index.vue'))['default']
    InputList: (typeof import('./InputList/index.vue'))['default']
    InterfaceSelect: (typeof import('./InterfaceSelect/index.vue'))['default']
    KeyValueEditor: (typeof import('./KeyValueEditor/index.vue'))['default']
    Menu: (typeof import('./Menu/index.vue'))['default']
    Message: (typeof import('./Message/index.vue'))['default']
    Modal: (typeof import('./Modal/index.vue'))['default']
    Pagination: (typeof import('./Pagination/index.vue'))['default']
    Picker: (typeof import('./Picker/index.vue'))['default']
    Progress: (typeof import('./Progress/index.vue'))['default']
    Prompt: (typeof import('./Prompt/index.vue'))['default']
    Radio: (typeof import('./Radio/index.vue'))['default']
    Select: (typeof import('./Select/index.vue'))['default']
    Switch: (typeof import('./Switch/index.vue'))['default']
    Table: (typeof import('./Table/index.vue'))['default']
    Tabs: (typeof import('./Tabs/index.vue'))['default']
    Tag: (typeof import('./Tag/index.vue'))['default']
    Tips: (typeof import('./Tips/index.vue'))['default']
    TrafficChart: (typeof import('./TrafficChart/index.vue'))['default']
  }
}
