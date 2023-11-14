import { Component } from "react";

export type ClassComponentProps = {
  someProp: string;
};

export type ClassComponentState = {
  count: number;
};


export class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {

  constructor(props: ClassComponentProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incButtonClicked() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div className="FuncComponent">Class Component -- {this.props.someProp} -- count: {this.state.count}</div>
        <button onClick={this.incButtonClicked}>Increment Count</button>
      </div>
    )
  }
}
