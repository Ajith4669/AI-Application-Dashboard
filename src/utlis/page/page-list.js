import { message } from "antd";
import { Component } from "react";
import CrudService from "../../services/crud-service";

class PageList extends Component {
  title = "";
  state = { rows: [], isLoading: false };
  service = new CrudService();
  constructor(props) {
    super(props);
  }
  handleDataRetrieve(data) {
    return data;
  }
  handleData(data) {
    return data.map((e, i) => ({ sno: i + 1, ...e }));
  }
  retrieve(id) {
    this.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    this.service
      .retrieve(id)
      .then((response) => {
        let changes = this.handleDataRetrieve(response.data);
        this.setState((state) => ({
          ...state,
          data: changes,
          res: changes,
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          isLoading: false,
        }));
      });
  }
  list(filter = {}) {
    this.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    this.service
      .list(filter)
      .then((response) => {
        let changes = this.handleData(response.data);
        this.setState((state) => ({
          ...state,
          rows: changes,
          res: changes,
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          isLoading: false,
        }));
      });
  }
  _list(filter) {
    this.service
      .list(filter)
      .then((response) => {
        this.setState({
          ...this.state,
          rows: this.handleData(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          isLoading: false,
        }));
      });
  }
  componentDidMount() {
    this.list();
  }
  add() {
    this.setState({
      ...this.state,
      popup: {
        open: true,
        mode: "Add",
        title: `Add ${this.title}`,
        id: undefined,
        disabled: false,
      },
    });
  }
  edit(value) {
    this.setState({
      ...this.state,
      popup: {
        open: true,
        mode: "Update",
        title: `Update ${this.title}`,
        id: value,
        disabled: false,
      },
    });
  }
  view(value) {
    this.setState({
      ...this.state,
      popup: {
        open: true,
        mode: "View",
        title: `View ${this.title}`,
        id: value,
        disabled: true,
      },
    });
  }
  onClose = (data) => {
    this.setState({ ...this.state, popup: { open: false } }, () => {
      if (data) this.list();
    });
  };
  delete(id) {
    this.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    this.service
      .delete(id)
      .then(({ data }) => {
        if (data?.success) {
          message.success(data.message);
          this.list();
        } else {
          message.error(data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          isLoading: false,
        }));
      });
  }
  componentWillUnmount() {
    clearTimeout();
  }
}

export default PageList;
