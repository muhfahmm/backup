"use client";

import React from 'react';

type Props = { children: React.ReactNode };

export default class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  async componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    try {
      await fetch('/api/client-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'errorBoundary', error: String(error), info }),
      });
    } catch (e) {
      // ignore
    }
    // Also log to console for local debugging
    console.error('ErrorBoundary caught error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
