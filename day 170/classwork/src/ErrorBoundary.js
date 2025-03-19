import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("err by errorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
          <h2>err</h2>
          <p>refresh prolly</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
