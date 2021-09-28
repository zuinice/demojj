import Vue from 'vue';
// import 'font-awesome/css/font-awesome.css';
import 'ant-design-vue/dist/antd.css';
import {
  Button,
  Icon,
  Radio,
  Switch,
  Tabs,
  Form,
  Input,
  DatePicker,
  Select,
  Cascader,
  TimePicker,
  FormModel,
  Modal,
  Table,
  Checkbox,
  message,
  ConfigProvider,
  Row,
  Col,
  Divider,
  notification,
  Empty,
  Popconfirm,
  Pagination,
  Spin,
  Tooltip,
  Alert,
  InputNumber,
  Tag,
  Upload,
  Popover,
  AutoComplete,
  Layout,
  Menu,
  Avatar
} from 'ant-design-vue';
Vue.prototype.$Modal = Modal;
Vue.prototype.$Empty = Empty;
Vue.prototype.$notification = notification;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
let usedComponents = [
  Button,
  Icon,
  Radio,
  Switch,
  Tabs,
  Form,
  Input,
  DatePicker,
  Select,
  Cascader,
  TimePicker,
  FormModel,
  Modal,
  Table,
  Checkbox,
  ConfigProvider,
  Row,
  Col,
  Divider,
  Empty,
  Popconfirm,
  Pagination,
  Spin,
  Tooltip,
  Alert,
  InputNumber,
  Tag,
  Upload,
  Popover,
  AutoComplete,
  Layout,
  Menu,
  Avatar
];

usedComponents.forEach(component => Vue.use(component));