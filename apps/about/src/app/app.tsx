import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import { Root } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="about" />
    </StyledApp>
  );
}

class AboutRootReactApp extends HTMLElement {
  root!: Root;
  connectedCallback(): void {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />);
  }

  disconnectedCallback(): void {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('app-contact-root', AboutRootReactApp);
