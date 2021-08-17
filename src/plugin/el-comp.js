import {
  ElAlert,
  ElAside,
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElIcon,
  ElDivider,
  ElBacktop,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElContainer,
  ElHeader,
  ElSlider,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElTooltip,
  ElScrollbar,
  ElTableColumn,
  ElTag,
  ElTable,
} from 'element-plus';

// 所需的组件
export const components = [
  ElAlert,
  ElAside,
  ElButton,
  ElSelect,
  ElRow,
  ElCol,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElIcon,
  ElDivider,
  ElBacktop,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElContainer,
  ElHeader,
  ElSlider,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElTooltip,
  ElScrollbar,
  ElTableColumn,
  ElTag,
  ElTable,
];

// 注册
export default (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
