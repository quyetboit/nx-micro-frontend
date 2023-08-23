
import * as ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import { Root } from 'react-dom/client';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="support" />
    </StyledApp>
  );
}

class AppSupportRoot extends HTMLElement {
  root!: Root;
  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('app-root-support', AppSupportRoot);
