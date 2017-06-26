import BasicLayout from '../layouts/BasicLayout';
import Dashboard from '../routes/Dashboard';
import ListPage from '../routes/ListPage';
import Profile from '../routes/Profile';
import BasicForms from '../routes/Forms/BasicForms';

export const menus = [{
  name: 'Dashboard',
  component: Dashboard,
  key: 'dashboard',
  path: '/',
  icon: 'setting',
  pageHeader: null,  // 去掉页面标题通栏
}, {
  name: '表单页',
  path: 'forms',
  icon: 'setting',
  defaultCollapsed: true,
  children: [{
    name: '基础表单',
    path: 'basic',
    component: BasicForms,
    icon: 'setting',
  }],
}, {
  name: '列表页',
  path: 'list',
  component: ListPage,
  icon: 'setting',
}, {
  name: '详情页',
  path: 'profile',
  component: Profile,
  icon: 'setting',
}];

export default [{
  component: BasicLayout,
  name: '首页',
  children: menus,
}];