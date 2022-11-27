import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

function Portal({ children }: PortalProps): React.ReactPortal {
  const modalElement = document.getElementById('modal') as HTMLElement;

  return createPortal(children, modalElement);
}

export default Portal;
