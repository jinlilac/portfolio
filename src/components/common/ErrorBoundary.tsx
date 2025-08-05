// src/components/common/ErrorBoundary.tsx
import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children?: ReactNode; // children를 선택적(optional)으로 설정
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">
            앗, 오류가 발생했습니다.
          </h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-primary-500 text-white rounded"
          >
            다시 시도
          </button>
        </div>
      );
    }
    return this.props.children ?? null;
  }
}
