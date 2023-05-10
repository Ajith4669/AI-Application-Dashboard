import { message } from "antd";
import { Component } from "react";
import CrudService from "../../services/crud-service";
class PageForm extends Component {
  state = { fMode: "Add" };
  service = new CrudService();
  saveFn(data) {
    if (this.props.id || this.props.params?.id) {
      if (this.props.id) return this.service.update(data, this.props.id);
      else return this.service.update(data, this.props.params.id);
    }
    return this.service.add(data);
  }
  onSubmit(data) {
    this.setState((state) => ({ ...state, isLoading: true }));
    this.saveFn(data)
      .then(({ data, statuscode }) => {
        if (data.success === true) {
          this.onSuccess(data);
        } else {
          this.onFailure(data);
        }
      })
      .catch((error) => {
        this.onFailure(error);
      })
      .finally(() => {
        this.setState((state) => ({ ...state, isLoading: false }));
      });
  }
  onSuccess(data) {
    message.success(data.message);
  }
  onFailure(data) {
    message.error(data.message);
  }
  static getDerivedStateFromProps(props, state) {
    return { ...state, ...props };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.open !== prevProps.open)
      this.setState({ ...this.state, initialValues: {} });
    if (this.props?.id && this.props.id !== prevProps.id) {
      this.onRetrieve(this.props.id);
    }
  }
  componentDidMount() {
    if (this.props.id) {
      this.onRetrieve(this.props.id);
      this.setState((state) => ({ ...state, fMode: "Update" }));
    }
  }
  componentWillUnmount() {
    if (this.props.form) this.props.form.resetFields();
  }
  onRetrieve(id) {
    this.setState((state, props) => ({ ...state, isLoading: true }));
    this.service.retrieve(id).then((response) => {
      this.setState((state, props) => ({
        ...state,
        initialValues: response.data,
        isLoading: false,
      }));
      this.patchForm(response.data);
    });
  }
  patchForm(data) {
    if (this.props.form) {
      this.props.form.setFieldsValue(data);

      setTimeout(() => {
        this.triggerInitialChange();
      }, 500);
    }
  }
  onFinish = (v) => {
    this.onSubmit(v);
  };
  triggerInitialChange() {}
}

export default PageForm;
